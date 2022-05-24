
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { 
    deployHelper,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type SuperRootOwnerSetCodeInput = {
    type: number /* uint8 */,
    code: string /* cell */,
};

export type SuperRootOwnerDeploySuperRootInput = {
    evers: string | number | bigint /* uint128 */,
    prev_super_root?: string /* optional(address) */,
};

export type SuperRootOwnerDeploySuperRootOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerUpdateInput = {
    main_evers: string | number | bigint /* uint128 */,
    cfg_deploy_evers: string | number | bigint /* uint128 */,
    cfg_keep_evers: string | number | bigint /* uint128 */,
    version: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    wrappers_cfg: string /* address */,
    flex: string /* address */,
    user_cfg: string /* address */,
    description: string /* string */,
};

export type SuperRootOwnerReleaseInput = {
    main_evers: string | number | bigint /* uint128 */,
};

export type SuperRootOwnerAddWrapperTypeInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrappers_cfg_keep_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    type: number /* uint8 */,
    wrapper_deployer: string /* address */,
};

export type SuperRootOwnerAddWrapperInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrappers_cfg_keep_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        wic_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    symbol: string /* string */,
    type: number /* uint8 */,
    init_args: string /* cell */,
};

export type SuperRootOwnerAddXchgPairInput = {
    main_evers: string | number | bigint /* uint128 */,
    flex: string /* address */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        pair_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    major_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    minor_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    min_amount: string | number | bigint /* uint128 */,
    minmove: string | number | bigint /* uint128 */,
    price_denum: string | number | bigint /* uint128 */,
    notify_addr: string /* address */,
};

export type SuperRootOwnerUnlistWrapperInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    wic: string /* address */,
};

export type SuperRootOwnerUnlistXchgPairInput = {
    main_evers: string | number | bigint /* uint128 */,
    flex: string /* address */,
    pair: string /* address */,
};

export type SuperRootOwnerDeployWrappersConfigInput = {
    main_evers: string | number | bigint /* uint128 */,
    deploy_evers: string | number | bigint /* uint128 */,
    wrappers_cfg_keep_evers: string | number | bigint /* uint128 */,
    token_version: number /* uint32 */,
};

export type SuperRootOwnerDeployWrappersConfigOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerDeployFlexInput = {
    main_evers: string | number | bigint /* uint128 */,
    deploy_evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        pair_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    old_flex?: string /* optional(address) */,
    exchange_version: number /* uint32 */,
    ev_cfg: {
        transfer_tip3: string | number | bigint /* uint128 */,
        return_ownership: string | number | bigint /* uint128 */,
        order_answer: string | number | bigint /* uint128 */,
        process_queue: string | number | bigint /* uint128 */,
        send_notify: string | number | bigint /* uint128 */,
        dest_wallet_keep_evers: string | number | bigint /* uint128 */,
    } /* tuple */,
    deals_limit: number /* uint8 */,
};

export type SuperRootOwnerDeployFlexOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerDeployUserDataConfigInput = {
    main_evers: string | number | bigint /* uint128 */,
    deploy_evers: string | number | bigint /* uint128 */,
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    flex: string /* address */,
};

export type SuperRootOwnerDeployUserDataConfigOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerCloneWrappersConfigInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    wrapper_cfg_keep_evers: string | number | bigint /* uint128 */,
    clone_deploy_evers: string | number | bigint /* uint128 */,
    wic_evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        wic_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    new_token_version: number /* uint32 */,
    wrapper_deployers: string[] /* address[] */,
};

export type SuperRootOwnerCloneWrappersConfigOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerSetFlagsInput = {
    main_evers: string | number | bigint /* uint128 */,
    stop_trade?: boolean /* optional(bool) */,
    abandon_ship?: boolean /* optional(bool) */,
    update_started?: boolean /* optional(bool) */,
};

export type SuperRootOwnerSetOwnerInput = {
    main_evers: string | number | bigint /* uint128 */,
    owner: string /* address */,
};

export type SuperRootOwnerSetUpdateTeamInput = {
    main_evers: string | number | bigint /* uint128 */,
    team?: string /* optional(address) */,
};

export type SuperRootOwnerSetNextSuperRootInput = {
    main_evers: string | number | bigint /* uint128 */,
    next_super_root: string /* address */,
};

export type SuperRootOwnerGetDetailsOutput = {
    initialized: boolean /* bool */,
    pubkey: string /* uint256 */,
    super_root?: string /* optional(address) */,
    super_root_code?: string /* optional(cell) */,
    global_cfg_code?: string /* optional(cell) */,
    flex_client_stub?: string /* optional(cell) */,
    wrappers_cfg_code?: string /* optional(cell) */,
    wic_code?: string /* optional(cell) */,
    flex_code?: string /* optional(cell) */,
    pair_code?: string /* optional(cell) */,
    price_code?: string /* optional(cell) */,
    user_data_cfg_code?: string /* optional(cell) */,
    flex_client_code?: string /* optional(cell) */,
    auth_index_code?: string /* optional(cell) */,
    user_id_index_code?: string /* optional(cell) */,
};


export class SuperRootOwnerAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"}],"outputs":[]},{"name":"setCode","inputs":[{"name":"type","type":"uint8"},{"name":"code","type":"cell"}],"outputs":[]},{"name":"deploySuperRoot","inputs":[{"name":"evers","type":"uint128"},{"name":"prev_super_root","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"update","inputs":[{"name":"main_evers","type":"uint128"},{"name":"cfg_deploy_evers","type":"uint128"},{"name":"cfg_keep_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"},{"name":"wrappers_cfg","type":"address"},{"name":"flex","type":"address"},{"name":"user_cfg","type":"address"},{"name":"description","type":"string"}],"outputs":[]},{"name":"release","inputs":[{"name":"main_evers","type":"uint128"}],"outputs":[]},{"name":"addWrapperType","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"type","type":"uint8"},{"name":"wrapper_deployer","type":"address"}],"outputs":[]},{"name":"addWrapper","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"symbol","type":"string"},{"name":"type","type":"uint8"},{"name":"init_args","type":"cell"}],"outputs":[]},{"name":"addXchgPair","inputs":[{"name":"main_evers","type":"uint128"},{"name":"flex","type":"address"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"}],"outputs":[]},{"name":"unlistWrapper","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"wic","type":"address"}],"outputs":[]},{"name":"unlistXchgPair","inputs":[{"name":"main_evers","type":"uint128"},{"name":"flex","type":"address"},{"name":"pair","type":"address"}],"outputs":[]},{"name":"deployWrappersConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"token_version","type":"uint32"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"deployFlex","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"old_flex","type":"optional(address)"},{"name":"exchange_version","type":"uint32"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"deployUserDataConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"name":"flex","type":"address"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"cloneWrappersConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"wrapper_cfg_keep_evers","type":"uint128"},{"name":"clone_deploy_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"wic_evers","type":"tuple"},{"name":"new_token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"setFlags","inputs":[{"name":"main_evers","type":"uint128"},{"name":"stop_trade","type":"optional(bool)"},{"name":"abandon_ship","type":"optional(bool)"},{"name":"update_started","type":"optional(bool)"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"main_evers","type":"uint128"},{"name":"owner","type":"address"}],"outputs":[]},{"name":"setUpdateTeam","inputs":[{"name":"main_evers","type":"uint128"},{"name":"team","type":"optional(address)"}],"outputs":[]},{"name":"setNextSuperRoot","inputs":[{"name":"main_evers","type":"uint128"},{"name":"next_super_root","type":"address"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"initialized","type":"bool"},{"name":"pubkey","type":"uint256"},{"name":"super_root","type":"optional(address)"},{"name":"super_root_code","type":"optional(cell)"},{"name":"global_cfg_code","type":"optional(cell)"},{"name":"flex_client_stub","type":"optional(cell)"},{"name":"wrappers_cfg_code","type":"optional(cell)"},{"name":"wic_code","type":"optional(cell)"},{"name":"flex_code","type":"optional(cell)"},{"name":"pair_code","type":"optional(cell)"},{"name":"price_code","type":"optional(cell)"},{"name":"user_data_cfg_code","type":"optional(cell)"},{"name":"flex_client_code","type":"optional(cell)"},{"name":"auth_index_code","type":"optional(cell)"},{"name":"user_id_index_code","type":"optional(cell)"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"pubkey_","type":"uint256"},{"name":"super_root_","type":"optional(address)"},{"name":"super_root_code_","type":"optional(cell)"},{"name":"global_cfg_code_","type":"optional(cell)"},{"name":"flex_client_stub_","type":"optional(cell)"},{"name":"wrappers_cfg_code_","type":"optional(cell)"},{"name":"wic_code_","type":"optional(cell)"},{"name":"flex_code_","type":"optional(cell)"},{"name":"pair_code_","type":"optional(cell)"},{"name":"price_code_","type":"optional(cell)"},{"name":"user_data_cfg_code_","type":"optional(cell)"},{"name":"flex_client_code_","type":"optional(cell)"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECiQEAMqQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIHsHATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkIAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QkEgG3tQAfDAAPTP9Mf0x+VAe1Q2zCCEDyR4cUjAbmOgOGCEC4FodEjAbmOgOGCEB/0XJgjAbmOgOGCEBrllFsjAblBIRYKAo6OgOGCEBaM7KwTuvKpBvKoBKPy4EQwCPkBVBCU+RDyqO1E0NMAAfJ/0z/TH/QE0/+OgAHTAJlwcCQBVRFVAtkiAeH6QHEk2RALAfwoVhC+CcMAAvQE9ATV9AT0BPQEUI+wDtX0BPQE9ATV9AT0BPQE9ATRBNEH0YAUYfJ8+COBA+iogggbd0CgVhsBuXAhgB1hVQHjBAHyvIAgVhVWFVUB9A9voVYWpIIQf////7BWF+MEgBhh1dN/+kDTf9N/Jvhk1VYfgBxhugEMAf7Tf9N/03/TH9Mf9ATRB9EF8uBkgBph8uBlVhVu8tBlVhpu8tBl+ADIVhAh9ABWEAH0AFYWAfQAcCIBzwsAVhNVAfQAVhYj9ABWFgH0AFYVAfQAAclWEVUCyz8sUCPMyVYaVQP0AFYZAfQAVh4B9ADMyQGAImHPCx9WIQH0AFYjDQH+Acv/cc8LAFYeAc5WHAH0AFYbAfQAzMntVPgP+ESCEIAAAAAhsYIQ/////xK8cFjjBMiAEiEBzwsfEssfG852KwHPCwNwLAHPCwHJ0FCyy38KzlYdAc5QC/oCgCVhAfQAcPoCcPoCcc8LYVB4y39QOMt/y3/LfxPLHxLLH/QAyQ4BalACzMkBzMlw+wD4YvhC0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZDwH8MNIHgB9h0NMBAcAC8rDIghAWjOysghAWjOysIgHPCx8VygcD0/8wUAPL/wH6QDBQAs7JAcxwzwsByYAgASWAGWFVAvQXyHAhAc8LABjLPxXLHxT0AIAXYQHL/3HPCwCAE2EBzlG19ACAEWFVC/QAULv0ABn0AFFk9AAV9AAZSQGIghAa5ZRbE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/0x/0BNP/joAB0wCZcHAkAVURVQLZIgHh+kBxJNkRAfwoVhC+CcMAAvQE9ATV9AT0BPQEUI+wDtX0BPQE9ATV9AT0BPQE9ATRBNEH0YAUYfJ8+COBA+iogggbd0CgVhsBuXAhgB1hVQHjBAHyvIAWYdXTf/pA03/Tf9Vw+GRWHYAaYboB03/U1NMH0//6QNTV1NMH0//6QNN/1dN/038SAf76QNED0QjRVQ/RD/LgZFYgbvLQZVYfbvLQZVYdbvLQZVYcbvLQZVYibvLQZVYabvLQZVYZbvLQZVYYbvLQZVYWbvLQZVYVbvLQZVYbbvLQZVYXbvLQZYAhYfLgZvgAyFYXIfQAVhcB9ABWHQH0AHAiAc8LAFYaVQH0AFYdI/QAEwH8Vh0B9ABWHAH0AAHJVhhVAss/AszJViBVAvQAVh8B9ABWJAH0AMzJAVYozwsfVicB9ABWKgHL/3HPCwBWJAHOViIB9ABWIQH0AMzJ7VT4D/hEghCAAAAAIbGCEP////8SvHBY4wTIgQIAIQHPCx8Syx+AEmEBy3+AEWEBy38fFAH+y39RPs4Sy38ey38Vy39Ry87JUAzMUJPMdioBzwsDcCsBzwsBydABzlYdIc5QDvoCUM3OViZVDPQAgA4rAc8LH1CdzBfLBxXL/wHJUDjOzBLMFMsHFcv/E8zJAczJcBP6AoAdYQH0AHD6AnD6AnHPC2ESzMlwEvoCAsxwEvoCchUA3hLPCwFxEs8LYQHJAczJcPsAyFGI9AAX9AAV9ABRJvQA9AAW9AD0AMlQBMzJcCMBzwsAUGP0ABT0ABj0ABPMUCbLPwXJUKXLHxj0ABrL/3HPCwATzhL0ABf0ABbMye1UghAa5ZRbVSBVJFUoXwkB2QKgghAk0SCHIwG5joDhghAf9FyYE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/0x/0BNP/joAB0wCZcHAkAVURVQLZIgHh+kBxJNkcFwH+KFYQvgnDAAL0BPQE1fQE9AT0BFCPsA7V9AT0BPQE1fQE9AT0BPQE0QTRB9GAFGHyfPgjgQPoqIIIG3dAoFYbAblwIYAdYVUB4wQB8ryAIFYVVhVVAfQPb6FWFqSCEH////+wVhfjBIAYYdXTf9N/0x/THyon+GRuAdMf+kDRAhgB/vLQZSpu8tBlVhBu8tBlLG7y0GUtbvLQZVYfgBxhui75AAHy4GRWFm7y0GVWFW7y0GVWE27y0GVWEm7y0GVWGG7y0GVWEG7y0GUvbvLQZYAXYfLgZvgAyFPQ9AAtAfQAVhMB9ABwIgHPCwBWEFUB9ABWEyP0AFYTAfQAVhIB9AAZAf4ByVLjyz9WHFAyzMlWF1UD9ABWFgH0AFYbAfQAzMmAH2FVAssfVh4B9ABWIAHL/3HPCwBWGwHOVhkB9ABWGAH0AMzJ7VT4D/hEghCAAAAAIbGCEP////8SvMh2IQHPCwNwIgHPCwHJ0AHOcEME4wSAESIBzwsfyx8Zy38Xyx8VGgHOyx8Syx9WGFUEzlAG+gKAIGEB9AAEy/9wFPoCcPoCcc8LYQTOUpPMKAHMLgHMKgHMyVACzMlQAszJcPsA+GL4QtMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2RsB/DDSB4AfYdDTAQHAAvKwyIIQH/RcmIIQH/RcmCIBzwsfFcoHA9P/MFADy/8B+kAwUALOyQHMcM8LAcmAIAElgBlhVQL0F8hwIQHPCwAYyz8Vyx8U9ACAF2EBy/9xzwsAgBNhAc5RtfQAgBFhVQv0AFC79AAZ9ABRZPQAFfQAGUkBiIIQJNEghxO68qkG8qgEo/LgRDAI+QFUEJT5EPKo7UTQ0wAB8n/TP9Mf9ATT/46AAdMAmXBwJAFVEVUC2SIB4fpAcSTZHQH+KFYQvgnDAAL0BPQE1fQE9AT0BFCPsA7V9AT0BPQE1fQE9AT0BPQE0QTRB9GAFGHyfPgjgQPoqIIIG3dAoFYbAblwIYAdYVUB4wQB8rxw+GSAFmHV03/6QNX6QNFWG4AYYboC0QHy4GRWEG7y0GUvbvLQZS1u8tBlLG7y0GVWEh4B/G7y0GUqbvLQZSlu8tBlKG7y0GUmbvLQZSVu8tBlK27y0GUnbvLQZYARYfLgZvgAyFNw9AAnAfQALQH0AHAiAc8LAFKi9ABT0vQALQH0ACwB9AAByVKDyz9QIszJVhBVAvQALwH0AFYUAfQAzMkBVhjPCx9WFwH0AFYaAcv/cR8B/s8LAFYUAc5WEgH0AFYRAfQAzMntVPgPyHYhAc8LA3AiAc8LAcnQAc5WFCHOUETOcPoCVh4B9ACCEFarEgIiAc8LH4AOE88LH3AS+gJQRfoCgB5hAfQAcPoCUCLOcBL6AgHJcRLPC2FwFPoCcc8LYczJAcxyzwsByQHMyXD7AMggALpRiPQAF/QAFfQAUSb0APQAFvQA9ADJUATMyXAjAc8LAFBj9AAU9AAY9AATzFAmyz8FyVClyx8Y9AAay/9xzwsAE84S9AAX9AAWzMntVIIQJNEgh1UgVSRVKF8JAdkDuIIQMMt8hiMBuY6A4YIQMAgMzyMBuY6A4YIQLgWh0RO68qkG8qgEo/LgRDAI+QFUEJT5EPKo7UTQ0wAB8n/TP9Mf9ATT/46AAdMAmXBwJAFVEVUC2SIB4fpAcSTZLikiAvwoVhC+CcMAAvQE9ATV9AT0BPQEUI+wDtX0BPQE9ATV9AT0BPQE9ATRBNEH0YAUYfJ8+COBA+iogggbd0CgVhsBuXAhgB1hVQHjBAHyvIAgVhVWFVUB9A9voVYWpIIQf////7BWF+MEgBhh1dN/03/Tf9N/038n+GTTf9WOgAEkIwAo0wCZcHEkVREBVRHZIgHh+kBwJNkB/FYVAtMf03/Tf9N/1dN/CG4I03/Tf9MH0QTRDdEI8tBlVhpu8tBlVhlu8tBlViuAKGG68uBkViFu8tBlViBu8tBlVh5u8tBlVh1u8tBlViNu8tBlVhdu8tBlVhZu8tBlVhxu8tBlVhhu8tBlgCJh8uBm+ADIVhgh9ABWGAH0ACUB/FYeAfQAcCIBzwsAVhtVAfQAVh4j9ABWHgH0AFYdAfQAAclWGVUCyz8KowLMyVYhVQL0AFYgAfQAViUB9ADMyYApYVUIyx9WKAH0AFYqAcv/cc8LAFYlAc5WIwH0AFYiAfQAzMntVPgP+ESCEIAAAAAhsYIQ/////xK8yHBQAyYB7uMEgBAiAc8LH3AjAc8LAHYhAc8LAnAlAc8LAcnQAc5QMssfgBRhAct/gBNhAct/gBJhAct/gBFhAct/VQ8By39WIlUBzlUP+gKAKmEB9ABw+gJw+gJxzwthjoAlIeBxJQHPCwAezi1VBVVmVRsBVQpVG1UNVQ3ZJwHQMFCiyx9QQst/VhdVAcxWFgHMVhUBzBfLf1CGy38by3/LB8lQI8t/VhoCzwt/EszJUALMyVAGzMlw+wBfBPhi+ELTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkoAfww0geAH2HQ0wEBwALysMiCEC4FodGCEC4FodEiAc8LHxXKBwPT/zBQA8v/AfpAMFACzskBzHDPCwHJgCABJYAZYVUC9BfIcCEBzwsAGMs/FcsfFPQAgBdhAcv/cc8LAIATYQHOUbX0AIARYVUL9ABQu/QAGfQAUWT0ABX0ABlJAYiCEDAIDM8TuvKpBvKoBKPy4EQwCPkBVBCU+RDyqO1E0NMAAfJ/0z/TH/QE0/+OgAHTAJlwcCQBVRFVAtkiAeH6QHEk2SoB/ihWEL4JwwAC9AT0BNX0BPQE9ARQj7AO1fQE9AT0BNX0BPQE9AT0BNEE0QfRgBRh8nz4I4ED6KiCCBt3QKBWGwG5cCGAHWFVAeMEAfK8gBZh1dN/03/6QNMHcPhkVhyAGWG6AdX6QNEB0QHy4GRWEm7y0GVWEW7y0GUvbvLQZS4rAf5u8tBlVhRu8tBlLG7y0GUrbvLQZSpu8tBlKG7y0GUnbvLQZS1u8tBlKW7y0GWAE2Hy4Gb4AMhTkPQAKQH0AC8B9ABwIgHPCwBSwvQAU/L0AC8B9AAuAfQAAclSo8s/UCLMyVYSVQL0AFYRAfQAVhYB9ADMyQFWGs8LH1YZAfQALAH+VhwBy/9xzwsAVhYBzlYUAfQAVhMB9ADMye1U+A/IdiEBzwsDcCIBzwsBydABzlFEznD6AlYgAfQAghBYNDIcIgHPCx8Wy3+ADhLPCx9wFvoCcPoCVhZVBM5QBvoCgB9hAfQAcPoCcPoCA88LB3ETzwthcRXPC2ECzskBzMkBzC0A0nLPCwHJAczJcPsAyFGI9AAX9AAV9ABRJvQA9AAW9AD0AMlQBMzJcCMBzwsAUGP0ABT0ABj0ABPMUCbLPwXJUKXLHxj0ABrL/3HPCwATzhL0ABf0ABbMye1UghAwCAzPVSBVJFUoXwkB2QKgghAxyFjSIwG5joDhghAwy3yGE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/0x/0BNP/joAB0wCZcHAkAVURVQLZIgHh+kBxJNk3LwHaKFYQvgnDAAL0BPQE1fQE9AT0BFCPsA7V9AT0BPQE1fQE9AT0BPQE0QTRB9GAFGHyfPgjgQPoqIIIG3dAoFYbAblwIYAdYVUB4wQB8rxw+GSAFmHV03+OgAHTAJlwcSRVEQFVEdkiAeH6QHAk2TAC/gHRVhyAGWG68uBkVhJu8tBlVhFu8tBlL27y0GUubvLQZVYUbvLQZSxu8tBlK27y0GUqbvLQZShu8tBlJ27y0GUtbvLQZSlu8tBl+ADIcCEBzwsAKAHLP1YbAcsfVhoB9ABWHQHL/46AjhVwEs8LAFUEMCGAEnZjgBhhdoATY9kyMQAgVhcB4XESzwsAgBhhAc4h2QH8U/L0AFPD9AAsAfQAVhBVAfQAVhdVAvQAUvL0AFYSVQL0AC4B9ADJ+CgCzCHTAVYYVQT0AAPJVhZVBvQAVhUB9ABWGwH0AMzJUAPMye1U+A/IcCEBzwsAcCEBzwsfySHMySHMyVYlIvQAViYB9ABwzwsJzHEiAc8LAVYaAcxxMwGKzwsAViIjy/8CyXATzwsCF87MyVAFzHDPCwDJIPkAI8EDmV8DwAPy0GPyNOEDwALytAPTAI6AIiHhAdMEAdcYATAhVQHZNAHgdhfPCwJwJAHPCwHJ0AHOdCQBzwsCehXPCx9WGgHMAtIHMFYYVQLMBMoHFMv/ydBSBM6OgAijDPoCgCVhAfQAcPoCcPoCc88LYRTMcc8LAJlxEs8LABfOJdkrAeFwEs8LAFUCMCVVAVUjVQZVBlUV2TUB/slQBszJcPsAXwSAH2HQ0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs6CELDLfIYSzwsfIgHOcRLPC2EByQHMyXD7AMhRzPQAG/QAGfQAUWr0ABX0ABr0ABX0AMlQA8zJcCcBzwsAUKf0ABj0AB30ABfMULPLPwLJUOI2AFLLHxz0AB7L/3HPCwAbzhT0ABL0ABfMye1UghAwy3yGVWBVKFUcXwwB2QKgghAyiBUZIwG5joDhghAxyFjSE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/0x/0BNP/joAB0wCZcHAkAVURVQLZIgHh+kBxJNk9OAH+KFYQvgnDAAL0BPQE1fQE9AT0BFCPsA7V9AT0BPQE1fQE9AT0BPQE0QTRB9GAFGHyfPgjgQPoqIIIG3dAoFYbAblwIYAdYVUB4wQB8ryAFmHV03/Tf/pA039w+GTVVh2AGmG6AdN/03/U0wfU0QbRBPLgZFYWbvLQZVYVbvLQZTkB/lYTbvLQZVYSbvLQZVYYbvLQZVYQbvLQZS9u8tBlLm7y0GUsbvLQZStu8tBlVhFu8tBlLW7y0GWAF2Hy4Gb4AMhT0PQALQH0AFYTAfQAcCIBzwsAVhBVAfQAVhMj9ABWEwH0AFYSAfQAAclS48s/UCLMyVYWVQL0AFYVAfQAVho6Af4B9ADMyQFWHs8LH1YdAfQAViABy/9xzwsAVhoBzlYYAfQAVhcB9ADMye1U+A/IdiEBzwsDcCIBzwsBydABzlGIznD6AlYkAfQAghAb7HWoIgHPCx8ay3+ADhLPCx9wGvoCcPoCVhpVCM5QCvoCgCNhAfQAcPoCcPoCB88Lf3EXOwH+zwthcRnPC2FQNst/y3/MywfMyQHMyQHMcs8LAckBzMlw+wDIUYj0ABf0ABX0AFEm9AD0ABb0APQAyVAEzMlwIwHPCwBQY/QAFPQAGPQAE8xQJss/BclQpcsfGPQAGsv/cc8LABPOEvQAF/QAFszJ7VSCEDHIWNJVIFUkVShfCTwABAHZAWKCEDKIFRkTuvKp7UTQ0wAB8n/TP9Mf9ATT/46AAdMAmXBwJAFVEVUC2SIB4fpAcSTZPgHWAfQEIQH0BNX0BPQE9AQGbnAH1fQE9AT0BNX0BPQE9AT0BNEE0QfRcPhkjoAoIeAtbiHgK24h4CpuIeApbiHgJm4h4CVuIeAkbiHgIm4h4CFuIeAnbiHgI27AAHGwVQgwIQFVSVUOVXdVDtk/AYIwgCZh0NMBAcACyAHysHMhAc8LAXAiAc8LAcnQAc4C+kAwUALOghCyiBUZIgHPCx9xEs8LYQFVD88LAIAVYQHL/0AA6I5PUYP0ABf0ABT0AFEh9AAY9AAT9ADJUALMUIX0AATJUGT0AFCq9AAJ9ADMyVBn9AAT9AAVzMlQBMzJcPsAghAyiBUZVZBVe3SAFWOAFmUB2Y4RcBLPCwBVCjAhVVuAEmFVttlWEwHhcRLPCwCAE2EBziHZBP6CEGGw0vcjAbmOgOGCED7pZ4QjAbmOgOGCED3cH7gjAbmOgOGCEDyR4cWCEDyR4cUUuvKpB/KoBaPy4EQK+QFAtvkQ8qjtRNDTADDyvvgAcPhkAdXT/9H4AMhTMPQAcBLPC2BSQvQAJAH0AFNA9ADJIczJAcxSQvQAAckCzwv/WUpDQgA2cM8LACMB9AAT9AASzMntVFUhVTZfCFkBVQHZAYiCED3cH7gTuvKpBvKoBKPy4EQwCPkBVBCU+RDyqO1E0NMAAfJ/0z/TH/QE0/+OgAHTAJlwcCQBVRFVAtkiAeH6QHEk2UQB+ihWEL4JwwAC9AT0BNX0BPQE9ARQj7AO1fQE9AT0BNX0BPQE9AT0BNEE0QfRgBRh8nz4I4ED6KiCCBt3QKBWGwG5cCGAHWFVAeMEAfK8gCBWFVYVVQH0D2+hVhakghB/////sFYX4wQg+GSAGGHV03/Tf9N/0x/RVh2AGmG6RQH+8uBkVhNu8tBlVhJu8tBlVhBu8tBlL27y0GVWFW7y0GUtbvLQZSxu8tBlK27y0GUpbvLQZShu8tBlLm7y0GUqbvLQZYAUYfLgZvgAyFOg9AAqAfQAVhAB9ABwIgHPCwBS0vQAVhAj9ABWEAH0AC8B9AAByVKzyz9WGVAyzMlWFEYB/FUD9ABWEwH0AFYYAfQAzMmAHGFVAssfVhsB9ABWHQHL/3HPCwBWGAHOVhYB9ABWFQH0AMzJ7VT4D/hEghCAAAAAIbGCEP////8SvHBY4wTIdiEBzwsDcCIBzwsBydCADxPPCx8Tyx8CzlYYAc5QBvoCgCBhAfQAcPoCcPoCcUcBjM8LYVBFy38Sy3/LHy4BzFYTAczJUALMyXD7APhi+ELTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdlIAfww0geAH2HQ0wEBwALysMiCED3cH7iCED3cH7giAc8LHxXKBwPT/zBQA8v/AfpAMFACzskBzHDPCwHJgCABJYAZYVUC9BfIcCEBzwsAGMs/FcsfFPQAgBdhAcv/cc8LAIATYQHOUbX0AIARYVUL9ABQu/QAGfQAUWT0ABX0ABlJAFb0ABX0AMlQtvQAUFLMyVB59AAV9AAY9AAWzMlQA8zJ7VRVQVUXVRpfCgHZAqCCEFmNDB8jAbmOgOGCED7pZ4QTuvKpBvKoBKPy4EQwCPkBVBCU+RDyqO1E0NMAAfJ/0z/TH/QE0/+OgAHTAJlwcCQBVRFVAtkiAeH6QHEk2U9LAf4oVhC+CcMAAvQE9ATV9AT0BPQEUI+wDtX0BPQE9ATV9AT0BPQE9ATRBNEH0YAUYfJ8+COBA+iogggbd0CgVhsBuXAhgB1hVQHjBAHyvHD4ZIAWYdXTf9FWGIAVYbry4GQubvLQZS1u8tBlK27y0GUqbvLQZVYQbvLQZShu8tBlTAH+J27y0GUmbvLQZSRu8tBlI27y0GUpbvLQZSVu8tBlD/LgZvgAyFNA9AAkAfQAKgH0AHAiAc8LAFJy9ABTovQAKgH0ACkB9AAByVJTyz9QIszJUtP0ACwB9ABWEgH0ABLMyQFWFs8LH1YVAfQAVhgBy/9xzwsAVhIBzi8B9AAuAU0B/PQAzMntVPgPyHYhAc8LA3AiAc8LAcnQAc5WEgHOVQ/6AoAbYQH0AIANEs8LH3AS+gIByXAS+gJxzwthzMlw+wDIUYj0ABf0ABX0AFEm9AD0ABb0APQAyVAEzMlwIwHPCwBQY/QAFPQAGPQAE8xQJss/BclQpcsfGPQAGsv/cU4AQM8LABPOEvQAF/QAFszJ7VSCED7pZ4RVIFUkVShfCQHZAqCCEF8GbdIjAbmOgOGCEFmNDB8TuvKpBvKoBKPy4EQwCPkBVBCU+RDyqO1E0NMAAfJ/0z/TH/QE0/+OgAHTAJlwcCQBVRFVAtkiAeH6QHEk2VRQAf4oVhC+CcMAAvQE9ATV9AT0BPQEUI+wDtX0BPQE9ATV9AT0BPQE9ATRBNEH0YAUYfJ8+COBA+iogggbd0CgVhsBuXAhgB1hVQHjBAHyvIAWYdXTf9N/03/TH9MfcPhkVh2AGmG6AdMf1fpA1fpA1fpA1NEC0QPRBNEF8uBkVhduUQH88tBlVhZu8tBlVhRu8tBlVhNu8tBlVhlu8tBlVhFu8tBlVhBu8tBlL27y0GUtbvLQZSxu8tBlVhJu8tBlLm7y0GWAGGHy4Gb4AMhT4PQALgH0AFYUAfQAcCIBzwsAVhFVAfQAVhQj9ABWFAH0AFYTAfQAAclS88s/UCLMyVYXUgH8VQL0AFYWAfQAVhsB9ADMyQFWH88LH1YeAfQAViEBy/9xzwsAVhsBzlYZAfQAVhgB9ADMye1U+A/IcCEBzwsBdiIBzwsDAcnQUXLOUTLOFczJUALMUFPOVhkBzlAJ+gKAImEB9ABw+gJw+gJxzwthAcmACxTPCx8Xy38Vy38TUwDgyx/LHxLLHxPOEszJAczJcPsAyFGI9AAX9AAV9ABRJvQA9AAW9AD0AMlQBMzJcCMBzwsAUGP0ABT0ABj0ABPMUCbLPwXJUKXLHxj0ABrL/3HPCwATzhL0ABf0ABbMye1UghBZjQwfVSBVJFUoXwkB2QGIghBfBm3SE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/0x/0BNP/joAB0wCZcHAkAVURVQLZIgHh+kBxJNlVAfwoVhC+CcMAAvQE9ATV9AT0BPQEUI+wDtX0BPQE9ATV9AT0BPQE9ATRBNEH0YAUYfJ8+COBA+iogggbd0CgVhsBuXAhgB1hVQHjBAHyvHD4ZIAWYdXTf/pA0VYZgBZhuvLgZC9u8tBlLm7y0GUsbvLQZStu8tBlVhFu8tBlKW5WAf7y0GUobvLQZSdu8tBlJW7y0GUkbvLQZSpu8tBlJm7y0GVVD/LgZvgAyFNg9AAmAfQALAH0AHAiAc8LAFKS9ABTwvQALAH0ACsB9AAByVJzyz9QIszJUvP0AC4B9ABWEwH0ABLMyQFWF88LH1YWAfQAVhkBy/9xzwsAVhMBzlYRVwH8AfQAVhAB9ADMye1U+A/IdiEBzwsDcCIBzwsBydABzlYTAc5QA/oCgBxhAfQAgBYTzwsfcBP6AgLOcBL6AgHJcRLPC2HMyXD7AMhRiPQAF/QAFfQAUSb0APQAFvQA9ADJUATMyXAjAc8LAFBj9AAU9AAY9AATzFAmyz8FyVClWABSyx8Y9AAay/9xzwsAE84S9AAX9AAWzMntVIIQXwZt0lUgVSRVKF8JAdkDuIIQbKSLvyMBuY6A4YIQZIdooyMBuY6A4YIQYbDS9xO68qkG8qgEo/LgRDAI+QFUEJT5EPKo7UTQ0wAB8n/TP9Mf9ATT/46AAdMAmXBwJAFVEVUC2SIB4fpAcSTZY15aAdooVhC+CcMAAvQE9ATV9AT0BPQEUI+wDtX0BPQE9ATV9AT0BPQE9ATRBNEH0YAUYfJ8+COBA+iogggbd0CgVhsBuXAhgB1hVQHjBAHyvHD4ZIAWYdXTf46AAdMAmXBxJFURAVUR2SIB4fpAcCTZWwH2AdFWHIAZYbry4GRWEm7y0GVWEW7y0GUvbvLQZS5u8tBlVhRu8tBlLG7y0GUrbvLQZSpu8tBlKG7y0GUnbvLQZS1u8tBlKW7y0GWAE2Hy4Gb4AMhTkPQAKQH0AC8B9ABwIgHPCwBSwvQAU/L0AC8B9AAuAfQAAclSo8s/XAH+jmnJUAXMyXD7AMhRzPQAcC0BzwsAUMz0ABr0AFF79AAW9AAb9AAW9ADJUATMyVCn9AAY9AAc9AAUzFBiyz8ByQ7PCx8c9AAey/9xzwsAF84U9AAS9AAYzMntVIIQYbDS91VgVShVLF8NAdkFo1AyzMlWE1UD9ABWEgH0AFYXAV0A5PQAzMlWG1UCyx9WGgH0AFYdAcv/cc8LAFYXAc5WFQH0AFYUAfQAzMntVPgPyHYhAc8LA3AiAc8LAcnQAc5WFwHOUAf6AoAgYQH0AIAXF88LH3AX+gJw+gJxzwthmXEXzwsAE84h2SIB4XAXzwsAATAh2QGIghBkh2ijE7ryqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/0x/0BNP/joAB0wCZcHAkAVURVQLZIgHh+kBxJNlfAfwoVhC+CcMAAvQE9ATV9AT0BPQEUI+wDtX0BPQE9ATV9AT0BPQE9ATRBNEH0YAUYfJ8+COBA+iogggbd0CgVhsBuXAhgB1hVQHjBAHyvHD4ZIAWYdXTf/pA0VYZgBZhuvLgZC9u8tBlLm7y0GUsbvLQZStu8tBlVhFu8tBlKW5gAf7y0GUobvLQZSdu8tBlJW7y0GUkbvLQZSpu8tBlJm7y0GVVD/LgZvgAyFNg9AAmAfQALAH0AHAiAc8LAFKS9ABTwvQALAH0ACsB9AAByVJzyz9QIszJUvP0AC4B9ABWEwH0ABLMyQFWF88LH1YWAfQAVhkBy/9xzwsAVhMBzlYRYQH8AfQAVhAB9ADMye1U+A/IdiEBzwsDcCIBzwsBydABzlYTAc5QA/oCgBxhAfQAgBgTzwsfcBP6AgLOcBL6AgHJcRLPC2HMyXD7AMhRiPQAF/QAFfQAUSb0APQAFvQA9ADJUATMyXAjAc8LAFBj9AAU9AAY9AATzFAmyz8FyVClYgBSyx8Y9AAay/9xzwsAE84S9AAX9AAWzMntVIIQZIdoo1UgVSRVKF8JAdkCoIIQbmZRKyMBuY6A4YIQbKSLvxO68qkG8qgEo/LgRDAI+QFUEJT5EPKo7UTQ0wAB8n/TP9Mf9ATT/46AAdMAmXBwJAFVEVUC2SIB4fpAcSTZbmQB0ihWEL4JwwAC9AT0BNX0BPQE9ARQj7AO1fQE9AT0BNX0BPQE9AT0BNEE0QfRgBRh8nz4I4ED6KiCCBt3QKBWGwG5IPK8cPhkgBZh1dN/joAB0wCYcHAkWQFVAdkiAeHTAAHDAHFxErAk2WUBOI6AA9MAmHBwJlkBVQHZIgHh0wABwwBxcRKwJtlmAUpwVQuAJmFVAeMEjoAE0wCYcXAnWQFVAdkiAeHTAAHDAHGwcCfZZwL8AtFWJIAhYboGwACOgAvAAAfy4GRWG27y0GVWGm7y0GVWGG7y0GVWF27y0GVWHW7y0GVWFW7y0GVWFG7y0GVWE27y0GVWEW7y0GVWEG7y0GVWFm7y0GVWEm7y0GWAHGHy4Gb4AMhWEiH0AFYSAfQAVhgB9ABwIgHPCwBWFVUBamgB/vQAVhgj9ABWGAH0AFYXAfQAAclSg8s/UCLMyVYbVQL0AFYaAfQAVh8B9ADMyQFWI88LH1YiAfQAViUBy/9xzwsAVh8BzlYdAfQAVhwB9ADMye1U+A/IdiEBzwsDcCIBzwsBydABzlYfAc5VD/oCgChhAfQAgBUSzwsfcBL6AnBpAFb6AnHPC2GOFnASzwsAVQQwK1UBVShVGFUKVShVGdkpAeBxEs8LABvLACvZAUaOgI4ScBLPCwBVATAhVQFVMlUGVRXZIwHgcRLPCwAXywAm2WsBLo6ABKOZcc8LABLLACLZ4XDPCwABMCLZbAH8yVAJzMlw+wDIgBNhIfQAcCIBzwsAgBRhVQH0AIATYQH0AIARYSP0AIARYQH0AIASYQH0AIARYQH0AMkBzMmAEWFVAvQAVQ8B9ACAE2EB9ADMBM8LPwPJgBVhVQPLH4AUYQH0AIAVYQHL/3HPCwCAEWEBzlUPAfQAH/QAHszJbQAu7VSCEGyki79V4HKAEWNzgBRjgBRlAdkCoIIQeRBHJSMBuY6A4YIQbmZRKxO68qkG8qgEo/LgRDAI+QFUEJT5EPKo7UTQ0wAB8n/TP9Mf9ATT/46AAdMAmXBwJAFVEVUC2SIB4fpAcSTZc28B/ihWEL4JwwAC9AT0BNX0BPQE9ARQj7AO1fQE9AT0BNX0BPQE9AT0BNEE0QfRgBRh8nz4I4ED6KiCCBt3QKBWGwG5cCGAHWFVAeMEAfK8cPhkgBZh1dN/+kDV+kDRVhuAGGG6AtEB8uBkVhBu8tBlL27y0GUtbvLQZSxu8tBlVhJwAfxu8tBlKm7y0GUpbvLQZShu8tBlJm7y0GUlbvLQZStu8tBlJ27y0GWAEWHy4Gb4AMhTcPQAJwH0AC0B9ABwIgHPCwBSovQAU9L0AC0B9AAsAfQAAclSg8s/UCLMyVYQVQL0AC8B9ABWFAH0AMzJAVYYzwsfVhcB9ABWGgHL/3FxAf7PCwBWFAHOVhIB9ABWEQH0AMzJ7VT4D8h2IQHPCwNwIgHPCwHJ0AHOVhQhzlBEznD6AlYeAfQAghA+6JW2IgHPCx+ADhPPCx9wEvoCUEX6AoAeYQH0AHD6AlAiznAS+gIByXESzwthcBT6AnHPC2HMyQHMcs8LAckBzMlw+wDIcgC6UYj0ABf0ABX0AFEm9AD0ABb0APQAyVAEzMlwIwHPCwBQY/QAFPQAGPQAE8xQJss/BclQpcsfGPQAGsv/cc8LABPOEvQAF/QAFszJ7VSCEG5mUStVIFUkVShfCQHZAYiCEHkQRyUTuvKpBvKoBKPy4EQwCPkBVBCU+RDyqO1E0NMAAfJ/0z/TH/QE0/+OgAHTAJlwcCQBVRFVAtkiAeH6QHEk2XQC/ihWEL4JwwAC9AT0BNX0BPQE9ARQj7AO1fQE9AT0BNX0BPQE9AT0BNEE0QfRgBRh8nz4I4ED6KiCCBt3QKBWGwG5cCGAHWFVAeMEAfK8cPhkVheAE2G6gBZh0wfUMALy4GT4AMhwIQHPCwAkAcs/VhcByx9WFgH0AFYZAcv/joB2dQAul3ASzwsAIdlWEwHhcRLPCwBWFAHOIdkCnIASYcAAU4P0AFPU9AAtAfQALAH0AFKS9AAvAfQAKwH0AMkBzFYTVQL0AFYSAfQAAclWEFUE9AAvAfQAVhQB9ADMyQHMye1U+A+OgCPBB3l3AfyOeCPBCo48I8ELjigjwQyOEwPADCPhAyIBVSRVB1UVVQdVB9nhBFUBMCMBVWRVC1UpVQvZ4QRVATAjAVUUAVUjVQXZ4SPBCI4hA8EJngMiAVUUVQZVFFUGVQbZ4QMiAVU0VQhVFlUIVQjZ4QRVATAjAVVEVQlVJ1UJ2eEjwQR4APiOOSPBBY4kA8EGngMiAVVUVQpVGFUKVQrZ4QMiAVXEgBJhVR+AEmGAEmHZ4QRVATAjAVV0VQxVKlUM2eEjwQKOJAPBA54DIgFVhFUNVRtVDVUN2eEDIlkBVZRVD1UNVQ9VD1UP2eFxFLoj4QMiAVW0gBFhVR6AEWGAEWHZAf7IcCEBzwsAFss/gBdhAcsfgBZhAfQAgBdhAcv/jkdRhvQAUcb0ABv0ABn0AFBa9AAa9AAV9ADJUAfMUML0ABr0AAnJUHT0ABX0ABn0AMzJUAXMye1UghB5EEclVXBVGVU8Xw4B2Y4VcBLPCwBVATAhgBFzY4AUYXOAEmPZIwHgegAYcRLPCwCAFGEBziHZAVLfAdDTAAHycCDWAZntQO1QCV8J2zAB0wCOgAEwIQHh+ABwInBfMFUT2XwBMjAjxwGOgCBZAVUB4STHAiHhcCJwXzBVE9l9AYYwI9cNH2+jcCElcHBVCFUGVRIBVQNVGQFVCVUnVQrhcBPjBCLXSfKwk3Am2SEB4YIQgAAAALAC0x+OgCQB4HABMCbZfgFeghCAAAAAErLtRNDTAAHyf9M/0x/0BNP/joAB0wCZcHAkAVURVQLZIgHh+kBxJNl/AeIB9AT0BNX0BPQE9ATV9AT0BPQE1fQE9AT0BPQE0QTRB9GAIFYWVhRVAfQPb6Hyu9DTH4AbYdMA0wDTAPpAMNMBBdIH0//V+kDRJMEDmV8EwAPy0GPyNOEEwALytDAG0wCOgCIh4QHTBAHXGAEwIVUB2YAD/jDSBwO6AtP/MFAHurDyu4AggBxhgBphVQH0W4IQLgWh0SgBuY6A4YIQH/RcmCgBuY6A4YIQFozsrBi68rqAG2H4Y4AgVhoiVQH0D2+hVhukghB/////sIAcYeMEIPhk+ADIcyEBzwsBcCIBzwsBydABzhXOcc8LYYIQlozsrBWFg4EB4s8LH/hD+kAwAc7JUATMyXD7AMhwIQHPCwCAHGEByz8Uyx8S9ACAGWEBy/+ORFGj9ABR4/QAHfQAG/QAUHz0ABz0ABf0AMlQCcxQ9PQAHfQAAslQqvQAGPQAFvQAF8zJUAXMye1UghAWjOysVYBfCSbZggBOjhVwEs8LAFUBMCGAE3NjgBZhc4AUY9lWFwHhcRLPCwCAF2EBziHZAe6CEB/0XJgYuvK6gBth+GOAIFYaIlUB9A9voVYbpIIQf////7CAHGHjBCD4ZPgAyHMhAc8LAXAiAc8LAcnQAc4VznHPC2GCEJ/0XJgVzwsf+EP6QDABzslQBMzJcPsAyHAhAc8LAIAcYQHLPxTLHxL0AIAZYQHL/4QA2o5EUaP0AFHj9AAd9AAb9ABQfPQAHPQAF/QAyVAJzFD09AAd9AACyVCq9AAY9AAW9AAXzMlQBczJ7VSCEB/0XJhVgF8JJtmOFXASzwsAVQEwIYATc2OAFmFzgBRj2VYXAeFxEs8LAIAXYQHOIdkC/oIQPdwfuCgBuY6A4YIQLgWh0Ri68rqAG2H4Y4AgVhoiVQH0D2+hVhukghB/////sIAcYeMEIPhk+ADIcyEBzwsBcCIBzwsBydABzhXOcc8LYYIQrgWh0RXPCx/4Q/pAMAHOyVAEzMlw+wDIcCEBzwsAgBxhAcs/FMsfEvQAgBmHhgDiYQHL/45EUaP0AFHj9AAd9AAb9ABQfPQAHPQAF/QAyVAJzFD09AAd9AACyVCq9AAY9AAW9AAXzMlQBczJ7VSCEC4FodFVgF8JJtmOFXASzwsAVQEwIYATc2OAFmFzgBRj2VYXAeFxEs8LAIAXYQHOIdkB7oIQPdwfuBi68rqAG2H4Y4AgVhoiVQH0D2+hVhukghB/////sIAcYeMEIPhk+ADIcyEBzwsBcCIBzwsBydABzhXOcc8LYYIQvdwfuBXPCx/4Q/pAMAHOyVAEzMlw+wDIcCEBzwsAgBxhAcs/FMsfEvQAgBlhAcv/iADajkRRo/QAUeP0AB30ABv0AFB89AAc9AAX9ADJUAnMUPT0AB30AALJUKr0ABj0ABb0ABfMyVAFzMntVIIQPdwfuFWAXwkm2Y4VcBLPCwBVATAhgBNzY4AWYXOAFGPZVhcB4XESzwsAgBdhAc4h2Q==",
        code: "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",
        codeHash: "1aedd7f1acea8f76180f2ce805b8f3d58568ef282342554baf933e12a68cb177",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(SuperRootOwnerAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(input: {
        pubkey: string | number | bigint /* uint256 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runSetCode(input: SuperRootOwnerSetCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setCode", input);
    }

    async setCode(input: SuperRootOwnerSetCodeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setCode", input);
    }

    async runDeploySuperRoot(input: SuperRootOwnerDeploySuperRootInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeploySuperRootOutput,
    }> {
        return await runHelper(this, "deploySuperRoot", input);
    }

    async deploySuperRoot(input: SuperRootOwnerDeploySuperRootInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeploySuperRootOutput,
    }> {
        return await runLocalHelper(this, "deploySuperRoot", input);
    }

    async runUpdate(input: SuperRootOwnerUpdateInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "update", input);
    }

    async update(input: SuperRootOwnerUpdateInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "update", input);
    }

    async runRelease(input: SuperRootOwnerReleaseInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "release", input);
    }

    async release(input: SuperRootOwnerReleaseInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "release", input);
    }

    async runAddWrapperType(input: SuperRootOwnerAddWrapperTypeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "addWrapperType", input);
    }

    async addWrapperType(input: SuperRootOwnerAddWrapperTypeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "addWrapperType", input);
    }

    async runAddWrapper(input: SuperRootOwnerAddWrapperInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "addWrapper", input);
    }

    async addWrapper(input: SuperRootOwnerAddWrapperInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "addWrapper", input);
    }

    async runAddXchgPair(input: SuperRootOwnerAddXchgPairInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "addXchgPair", input);
    }

    async addXchgPair(input: SuperRootOwnerAddXchgPairInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "addXchgPair", input);
    }

    async runUnlistWrapper(input: SuperRootOwnerUnlistWrapperInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "unlistWrapper", input);
    }

    async unlistWrapper(input: SuperRootOwnerUnlistWrapperInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unlistWrapper", input);
    }

    async runUnlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "unlistXchgPair", input);
    }

    async unlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unlistXchgPair", input);
    }

    async runDeployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeployWrappersConfigOutput,
    }> {
        return await runHelper(this, "deployWrappersConfig", input);
    }

    async deployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeployWrappersConfigOutput,
    }> {
        return await runLocalHelper(this, "deployWrappersConfig", input);
    }

    async runDeployFlex(input: SuperRootOwnerDeployFlexInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeployFlexOutput,
    }> {
        return await runHelper(this, "deployFlex", input);
    }

    async deployFlex(input: SuperRootOwnerDeployFlexInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeployFlexOutput,
    }> {
        return await runLocalHelper(this, "deployFlex", input);
    }

    async runDeployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeployUserDataConfigOutput,
    }> {
        return await runHelper(this, "deployUserDataConfig", input);
    }

    async deployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerDeployUserDataConfigOutput,
    }> {
        return await runLocalHelper(this, "deployUserDataConfig", input);
    }

    async runCloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerCloneWrappersConfigOutput,
    }> {
        return await runHelper(this, "cloneWrappersConfig", input);
    }

    async cloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerCloneWrappersConfigOutput,
    }> {
        return await runLocalHelper(this, "cloneWrappersConfig", input);
    }

    async runSetFlags(input: SuperRootOwnerSetFlagsInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setFlags", input);
    }

    async setFlags(input: SuperRootOwnerSetFlagsInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setFlags", input);
    }

    async runSetOwner(input: SuperRootOwnerSetOwnerInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setOwner", input);
    }

    async setOwner(input: SuperRootOwnerSetOwnerInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setOwner", input);
    }

    async runSetUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setUpdateTeam", input);
    }

    async setUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setUpdateTeam", input);
    }

    async runSetNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setNextSuperRoot", input);
    }

    async setNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setNextSuperRoot", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: SuperRootOwnerGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

}

