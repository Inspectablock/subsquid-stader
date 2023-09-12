module.exports = class Data1694065978808 {
    name = 'Data1694065978808'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "hash" text NOT NULL, "contract" text, "transaction_fee" numeric NOT NULL, "to" text NOT NULL, "from" text NOT NULL, "func" text NOT NULL, "value" numeric NOT NULL, "block_id" character varying, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_de4f0899c41c688529784bc443" ON "transaction" ("hash") `)
        await db.query(`CREATE INDEX "IDX_c0e1460f3c9eee975fee81002d" ON "transaction" ("block_id") `)
        await db.query(`CREATE TABLE "block" ("id" character varying NOT NULL, "number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_38414873c187a3e0c7943bc4c7" ON "block" ("number") `)
        await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "to" text NOT NULL, "from" text NOT NULL, "transaction_hash" text NOT NULL, "block_number" integer NOT NULL, "block_time" numeric NOT NULL, "token_symbol" text NOT NULL, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e8a057744db5ad984bbea97444" ON "transfer" ("transaction_hash") `)
        await db.query(`CREATE TABLE "event_deposit_sd_as_collateral" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "from" text NOT NULL, "transaction_hash" text NOT NULL, "block_number" integer NOT NULL, "block_time" numeric NOT NULL, CONSTRAINT "PK_778d25c82f254e3ddeca9ffc3cc" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_7ea16744381c206e2888bc9c97" ON "event_deposit_sd_as_collateral" ("transaction_hash") `)
        await db.query(`CREATE TABLE "event_operator_rewards_updated" ("id" character varying NOT NULL, "transaction_hash" text NOT NULL, "block_number" integer NOT NULL, "block_time" numeric NOT NULL, CONSTRAINT "PK_b95237edf6ae69fa085c5d044b8" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3123d63a682cfca07af407fcdf" ON "event_operator_rewards_updated" ("transaction_hash") `)
        await db.query(`CREATE TABLE "event_add_validator_keys" ("id" character varying NOT NULL, "from" text NOT NULL, "transaction_hash" text NOT NULL, "block_number" integer NOT NULL, "block_time" numeric NOT NULL, CONSTRAINT "PK_7ecdfd003c4f1308bb16a57deb3" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_86c38c618d3124a62a7a076d2a" ON "event_add_validator_keys" ("transaction_hash") `)
        await db.query(`CREATE TABLE "event_operator_rewards_claimed" ("id" character varying NOT NULL, "amount_sd" numeric NOT NULL, "amount_eth" numeric NOT NULL, "to" text NOT NULL, "transaction_hash" text NOT NULL, "block_number" integer NOT NULL, "block_time" numeric NOT NULL, CONSTRAINT "PK_7bdb5a0dac7e9affbb9e38a681b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_18e9ebcc453621202228f30499" ON "event_operator_rewards_claimed" ("transaction_hash") `)
        await db.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_c0e1460f3c9eee975fee81002dc" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_de4f0899c41c688529784bc443"`)
        await db.query(`DROP INDEX "public"."IDX_c0e1460f3c9eee975fee81002d"`)
        await db.query(`DROP TABLE "block"`)
        await db.query(`DROP INDEX "public"."IDX_38414873c187a3e0c7943bc4c7"`)
        await db.query(`DROP TABLE "transfer"`)
        await db.query(`DROP INDEX "public"."IDX_e8a057744db5ad984bbea97444"`)
        await db.query(`DROP TABLE "event_deposit_sd_as_collateral"`)
        await db.query(`DROP INDEX "public"."IDX_7ea16744381c206e2888bc9c97"`)
        await db.query(`DROP TABLE "event_operator_rewards_updated"`)
        await db.query(`DROP INDEX "public"."IDX_3123d63a682cfca07af407fcdf"`)
        await db.query(`DROP TABLE "event_add_validator_keys"`)
        await db.query(`DROP INDEX "public"."IDX_86c38c618d3124a62a7a076d2a"`)
        await db.query(`DROP TABLE "event_operator_rewards_claimed"`)
        await db.query(`DROP INDEX "public"."IDX_18e9ebcc453621202228f30499"`)
        await db.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_c0e1460f3c9eee975fee81002dc"`)
    }
}
