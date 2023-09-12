import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class EventOperatorRewardsClaimed {
    constructor(props?: Partial<EventOperatorRewardsClaimed>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    /**
     * SD reward amount
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amountSd!: bigint

    /**
     * ETH reward amount
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amountEth!: bigint

    /**
     * Account that sent tokens
     */
    @Column_("text", {nullable: false})
    to!: string

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
