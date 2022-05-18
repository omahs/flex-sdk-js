
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { deployHelper, runHelper, runLocalHelper, Transaction, ContractPackageEx } from "../helpers";

export class XchgPairAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"deploy_value","type":"uint128"},{"name":"notify_addr","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"}],"outputs":[],"id":"0xa"},{"name":"requestDetails","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"tip3_major_root","type":"address"},{"name":"tip3_minor_root","type":"address"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"},{"name":"major_reserve_wallet","type":"address"},{"name":"minor_reserve_wallet","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"next","type":"optional(address)"},{"name":"unlisted","type":"bool"}],"id":"0xb"},{"name":"setNext","inputs":[{"name":"next","type":"address"}],"outputs":[],"id":"0xc"},{"name":"unlist","inputs":[],"outputs":[],"id":"0xd"},{"name":"getDetails","inputs":[],"outputs":[{"name":"tip3_major_root","type":"address"},{"name":"tip3_minor_root","type":"address"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"},{"name":"major_reserve_wallet","type":"address"},{"name":"minor_reserve_wallet","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"next","type":"optional(address)"},{"name":"unlisted","type":"bool"}],"id":"0x100"},{"name":"getConfig","inputs":[],"outputs":[{"name":"flex","type":"address"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"},{"name":"xchg_price_code","type":"cell"}],"id":"0xe"},{"name":"getPriceXchgCode","inputs":[{"name":"salted","type":"bool"}],"outputs":[{"name":"value0","type":"cell"}],"id":"0x200"},{"name":"getPriceXchgSalt","inputs":[],"outputs":[{"name":"value0","type":"cell"}],"id":"0xf"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"tip3_major_root_","type":"address"},{"name":"tip3_minor_root_","type":"address"},{"name":"min_amount_","type":"uint128"},{"name":"minmove_","type":"uint128"},{"name":"price_denum_","type":"uint128"},{"name":"notify_addr_","type":"address"},{"name":"major_reserve_wallet_","type":"address"},{"name":"minor_reserve_wallet_","type":"address"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg_","type":"optional(tuple)"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg_","type":"optional(tuple)"},{"name":"next_","type":"optional(address)"},{"name":"unlisted_","type":"bool"}],"events":[]} as unknown as AbiContract,
        tvc: "te6ccgECVwEAFx4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBICMHA6T/AdBtbSIhIFUDIds8gB9lAvK0MAkIBlUIVQxVDFUMVQxVDFULVQxVB1UMVQxVDFUMVQxVDds8gB9lAvK0joAC0wCXiwhxATAj2QEwIQHhcCPZVEgIATyOgCBZAVUB4HGV8rQwINlxFLqTcCPZ4YsI0SJwWdkJASxfBQ/TAI6AIiHhgQIAEtcYATAhVQHZCgEucYASYQGwAtMAjoAiIeEB0/8BMCFVAdkLA77tQAXDAALTP9Mf0x+VAe1Q2zCBAQAjAbmOgOEiwQ+OgOECwA7yqTAE8nntRNDTAAHyf/pA1fpA03/Tf9N/1fpA1fpA1fpA1dMAjoAiIeEB1NTTB9P/+kBVQF8FIVUB2RYQDAE0MNXTAI6AIiHhAdTU0wfT//pAVUBfBSFVAdkNASQw1dMAjoAiIeEB+kABMCFVAdkOAf4w0wDRW9Ew0TDR+CrQINdKA9ECwAME0TAE0XD4ZDDy4EUwgBxh0wEC1NTV+kDTf9N/B8ACB9N/1dN/03/Tf9MH1NHIDvKwcy4BzwsBcC8BzwsBydABzoAOgA5WEAHPCx+AEWH6QDBQA85Qws5Qb8t/FMt/UI3LfxbLf3ETzwthDwBMUELLf1BKy38UywfMyVAHzMlQBszJcPsAVcBVHoAOgBJjgB1lAdkBnALAD/KpMATyee1E0NMAAfJ/+kDV+kDTf9N/03/V+kDV+kDV+kDVjoAB0wCOE3BwbW1wcChVE1UFVRQBVQZVFdkiAeHU1NMH0//6QHEo2REBVAHVjoAB0wCOE3BwbW1wcChVE1UFVRQBVQZVFdkiAeHU1NMH0//6QHEo2RIBJAHV0wCOgCIh4QH6QAEwIVUB2RMB7DDTANFb0QjRVQ/R+CrQINdKgBNh0cADgBRh0YAVYdFw+GTy4EXU1NX6QNN/038OwAAPwABQD7EN03/V03/Tf9N/0wfU0TCAEmHy0Gn4KCDTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkUAfwwgDth0wEBwALIAfKwcCEBzwsBUhrPC38Yy38IyYAYYSjOcykBzwsBAtBQist/gCFhKc6AHWEBzAGAI2HPC3+AH2EqzlCzzoAWYVUIzAT6QDBQ08t/gB9hVQnLf4AaYVUCzIAUYVUEzFBMzoASYVULyweAFmFVBMsHgA+AGmEVAPhVBMt/gBVhVQXLf3EWzwthgA8rAc8LH1HrzlGbzoAWYVUEy/+AE2FVBcv/gBJhLM6AF2FVDM5Q6Mt/CNIHMFC1ywcUygfJUAbMyVAEzMlQCczJUAbMyVAHzMkBzMlQAszJUAXMyVADzMlw+wBV0XKAEWOADoAUY4AfZQHZArKBAgAjAbmOgOGBAQATuvKpMATyee1E0NMAAfJ/+kDV+kDTf9N/03/V+kDV+kDV+kDVjoAB0wCOE3BwbW1wcChVE1UFVRQBVQZVFdkiAeHU1NMH0//6QHEo2RwXAVQB1Y6AAdMAjhNwcG1tcHAoVRNVBVUUAVUGVRXZIgHh1NTTB9P/+kBxKNkYATIB1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZGQH8AdMA0QXRDdGAFWHRBMAADcAAgBZh0VANsYAWYdGAF2HRcPhk8tBpMIAwYdMBAcACyAHysIAUYSHOgBphIs5zIwHPCwFwJAHPCwHJ0AHOAYAbYc8Lf4AUYVUCzAT6QDBQAs6AEmFVA8yAF2FVAst/gQEAJAHPCx9VDyXOBsMAGgH+UYXOgBVhJs6AFmEnzoAZYVUDznEbsHEXzwthgBdhVQTLf4AUYVUFywdQ6MwczBrLBxjL/1D0y/+OMcsAyVANzMkBzMkBzMlQAszJUALMyVADzMlQAszJAczJcPsAgQEAVaBVHFXfgBtlAdmOEHAUzwsAVQQwI1UBVSJVE9kuARsAFOFxFM8LABXOItkBnoECABO68qkF8nntRNDTAAHyf/pA1fpA03/Tf9N/1fpA1fpA1fpA1Y6AAdMAjhNwcG1tcHAoVRNVBVUUAVUGVRXZIgHh1NTTB9P/+kBxKNkdAVQB1Y6AAdMAjhNwcG1tcHAoVRNVBVUUAVUGVRXZIgHh1NTTB9P/+kBxKNkeASQB1dMAjoAiIeEB+kABMCFVAdkfAaQw0wDRW9EI0VUP0YAgYdMAMIASYdHAAPgq0CDXSsADgBVh0YAWYdFw+GTy4EXU1NX6QNN/038PwABVD8AAsQ/Tf9XTf9N/03/TB9TRgBVh8tBpIAH4jk0wgDph0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs5xzwthgQIAgQIAE88LHxPMyVACzMlw+wCAJGJ1gCZjgA6ALGOAN2UB2S4h4PgoINMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2SEB/jAE0CDXSsACyAHy4EVRmct/GMt/Fst/gCFhKM6AGWEpzoAdYVUBzIAjYVUCy3+AH2Eqzh7Lf4AhYVUNy3+AHGFVAsyAF2FVA8yAFmEBzIAVYQHLBwGAGGHPCweAG2FVAst/UNPLf1GJzlHZzlE5zoAWYVUMy/+AE2FVAsv/gBIiAKBhK86AF2FVC85Q28t/B9IHMFCEywcTygfJUAXMyVAHzMlQCMzJUAPMyVAEzMlQA8zJUATMyVAEzMkjcF/wcF9gcoAZY4AXcmNygBljgBth2QPG3wHQbSHTAAHycCDWAdMAMPJ3MCFtVQMhIFUDIds8gB9lAvK0MAkIBlUIVQxVDFUMVQxVDFULVQxVB1UMVQxVDFUMVQxVDds8gB9lAvK0joAC0wCXiwhxATAj2QEwIQHhcCPZVEgkATxxFrCOgCYh4HGV8rQwINlxFbqTcCTZ4YsI0SNwWdklAUyW7UDtUNswVhfHAQPDAI6AJCHhVhnHAiHhMPJ5cIAXcmOAF2UB2SYD/jBWGNcNH2+jnHBVIIAXdWOAGmUB2eEwVhnXSfKwnPJ5cIAXcmOAF2UB2eGAGGHTH55fA/J5cIAWcmOAFmUB2SLBDI6A4SLBC46A4QLACiJwcoAaYwGAE3ljgBVhc4AZY4AcYXOAGmPh7UTQ0wAB8n/6QNX6QNN/03/Tf9X6QNU5MicBPPpA1fpA1dMAjoAiIeEB1NTTB9P/+kBVQF8FIVUB2SgBNDDV0wCOgCIh4QHU1NMH0//6QFVAXwUhVQHZKQEyMNWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2SoB/AHTANEF0QbRgBRh038J0QjTf9N/03/VgDFh0wBVD9HTAAP6QNSAFGHR1AbTAPpA+kD6ADArvAnTB4AaYdHT/9X6QNTUcPhk0wfT/9X6QNEB0QbRVQ/y4GWAIWHy0GZWG/LgZ/gq0CDXSsAD8uBF1NTV+kDTf9N/VQJWEMcFASsBeNN/1dN/03/Tf9MH1NFfB/LgaF8FJNMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2SwB/siC8NlQeXQ1r6PwKYQwzEAtfj6feBADBnhP5K+UMnEZmyLdIQHPC/9xIgHPCwBToM5wJAHPCwCAFBTPCw8G0gcwUwbKB8kkzHATzwsgghIBNAAUJgHPCyd0JwHPCwJwJwHPCz9WEdMBB8lWGiPMVhMszlY0VQf0AFGGygdQOMwtAv7JcBPPC/8SzMlWGVUBzFYVAcsHcM8Lf1YUAcv/zMkg12UlAc8LD4Lw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt3PC/8B+QDPC//J0PkCFc8L/8nQJMEDmV8EwAPy0GPyNOEEwALytATTAI6AIiHhAdMEAdcYATAhLy4ABlUB2QL+MNIHMFILygfJcoAeYQH7AlAHzFYQVQXOcM8LIFLmzIAuYVUF9AACycgwgBRh2zyBAIL7AFACzFLCzMgCyVYQVQfOcM8L/8zJURvPCwdwzwt/KgHL/8zJINdlgClhI86AJGEBy38Fyw+AG2FVBMt/cSQBzwsAUWTOgBdhJc6AF0cwAfJhKMxwJwHPCwCAKmEhzoLw2VB5dDWvo/AphDDMQC1+Pp94EAMGeE/kr5QycRmbIt0Xzwv/gB1hVQXLf4AZYVUDzFDZygcG+QCAEWEqzIARYQHMVQ8BywcCy//JDs8L/x/OVQ9VBssHH8v/HM4K0PkCE88L/8nQUAPOMQCijjUwgBRhVQrLAMlQC8zJUAjMyVAJzMlQBszJUAbMyVACzMlQBczJ7VR6gBdigBWAGWOALGUB2VYXIeGAEmFVBM4hcFUcAVUDVVhVCFU6VQ3ZAZIwAvJ57UTQ0wAB8n/6QNX6QNN/03/Tf9X6QNX6QNX6QNWOgAHTAI4TcHBtbXBwKFUTVQVVFAFVBlUV2SIB4dTU0wfT//pAcSjZMwFUAdWOgAHTAI4TcHBtbXBwKFUTVQVVFAFVBlUV2SIB4dTU0wfT//pAcSjZNAEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2TUB/AHTANEF0Q3RgBVh0QTAAA3AAIAWYdFQDbGAFmHRgBdh0XD4ZPLQachwIQHPCwHJcCIBzwsAU/LOVhckzlYVAcxSwsxWHiXOdiQBzwsCBdCAOmHTANMA0wBQSc5WIlUEy3+AJ2HTHzAJ+kAwVhFVBsxWGlUHzFAkzlYhVQLLfzYB0lGJyx8rwwBT6s5WICzOViItzlYcVQfLB1YTVQfLB3EWsFYpVQbOcBj6AlYkVQzLf1YSVQfL/1YbVQTL/1YYwACAQWFVBPQAcPoCcPoCcc8LYY6AVhoh4XFVDwHPCwBWEgHOIQFV0VUO2TcB/jBQXcsAyVAHzMkBzMlQBczJUAPMyQHMyVACzMlQAszJUAXMyYBA+wDIcSEBzwsAgBdhIcyAF2EBzFHxzB7MHMsHGsv/gBNhVQzLB3AsAc8LAIAWYS3OgBdhLs6AGGEvzoAeYSTOgBdhVQXL/4AcYYARYc6AG2EBy3+AGmEBy384AMKAGWEBy39Q986AFWFVDs6OLzBQ1ssAyVAMzMlQBMzJUALMyQHMyQHMyQHMyVAGzMntVIALVfCAFIASY4AkZQHZKyHgVQ6AEWHOIXBVHoARYVUuVQ9VBoARYVUJVWqAEWHZAp4iwQ2OgOEwAvJ57UTQ0wAB8n/6QNX6QNN/03/Tf9X6QNX6QNX6QNWOgAHTAI4TcHBtbXBwKFUTVQVVFAFVBlUV2SIB4dTU0wfT//pAcSjZQDoBVAHVjoAB0wCOE3BwbW1wcChVE1UFVRQBVQZVFdkiAeHU1NMH0//6QHEo2TsBJAHV0wCOgCIh4QH6QAEwIVUB2TwC/jDTANEC0TAJ0YARYdGANGHTANMA0wCAFmHR+kD4KtAg10rAA4AaYdGAG2HRcPhk8uBF1NTV+kDTf9N/UoTHBQPTf9XTf9N/03/TB9TRXwny4GTIXwXbPIBC+wDIgBthIc5xIgHPCwCAF2EjzoAYYSTOgBlhJc6AHGFVBMt/cBZHPQGozwsAgB1hIc4KwACAHGFVBst/gBthAct/joCOFyNVKHKAEmNfBSFVL14QVVxzgBNjVZvZVhUB4YAZYSjMgBlhAcyAGGEByweAF2EBy/+AFmEBziHZPgH+gBph+kCONzBQCc6AFGEBywDJUATMyVAHzMlQBczJUAPMyQHMyVADzMlQBszJ7VSADIARYoAVgBNjgCZlAdkBMCUh4IATYSvMgBNhAcyAEmEByweAEWEBy/9VDwHOIXBfMHOAEWNVHYAUYVUOVRh0gBFjVQ9VDoAUYVUPc4ASYz8ACIAUYdkBoALADSJwWeFfA/J57UTQ0wAB8n/6QNX6QNN/03/Tf9X6QNX6QNX6QNWOgAHTAI4TcHBtbXBwKFUTVQVVFAFVBlUV2SIB4dTU0wfT//pAcSjZQQFUAdWOgAHTAI4TcHBtbXBwKFUTVQVVFAFVBlUV2SIB4dTU0wfT//pAcSjZQgEyAdWOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2UMC/AHTANEwBNEM0VuAEmHR+CrQINdKgBVh0cADgBZh0YAXYdFw+GTy4EWAMWHTAALU1NX6QNN/038I0wDTAPpAMFIGxwUK03/V03/Tf9N/0wfU0V8LBfLgZMhfBds8gEL7AMiAGWEhznAiAc8LAIAVYSPOgBZhJM6AF2ElzoAaYUdEAbJVBMt/gBthJc4IwAABgBphzwt/gBlhAct/joCOFSZVH3OAE2NfBSFzgBFjXhCAEXNj2VYTAeFxKAHPCwCAGGEBzIAXYQHMgBZhAcsHgBVhAcv/gBRhAc4h2UUB/gnAAI5TjjBxGM8LAMkBzMlQCMzJUATMyVACzMkBzMlQBMzJUATMye1UgA1VwIAVgA9jgCJlAdksIeBxGc8LAFUPAc4ocFUIVRpVB1UFVShVB1UZVQtVC9mOGChVAlUEVSxfBSFVEQFVDFVlVQxVDFUb2SUB4HEqAc8LAIARYQFGAB7MVQ8BzB/LBx3L/xvOLNkAMsiAGM8LBc5w+gJtAfQAcPoCcPoCcM8LYckBvO1AjlaAGWHtUAuAEWGAE2GAFGFwX/BwXzCAE2GAMGGAImFygC9jgCRhgDBhd4AfY4AgYYAlYYAhYYAmYXSALWNygCdjAYAwYYAqYXWALGOAEIAgY4AwYYAwYVUP0wBJA/6OJXFwX8BVDjBVC1UZVQlVD4AOgBFjgBthgBthd4AVY3OAHGNeENkiAeEg0wCOL3FwX8BVHYARYV8DVQtVGVUJVQ+ADoARY4AbYYAbYXWAF2OAHGFygBtjcoAdYwHZcSMBuY6A4HETuiLh1Y6AAdMAmXBwJFURAVUR2SIB4dMETUtKAAZxJNkB/I55jmeOVY5DAtFxXyBVBFUXVRtVDoASYYAUYXKAFmNzgBljXw1VDFUaVQpVD4AOgBFjgBxhgBxhc4AaY3KAG2MBc4AaY3KAHWMB2QPTAJRwcCbZIgHh1AFxJtkD0wCUcHAm2SIB4dQBcSbZAtMAlHBwJdkiAeHUAXEl2QLTAEwALJtwXyAmVRFVA1US2SIB4dMA0wBxJtkBFo6AIVUhXhBVEgHiTgEujoAB0wCZcHAkVREBVRHZIgHh0wRxJNlPATaOgALTAJtwXyAmVRFVA1US2SIB4dMA0wBxJtlQASSOgALTAJRwcCXZIgHh1AFxJdlRASSOgAPTAJRwcCbZIgHh1AFxJtlSAfwC0wCORXFwXyBxVQVVCFUbVQ6AEmGAFGF1gBZjXwxVDVUbVQtVD4AOgBFjgB1hgB1hgB1hcoAcYwFzgBljgBxhgBxhgB1hgB5h2SIB4dQBcHFfIFUFVQhVG1UOgBJhgBRhdYAWY18MVQ1VG1ULVQ+ADoARY4AdYYAdYYAdYXJTAC6AHGMBgBxhcoAbYwFygBtjgB1hgB5h2QHs7UCOOoASYe1QDg9VD4ARYXBf8HBfwIAcYYANgCBjgClhgC1hdIAnY3KAK2MBgCxhgC1hgBWAGWOALmGALmEm0wCOLNMA0wDTAPpA+kD6APQE+gD6ANM/0x9xcFUNgBVhW1UOVT9Vp1UvXhCAE2HZIgHhWybTAVUB/o4qbW1ycF8gJXBfUFUcW1UNVT5VK4ARYVUdgBFhVTyAEWGAEWGAE2GAE2HZIsEDjjgCwAMi4fpAAQH6QAEB0z/THwFtbXFycF9AVQ2AFWFbVQ5VP1UvVR9VDYARYVU7VR8BgBJhgBNh2eECwAIi4fpAAQH6QAEB+gBtbXFwI3BWAE5fMHFVDYAVYVtVDlU/VS+AEWFVHQGAEWFVPIARYYARYYASYYATYdk=",
        code: "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",
        codeHash: "14649cd53ff139ee92a5693317ce04c032b3ae891a1270a2a8f70af0d8189d6b",
    };
    
    constructor(options: AccountOptions) {
        super(XchgPairAccount.package, options);
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: {
        min_amount: string | number | bigint// uint128,
        minmove: string | number | bigint// uint128,
        price_denum: string | number | bigint// uint128,
        deploy_value: string | number | bigint// uint128,
        notify_addr: string// address,
        major_tip3cfg: {
            name: string// string
            symbol: string// string
            decimals: number// uint8
            root_pubkey: string | number | bigint// uint256
            root_address: string// address
        }// tuple,
        minor_tip3cfg: {
            name: string// string
            symbol: string// string
            decimals: number// uint8
            root_pubkey: string | number | bigint// uint256
            root_address: string// address
        }// tuple,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async runLocalOnDeploy(input: {
        min_amount: string | number | bigint// uint128,
        minmove: string | number | bigint// uint128,
        price_denum: string | number | bigint// uint128,
        deploy_value: string | number | bigint// uint128,
        notify_addr: string// address,
        major_tip3cfg: {
            name: string// string
            symbol: string// string
            decimals: number// uint8
            root_pubkey: string | number | bigint// uint256
            root_address: string// address
        }// tuple,
        minor_tip3cfg: {
            name: string// string
            symbol: string// string
            decimals: number// uint8
            root_pubkey: string | number | bigint// uint256
            root_address: string// address
        }// tuple,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runRequestDetails(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            tip3_major_root: string// address,
            tip3_minor_root: string// address,
            min_amount: string// uint128,
            minmove: string// uint128,
            price_denum: string// uint128,
            notify_addr: string// address,
            major_reserve_wallet: string// address,
            minor_reserve_wallet: string// address,
            major_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            minor_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            next?: string// optional(address),
            unlisted: boolean// bool,
        }
    }> {
        return await runHelper(this, "requestDetails", input);
    }

    async runLocalRequestDetails(input: {
        _answer_id: number// uint32,
    }): Promise<{
        transaction: Transaction,
        output: {
            tip3_major_root: string// address,
            tip3_minor_root: string// address,
            min_amount: string// uint128,
            minmove: string// uint128,
            price_denum: string// uint128,
            notify_addr: string// address,
            major_reserve_wallet: string// address,
            minor_reserve_wallet: string// address,
            major_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            minor_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            next?: string// optional(address),
            unlisted: boolean// bool,
        }
    }> {
        return await runLocalHelper(this, "requestDetails", input);
    }

    async runSetNext(input: {
        next: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setNext", input);
    }

    async runLocalSetNext(input: {
        next: string// address,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setNext", input);
    }

    async runUnlist(): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "unlist", {});
    }

    async runLocalUnlist(): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unlist", {});
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            tip3_major_root: string// address,
            tip3_minor_root: string// address,
            min_amount: string// uint128,
            minmove: string// uint128,
            price_denum: string// uint128,
            notify_addr: string// address,
            major_reserve_wallet: string// address,
            minor_reserve_wallet: string// address,
            major_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            minor_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            next?: string// optional(address),
            unlisted: boolean// bool,
        }
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async runLocalGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            tip3_major_root: string// address,
            tip3_minor_root: string// address,
            min_amount: string// uint128,
            minmove: string// uint128,
            price_denum: string// uint128,
            notify_addr: string// address,
            major_reserve_wallet: string// address,
            minor_reserve_wallet: string// address,
            major_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            minor_tip3cfg: {
                name: string// string
                symbol: string// string
                decimals: number// uint8
                root_pubkey: string// uint256
                root_address: string// address
            }// tuple,
            next?: string// optional(address),
            unlisted: boolean// bool,
        }
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetConfig(): Promise<{
        transaction: Transaction,
        output: {
            flex: string// address,
            ev_cfg: {
                transfer_tip3: string// uint128
                return_ownership: string// uint128
                order_answer: string// uint128
                process_queue: string// uint128
                send_notify: string// uint128
                dest_wallet_keep_evers: string// uint128
            }// tuple,
            deals_limit: number// uint8,
            xchg_price_code: string// cell,
        }
    }> {
        return await runHelper(this, "getConfig", {});
    }

    async runLocalGetConfig(): Promise<{
        transaction: Transaction,
        output: {
            flex: string// address,
            ev_cfg: {
                transfer_tip3: string// uint128
                return_ownership: string// uint128
                order_answer: string// uint128
                process_queue: string// uint128
                send_notify: string// uint128
                dest_wallet_keep_evers: string// uint128
            }// tuple,
            deals_limit: number// uint8,
            xchg_price_code: string// cell,
        }
    }> {
        return await runLocalHelper(this, "getConfig", {});
    }

    async runGetPriceXchgCode(input: {
        salted: boolean// bool,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// cell,
        }
    }> {
        return await runHelper(this, "getPriceXchgCode", input);
    }

    async runLocalGetPriceXchgCode(input: {
        salted: boolean// bool,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// cell,
        }
    }> {
        return await runLocalHelper(this, "getPriceXchgCode", input);
    }

    async runGetPriceXchgSalt(): Promise<{
        transaction: Transaction,
        output: {
            value0: string// cell,
        }
    }> {
        return await runHelper(this, "getPriceXchgSalt", {});
    }

    async runLocalGetPriceXchgSalt(): Promise<{
        transaction: Transaction,
        output: {
            value0: string// cell,
        }
    }> {
        return await runLocalHelper(this, "getPriceXchgSalt", {});
    }

}

