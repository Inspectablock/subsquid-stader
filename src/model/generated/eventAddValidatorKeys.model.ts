import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class EventAddValidatorKeys {
    constructor(props?: Partial<EventAddValidatorKeys>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    /**
     * Account that sent tokens
     */
    @Column_("text", {nullable: false})
    from!: string

    @Index_()
    @Column_("text", {nullable: false})
    transactionHash!: string

    /**
     * Block number
     */
    @Column_("int4", {nullable: false})
    blockNumber!: number

    /**
     * Block time
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockTime!: bigint
}
