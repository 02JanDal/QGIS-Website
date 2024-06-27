import type { Page, Locator } from "@playwright/test";

export class SupportPage {
    public readonly url: string = "/resources/support/";
    public readonly pageBody: Locator;
    public readonly textList: string[] = [
        "Support",
        "Discourse",
        "Mailing Lists",
        "StackExchange",
        "Communication channels",
        "Telegram",
        "Matrix / IRC",
        "Facebook",
        "User Groups",
        "Security Vulnerability Reporting"
    ];
    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
    }
    async goto() {
        await this.page.goto(this.url);
    }
}

export class OtherSupportPage {
    public readonly pageBody: Locator;
    public readonly communicationChannelsLink: Locator;
    public readonly commercialSupportLink: Locator;
    public readonly commercialSupportText: Locator;
    public readonly commercialSupportSection: Locator;
    public readonly coreContributorsSection: Locator;
    public readonly stackExchangeLink: Locator;
    public readonly websiteCreationLink: Locator;
    public readonly textList: string[] = [
        "Commercial support",
        "Note",
        "Core contributors",
        "Contributors",
    ];
    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.communicationChannelsLink = this.page.getByRole("link", {
            name: "Communication channels",
        });
        this.commercialSupportLink = this.page.getByRole("link", {
            name: "Commercial support",
        });
        this.commercialSupportSection = this.page.locator(
            "#commercial-support",
        );
        this.coreContributorsSection = this.page.locator("#core-contributors");
        this.stackExchangeLink = this.page.getByRole("link", {
            name: "StackExchange",
        });
    }

    async navigateToCommunicationChannels() {
        await this.communicationChannelsLink.click();
    }

    async navigateToCommercialSupport() {
        await this.commercialSupportLink.click();
    }

    async navigateToStackExchange() {
        await this.stackExchangeLink.click();
    }

    async navigateToWebsiteCreation() {
        await this.websiteCreationLink.click();
    }
}
