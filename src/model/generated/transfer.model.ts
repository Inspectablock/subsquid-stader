import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Transfer {
    constructor(props?: Partial<Transfer>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    /**
     * cTokens transferred
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    /**
     * Account that received tokens
     */
    @Column_("text", {nullable: false})
    to!: string

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

    /**
     * Symbol of the cToken transferred
     */
    @Column_("text", {nullable: false})
    tokenSymbol!: string
}
