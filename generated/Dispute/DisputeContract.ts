// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class DisputeVoteTallied extends EthereumEvent {
  get params(): DisputeVoteTallied__Params {
    return new DisputeVoteTallied__Params(this);
  }
}

export class DisputeVoteTallied__Params {
  _event: DisputeVoteTallied;

  constructor(event: DisputeVoteTallied) {
    this._event = event;
  }

  get _disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _result(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _reportedMiner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _reportingParty(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get _active(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class NewDispute extends EthereumEvent {
  get params(): NewDispute__Params {
    return new NewDispute__Params(this);
  }
}

export class NewDispute__Params {
  _event: NewDispute;

  constructor(event: NewDispute) {
    this._event = event;
  }

  get _disputeId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _requestId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _miner(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class NewTellorAddress extends EthereumEvent {
  get params(): NewTellorAddress__Params {
    return new NewTellorAddress__Params(this);
  }
}

export class NewTellorAddress__Params {
  _event: NewTellorAddress;

  constructor(event: NewTellorAddress) {
    this._event = event;
  }

  get _newTellor(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Voted extends EthereumEvent {
  get params(): Voted__Params {
    return new Voted__Params(this);
  }
}

export class Voted__Params {
  _event: Voted;

  constructor(event: Voted) {
    this._event = event;
  }

  get _disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _position(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get _voter(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _voteWeight(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DisputeContract extends SmartContract {
  static bind(address: Address): DisputeContract {
    return new DisputeContract("DisputeContract", address);
  }
}
