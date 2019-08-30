import BN from "bn.js";
import { Address } from "web3x-es/address";
import { EventLog, TransactionReceipt } from "web3x-es/formatters";
import { Contract, ContractOptions, TxCall, TxSend, EventSubscriptionFactory } from "web3x-es/contract";
import { Eth } from "web3x-es/eth";
import abi from "./EthPicturesAbi";
export type TransferEvent = {
    from: Address;
    to: Address;
    tokenId: string;
};
export type ApprovalEvent = {
    owner: Address;
    approved: Address;
    tokenId: string;
};
export type ApprovalForAllEvent = {
    owner: Address;
    operator: Address;
    approved: boolean;
};
export interface TransferEventLog extends EventLog<TransferEvent, "Transfer"> {
}
export interface ApprovalEventLog extends EventLog<ApprovalEvent, "Approval"> {
}
export interface ApprovalForAllEventLog extends EventLog<ApprovalForAllEvent, "ApprovalForAll"> {
}
interface EthPicturesEvents {
    Transfer: EventSubscriptionFactory<TransferEventLog>;
    Approval: EventSubscriptionFactory<ApprovalEventLog>;
    ApprovalForAll: EventSubscriptionFactory<ApprovalForAllEventLog>;
}
interface EthPicturesEventLogs {
    Transfer: TransferEventLog;
    Approval: ApprovalEventLog;
    ApprovalForAll: ApprovalForAllEventLog;
}
interface EthPicturesTxEventLogs {
    Transfer: TransferEventLog[];
    Approval: ApprovalEventLog[];
    ApprovalForAll: ApprovalForAllEventLog[];
}
export interface EthPicturesTransactionReceipt extends TransactionReceipt<EthPicturesTxEventLogs> {
}
interface EthPicturesMethods {
    supportsInterface(interfaceId: string): TxCall<boolean>;
    name(): TxCall<string>;
    getApproved(tokenId: number | string | BN): TxCall<Address>;
    approve(to: Address, tokenId: number | string | BN): TxSend<EthPicturesTransactionReceipt>;
    totalSupply(): TxCall<string>;
    transferFrom(from: Address, to: Address, tokenId: number | string | BN): TxSend<EthPicturesTransactionReceipt>;
    tokenOfOwnerByIndex(owner: Address, index: number | string | BN): TxCall<string>;
    safeTransferFrom(from: Address, to: Address, tokenId: number | string | BN): TxSend<EthPicturesTransactionReceipt>;
    initialize(name: string, symbol: string): TxSend<EthPicturesTransactionReceipt>;
    tokenByIndex(index: number | string | BN): TxCall<string>;
    ownerOf(tokenId: number | string | BN): TxCall<Address>;
    balanceOf(owner: Address): TxCall<string>;
    initialize(): TxSend<EthPicturesTransactionReceipt>;
    symbol(): TxCall<string>;
    setApprovalForAll(to: Address, approved: boolean): TxSend<EthPicturesTransactionReceipt>;
    safeTransferFrom(from: Address, to: Address, tokenId: number | string | BN, _data: string): TxSend<EthPicturesTransactionReceipt>;
    tokenURI(tokenId: number | string | BN): TxCall<string>;
    mint(to: Address, tokenURI: string): TxSend<EthPicturesTransactionReceipt>;
    isApprovedForAll(owner: Address, operator: Address): TxCall<boolean>;
}
export interface EthPicturesDefinition {
    methods: EthPicturesMethods;
    events: EthPicturesEvents;
    eventLogs: EthPicturesEventLogs;
}
export class EthPictures extends Contract<EthPicturesDefinition> {
    constructor(eth: Eth, address?: Address, options?: ContractOptions) {
        super(eth, abi, address, options);
    }
    deploy(): TxSend<EthPicturesTransactionReceipt> {
        return super.deployBytecode("0x60806040525b5b61000b565b612ab08061001a6000396000f3fe60806040523480156100115760006000fd5b50600436106101265760003560e01c80634f6ccce7116100ae578063a22cb46511610072578063a22cb4651461072d578063b88d4fde1461077e578063c87b56dd1461088b578063d0def52114610934578063e985e9c514610a2b57610126565b80634f6ccce7146105945780636352211e146105d757806370a08231146106465780638129fc1c1461069f57806395d89b41146106a957610126565b806318160ddd116100f557806318160ddd146102d457806323b872dd146102f25780632f745c591461036157806342842e0e146103c45780634cd88b761461043357610126565b806301ffc9a71461012c57806306fdde0314610192578063081812fc14610216578063095ea7b31461028557610126565b60006000fd5b610178600480360360208110156101435760006000fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610aa8565b604051808215151515815260200191505060405180910390f35b61019a610b18565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101db5780820151818401525b6020810190506101bf565b50505050905090810190601f1680156102085780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102436004803603602081101561022d5760006000fd5b8101908080359060200190929190505050610bc2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102d26004803603604081101561029c5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c22565b005b6102dc610e29565b6040518082815260200191505060405180910390f35b61035f600480360360608110156103095760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e3e565b005b6103ae600480360360408110156103785760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ec9565b6040518082815260200191505060405180910390f35b610431600480360360608110156103db5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f57565b005b6105926004803603604081101561044a5760006000fd5b81019080803590602001906401000000008111156104685760006000fd5b82018360208201111561047b5760006000fd5b8035906020019184600183028401116401000000008311171561049e5760006000fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050909091929090919290803590602001906401000000008111156105065760006000fd5b8201836020820111156105195760006000fd5b8035906020019184600183028401116401000000008311171561053c5760006000fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050909091929090919290505050610f81565b005b6105c1600480360360208110156105ab5760006000fd5b81019080803590602001909291905050506110f4565b6040518082815260200191505060405180910390f35b610604600480360360208110156105ee5760006000fd5b8101908080359060200190929190505050611140565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106896004803603602081101561065d5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111c9565b6040518082815260200191505060405180910390f35b6106a7611269565b005b6106b1611412565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106f25780820151818401525b6020810190506106d6565b50505050905090810190601f16801561071f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61077c600480360360408110156107445760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506114bc565b005b610889600480360360808110156107955760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107fd5760006000fd5b8201836020820111156108105760006000fd5b803590602001918460018302840111640100000000831117156108335760006000fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050909091929090919290505050611692565b005b6108b8600480360360208110156108a25760006000fd5b81019080803590602001909291905050506116c8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108f95780820151818401525b6020810190506108dd565b50505050905090810190601f1680156109265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610a156004803603604081101561094b5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156109895760006000fd5b82018360208201111561099c5760006000fd5b803590602001918460018302840111640100000000831117156109bf5760006000fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509090919290909192905050506117a3565b6040518082815260200191505060405180910390f35b610a8e60048036036040811015610a425760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611805565b604051808215151515815260200191505060405180910390f35b600060336000506000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050610b13565b919050565b606060d26000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bb35780601f10610b8857610100808354040283529160200191610bb3565b820191906000526020600020905b815481529060010190602001808311610b9657829003601f168201915b50505050509050610bbf565b90565b6000610bd3826118a463ffffffff16565b1515610bdf5760006000fd5b6067600050600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610c1d565b919050565b6000610c338261114063ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610cbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612a2a6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610ce161192063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff161480610d1c5750610d1b81610d1061192063ffffffff16565b61180563ffffffff16565b5b1515610d73576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806129c46038913960400191505060405180910390fd5b826067600050600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505b5050565b6000609e600050805490509050610e3b565b90565b610e5b610e4f61192063ffffffff16565b8261192d63ffffffff16565b1515610eb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612a4b6031913960400191505060405180910390fd5b610ec38383836119db63ffffffff16565b5b505050565b6000610eda836111c963ffffffff16565b82101515610ee85760006000fd5b609c60005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005082815481101515610f3a57fe5b906000526020600020900160005b50549050610f51565b92915050565b610f7b8383836040518060200160405280600081526020015061169263ffffffff16565b5b505050565b600060019054906101000a900460ff1680610fa65750610fa5611a1263ffffffff16565b5b80610fbe5750600060009054906101000a900460ff16155b1515611015576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806129fc602e913960400191505060405180910390fd5b6000600060019054906101000a900460ff161590508015611067576001600060016101000a81548160ff0219169083151502179055506001600060006101000a81548160ff0219169083151502179055505b611075611a2a63ffffffff16565b15156110815760006000fd5b8260d2600050908051906020019061109a9291906128e7565b508160d360005090805190602001906110b49291906128e7565b506110cb635b5e139f60e01b611a4c63ffffffff16565b5b80156110ee576000600060016101000a81548160ff0219169083151502179055505b505b5050565b6000611104610e2963ffffffff16565b821015156111125760006000fd5b609e6000508281548110151561112457fe5b906000526020600020900160005b5054905061113b565b919050565b600060006066600050600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156111ba5760006000fd5b809150506111c456505b919050565b6000600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156112085760006000fd5b61125d606860005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050611af3909063ffffffff16565b9050611264565b919050565b600060019054906101000a900460ff168061128e575061128d611a1263ffffffff16565b5b806112a65750600060009054906101000a900460ff16155b15156112fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806129fc602e913960400191505060405180910390fd5b6000600060019054906101000a900460ff16159050801561134f576001600060016101000a81548160ff0219169083151502179055506001600060006101000a81548160ff0219169083151502179055505b61135d611b0963ffffffff16565b61136b611c3a63ffffffff16565b6113eb6040518060400160405280600c81526020017f6574682e706963747572657300000000000000000000000000000000000000008152602001506040518060400160405280600381526020017f5049430000000000000000000000000000000000000000000000000000000000815260200150610f8163ffffffff16565b5b801561140e576000600060016101000a81548160ff0219169083151502179055505b505b565b606060d36000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114ad5780601f10611482576101008083540402835291602001916114ad565b820191906000526020600020905b81548152906001019060200180831161149057829003601f168201915b505050505090506114b9565b90565b6114ca61192063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611570576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081526020015060200191505060405180910390fd5b806069600050600061158661192063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661163c61192063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35b5050565b6116a3848484610e3e63ffffffff16565b6116b584848484611d7763ffffffff16565b15156116c15760006000fd5b5b50505050565b60606116d9826118a463ffffffff16565b15156116e55760006000fd5b60d460005060008381526020019081526020016000206000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117925780601f1061176757610100808354040283529160200191611792565b820191906000526020600020905b81548152906001019060200180831161177557829003601f168201915b5050505050905061179e565b919050565b60006117bb610139600050611f80909063ffffffff16565b60006117d3610139600050611af3909063ffffffff16565b90506117e58482611f9b63ffffffff16565b6117f58184611fcf63ffffffff16565b809150506117ff56505b92915050565b6000606960005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905061189e565b92915050565b600060006066600050600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141591505061191b56505b919050565b600033905061192a565b90565b600060006119408361114063ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806119b557508373ffffffffffffffffffffffffffffffffffffffff1661199d84610bc263ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16145b806119cc57506119cb818561180563ffffffff16565b5b9150506119d556505b92915050565b6119ec83838361201d63ffffffff16565b6119fc838261221263ffffffff16565b611a0c82826123eb63ffffffff16565b5b505050565b60006000303b905060008114915050611a2756505b90565b6000611a426380ac58cd60e01b610aa863ffffffff16565b9050611a49565b90565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614151515611a825760006000fd5b600160336000506000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50565b600081600001600050549050611b04565b919050565b600060019054906101000a900460ff1680611b2e5750611b2d611a1263ffffffff16565b5b80611b465750600060009054906101000a900460ff16155b1515611b9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806129fc602e913960400191505060405180910390fd5b6000600060019054906101000a900460ff161590508015611bef576001600060016101000a81548160ff0219169083151502179055506001600060006101000a81548160ff0219169083151502179055505b611bfd6124cb63ffffffff16565b611c136380ac58cd60e01b611a4c63ffffffff16565b5b8015611c36576000600060016101000a81548160ff0219169083151502179055505b505b565b600060019054906101000a900460ff1680611c5f5750611c5e611a1263ffffffff16565b5b80611c775750600060009054906101000a900460ff16155b1515611cce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806129fc602e913960400191505060405180910390fd5b6000600060019054906101000a900460ff161590508015611d20576001600060016101000a81548160ff0219169083151502179055506001600060006101000a81548160ff0219169083151502179055505b611d2e611a2a63ffffffff16565b1515611d3a5760006000fd5b611d5063780e9d6360e01b611a4c63ffffffff16565b5b8015611d73576000600060016101000a81548160ff0219169083151502179055505b505b565b6000611da08473ffffffffffffffffffffffffffffffffffffffff166125ee909063ffffffff16565b1515611daf5760019050611f78565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02611ddb61192063ffffffff16565b8887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611e985780820151818401525b602081019050611e7c565b50505050905090810190601f168015611ec55780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015611ee85760006000fd5b505af1158015611efd573d600060003e3d6000fd5b505050506040513d6020811015611f145760006000fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611f7856505b949350505050565b60018160000160008282825054019250508190909055505b50565b611fab828261260863ffffffff16565b611fbb82826123eb63ffffffff16565b611fca8161276c63ffffffff16565b5b5050565b611fde826118a463ffffffff16565b1515611fea5760006000fd5b8060d4600050600084815260200190815260200160002060005090805190602001906120179291906128e7565b505b5050565b8273ffffffffffffffffffffffffffffffffffffffff166120438261114063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff161415156120665760006000fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156120a35760006000fd5b6120b2816127cb63ffffffff16565b612107606860005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050612892909063ffffffff16565b61215c606860005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050611f80909063ffffffff16565b816066600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b505050565b60006122706001609c60005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050805490506128be90919063ffffffff16565b90506000609d60005060008481526020019081526020016000206000505490508181141515612389576000609c60005060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050838154811015156122ed57fe5b906000526020600020900160005b5054905080609c60005060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508381548110151561235257fe5b906000526020600020900160005b5081909090555081609d6000506000838152602001908152602001600020600050819090905550505b609c60005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005080548091906001900390906123e3919061296c565b5050505b5050565b609c60005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005080549050609d6000506000838152602001908152602001600020600050819090905550609c60005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190806001815401808255809150509060018203906000526020600020900160005b9091929091909150909055505b5050565b600060019054906101000a900460ff16806124f057506124ef611a1263ffffffff16565b5b806125085750600060009054906101000a900460ff16155b151561255f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806129fc602e913960400191505060405180910390fd5b6000600060019054906101000a900460ff1615905080156125b1576001600060016101000a81548160ff0219169083151502179055506001600060006101000a81548160ff0219169083151502179055505b6125c76301ffc9a760e01b611a4c63ffffffff16565b5b80156125ea576000600060016101000a81548160ff0219169083151502179055505b505b565b60006000823b90506000811191505061260356505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156126455760006000fd5b612654816118a463ffffffff16565b1515156126615760006000fd5b816066600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061270b606860005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050611f80909063ffffffff16565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b5050565b609e60005080549050609f6000506000838152602001908152602001600020600050819090905550609e6000508190806001815401808255809150509060018203906000526020600020900160005b9091929091909150909055505b50565b600073ffffffffffffffffffffffffffffffffffffffff166067600050600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561288e5760006067600050600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b6128ad600182600001600050546128be90919063ffffffff16565b816000016000508190909055505b50565b60008282111515156128d05760006000fd5b60008284039050809150506128e156505b92915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061292857805160ff191683800117855561295b565b8280016001018555821561295b579182015b8281111561295a578251826000509090559160200191906001019061293a565b5b5090506129689190612998565b5090565b815481835581811115612993578183600052602060002091820191016129929190612998565b5b505050565b6129c091906129a2565b808211156129bc57600081815060009055506001016129a2565b5090565b9056fe4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65644552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a265627a7a723158208ff4bf14b8f0abd7323fd45070cb56c0f0e497592c61e7d2f4e20942590ae30c64736f6c634300050b0032") as any;
    }
}
export var EthPicturesAbi = abi;