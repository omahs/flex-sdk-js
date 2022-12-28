import { test, expect } from "./config"
import { Evr } from "../flex"

test.describe('Balances', () => {
    test("natives", async ({ nativeBalances, accounts }) => {
        expect(
            nativeBalances.get(accounts.everWalletAddress),
            `Natives on EverWallet ${accounts.everWalletAddress}`,
        ).toBeGreaterThan(Evr.toUnits(100))
        expect(
            nativeBalances.get(accounts.flexClientAddress),
            `Natives on FlexClient ${accounts.flexClientAddress}`,
        ).toBeGreaterThan(Evr.toUnits(40))
        expect(
            nativeBalances.get(accounts.EVER.internalAddress),
            `Natives on internal EVER ${accounts.EVER.internalAddress}`,
        ).toBeGreaterThan(Evr.toUnits(100))
        expect(
            nativeBalances.get(accounts.TSDT.internalAddress),
            `Natives on internal TSDT ${accounts.TSDT.internalAddress}`,
        ).toBeGreaterThan(Evr.toUnits(100))
    })

    test("tokens", async ({ flex, accounts }) => {
        expect(
            await flex.getFlexTokenBalance(accounts.EVER.internal),
            `Tokens on internal EVER ${accounts.EVER.internalAddress}`,
        ).toBeGreaterThan(50)
        expect(
            await flex.getTip3TokenBalance(accounts.TSDT.external),
            `Tokens on external TSDT ${accounts.TSDT.externalAddress}`,
        ).toBeGreaterThan(100)
        expect(
            await flex.getFlexTokenBalance(accounts.TSDT.internal),
            `Tokens on internal TSDT ${accounts.TSDT.internalAddress}`,
        ).toBeGreaterThan(50)
    })
})
