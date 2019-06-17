// Type definitions for neverbounce 4.2
// Project: https://github.com/NeverBounce/NeverBounceApi-NodeJS
// Definitions by: George Novitskiy <https://github.com/georgenov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
export = NeverBounce;

declare class NeverBounce {
    constructor(config: NB.Config);

    getConfig(): NB.Config;

    getRequestOpts(opts: NB.ConfigOptions): NB.ConfigOptions;

    setApiKey(key: string): void;

    setHost(host: string): void;

    errors: NB.Errors;

    account: NB.Account;

    jobs: NB.Jobs;

    poe: NB.Poe;

    single: NB.Single;

    static defaultConfig: NB.Config;

    static job: {
        inputType: {
            remote: string;
            supplied: string;
        };
        status: {
            complete: string;
            failed: string;
            parsing: string;
            queued: string;
            running: string;
            under_review: string;
            uploading: string;
            waiting: string;
            waiting_analyzed: string;
        };
    };

    static result: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        catchall: number;
        disposable: number;
        flags: {
            academic_host: string;
            accepts_all: string;
            bad_dns: string;
            bad_syntax: string;
            connect_fails: string;
            contains_alias: string;
            contains_subdomain: string;
            disposable_email: string;
            free_email_host: string;
            government_host: string;
            has_dns: string;
            has_dns_mx: string;
            international_host: string;
            military_host: string;
            profanity: string;
            role_account: string;
            smtp_connectable: string;
            spamtrap_network: string;
            spelling_mistake: string;
            squatter_host: string;
            temporary_dns_error: string;
        };
        invalid: number;
        unknown: number;
        valid: number;
    };
}

declare namespace NB {
    class Errors extends Error {
        constructor(type: string, message: string);

        static _lut: {
            general_failure: string,
            auth_failure: string,
            bad_referrer: string,
            throttle_triggered: string,
        };

        static AuthError: string;
        static BadReferrerError: string;
        static GeneralError: string;
        static ThrottleError: string;
    }

    class Account {
        info(): Promise<Response>;
    }

    class Jobs {
        search(query: any): Promise<Response>;

        create(input: any, inputLocation: any, fileName: any, runSample?: any, autoParse?: any, autoStart?: any): Promise<Response>;

        parse(jobId: number, autoStart?: any): Promise<Response>;

        start(jobId: number, runSample?: any): Promise<Response>;

        status(jobId: number): Promise<Response>;

        results(jobId: number, query: any): Promise<Response>;

        download(jobId: number): Promise<Response>;
    }

    class Poe {
        confirm(email: string, result: string, confirmationToken: string, transactionId: string): Promise<Response>;
    }

    class Single {
        check(email: string, addressInfo?: boolean, creditsInfo?: boolean, timeout?: any): Promise<Response>;
    }

    interface Config {
        apiKey?: any;
        opts?: ConfigOptions;
        timeout?: number;
    }

    interface ConfigOptions {
        acceptedType?: string;
        headers?: {
            "Content-Type"?: string;
            "User-Agent"?: string;
        };
        host?: string;
        port?: number;
    }

    type Response = object;
}
