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

export class NewChallenge extends EthereumEvent {
  get params(): NewChallenge__Params {
    return new NewChallenge__Params(this);
  }
}

export class NewChallenge__Params {
  _event: NewChallenge;

  constructor(event: NewChallenge) {
    this._event = event;
  }

  get _currentChallenge(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _currentRequestId(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get _difficulty(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _totalTips(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NewValue extends EthereumEvent {
  get params(): NewValue__Params {
    return new NewValue__Params(this);
  }
}

export class NewValue__Params {
  _event: NewValue;

  constructor(event: NewValue) {
    this._event = event;
  }

  get _requestId(): Array<BigInt> {
    return this._event.parameters[0].value.toBigIntArray();
  }

  get _time(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _value(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get _totalTips(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _currentChallenge(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class NonceSubmitted extends EthereumEvent {
  get params(): NonceSubmitted__Params {
    return new NonceSubmitted__Params(this);
  }
}

export class NonceSubmitted__Params {
  _event: NonceSubmitted;

  constructor(event: NonceSubmitted) {
    this._event = event;
  }

  get _miner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _nonce(): string {
    return this._event.parameters[1].value.toString();
  }

  get _requestId(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get _value(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get _currentChallenge(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class OwnershipProposed extends EthereumEvent {
  get params(): OwnershipProposed__Params {
    return new OwnershipProposed__Params(this);
  }
}

export class OwnershipProposed__Params {
  _event: OwnershipProposed;

  constructor(event: OwnershipProposed) {
    this._event = event;
  }

  get _previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get _previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TipAdded extends EthereumEvent {
  get params(): TipAdded__Params {
    return new TipAdded__Params(this);
  }
}

export class TipAdded__Params {
  _event: TipAdded;

  constructor(event: TipAdded) {
    this._event = event;
  }

  get _sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _requestId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _tip(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _totalTips(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class LibraryContract extends SmartContract {
  static bind(address: Address): LibraryContract {
    return new LibraryContract("LibraryContract", address);
  }

  _owner(): Bytes {
    let result = super.call("_owner", []);

    return result[0].toBytes();
  }

  try__owner(): CallResult<Bytes> {
    let result = super.tryCall("_owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  _tBlock(): Bytes {
    let result = super.call("_tBlock", []);

    return result[0].toBytes();
  }

  try__tBlock(): CallResult<Bytes> {
    let result = super.tryCall("_tBlock", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  currentRequestId(): Bytes {
    let result = super.call("currentRequestId", []);

    return result[0].toBytes();
  }

  try_currentRequestId(): CallResult<Bytes> {
    let result = super.tryCall("currentRequestId", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  currentReward(): Bytes {
    let result = super.call("currentReward", []);

    return result[0].toBytes();
  }

  try_currentReward(): CallResult<Bytes> {
    let result = super.tryCall("currentReward", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  currentTotalTips(): Bytes {
    let result = super.call("currentTotalTips", []);

    return result[0].toBytes();
  }

  try_currentTotalTips(): CallResult<Bytes> {
    let result = super.tryCall("currentTotalTips", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  devShare(): Bytes {
    let result = super.call("devShare", []);

    return result[0].toBytes();
  }

  try_devShare(): CallResult<Bytes> {
    let result = super.tryCall("devShare", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  difficulty(): Bytes {
    let result = super.call("difficulty", []);

    return result[0].toBytes();
  }

  try_difficulty(): CallResult<Bytes> {
    let result = super.tryCall("difficulty", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  pending_owner(): Bytes {
    let result = super.call("pending_owner", []);

    return result[0].toBytes();
  }

  try_pending_owner(): CallResult<Bytes> {
    let result = super.tryCall("pending_owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  requestCount(): Bytes {
    let result = super.call("requestCount", []);

    return result[0].toBytes();
  }

  try_requestCount(): CallResult<Bytes> {
    let result = super.tryCall("requestCount", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  requestQPosition(): Bytes {
    let result = super.call("requestQPosition", []);

    return result[0].toBytes();
  }

  try_requestQPosition(): CallResult<Bytes> {
    let result = super.tryCall("requestQPosition", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  runningTips(): Bytes {
    let result = super.call("runningTips", []);

    return result[0].toBytes();
  }

  try_runningTips(): CallResult<Bytes> {
    let result = super.tryCall("runningTips", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  slotProgress(): Bytes {
    let result = super.call("slotProgress", []);

    return result[0].toBytes();
  }

  try_slotProgress(): CallResult<Bytes> {
    let result = super.tryCall("slotProgress", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  timeOfLastNewValue(): Bytes {
    let result = super.call("timeOfLastNewValue", []);

    return result[0].toBytes();
  }

  try_timeOfLastNewValue(): CallResult<Bytes> {
    let result = super.tryCall("timeOfLastNewValue", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  timeTarget(): Bytes {
    let result = super.call("timeTarget", []);

    return result[0].toBytes();
  }

  try_timeTarget(): CallResult<Bytes> {
    let result = super.tryCall("timeTarget", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  totalTip(): Bytes {
    let result = super.call("totalTip", []);

    return result[0].toBytes();
  }

  try_totalTip(): CallResult<Bytes> {
    let result = super.tryCall("totalTip", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  total_supply(): Bytes {
    let result = super.call("total_supply", []);

    return result[0].toBytes();
  }

  try_total_supply(): CallResult<Bytes> {
    let result = super.tryCall("total_supply", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }
}
