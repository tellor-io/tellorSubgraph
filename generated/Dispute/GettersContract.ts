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

export class GettersContract__getAllDisputeVarsResult {
  value0: Bytes;
  value1: boolean;
  value2: boolean;
  value3: boolean;
  value4: Address;
  value5: Address;
  value6: Address;
  value7: Array<BigInt>;
  value8: BigInt;

  constructor(
    value0: Bytes,
    value1: boolean,
    value2: boolean,
    value3: boolean,
    value4: Address,
    value5: Address,
    value6: Address,
    value7: Array<BigInt>,
    value8: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromFixedBytes(this.value0));
    map.set("value1", EthereumValue.fromBoolean(this.value1));
    map.set("value2", EthereumValue.fromBoolean(this.value2));
    map.set("value3", EthereumValue.fromBoolean(this.value3));
    map.set("value4", EthereumValue.fromAddress(this.value4));
    map.set("value5", EthereumValue.fromAddress(this.value5));
    map.set("value6", EthereumValue.fromAddress(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigIntArray(this.value7));
    map.set("value8", EthereumValue.fromSignedBigInt(this.value8));
    return map;
  }
}

export class GettersContract__getCurrentVariablesResult {
  value0: Bytes;
  value1: BigInt;
  value2: BigInt;
  value3: string;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: Bytes,
    value1: BigInt,
    value2: BigInt,
    value3: string,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromFixedBytes(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromString(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    return map;
  }
}

export class GettersContract__getLastNewValueResult {
  value0: BigInt;
  value1: boolean;

  constructor(value0: BigInt, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromBoolean(this.value1));
    return map;
  }
}

export class GettersContract__getLastNewValueByIdResult {
  value0: BigInt;
  value1: boolean;

  constructor(value0: BigInt, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromBoolean(this.value1));
    return map;
  }
}

export class GettersContract__getRequestVarsResult {
  value0: string;
  value1: string;
  value2: Bytes;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: string,
    value1: string,
    value2: Bytes,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromString(this.value0));
    map.set("value1", EthereumValue.fromString(this.value1));
    map.set("value2", EthereumValue.fromFixedBytes(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    return map;
  }
}

export class GettersContract__getStakerInfoResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class GettersContract__getVariablesOnDeckResult {
  value0: BigInt;
  value1: BigInt;
  value2: string;

  constructor(value0: BigInt, value1: BigInt, value2: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromString(this.value2));
    return map;
  }
}

export class GettersContract extends SmartContract {
  static bind(address: Address): GettersContract {
    return new GettersContract("GettersContract", address);
  }

  allowance(_user: Address, _spender: Address): BigInt {
    let result = super.call("allowance", [
      EthereumValue.fromAddress(_user),
      EthereumValue.fromAddress(_spender)
    ]);

    return result[0].toBigInt();
  }

  try_allowance(_user: Address, _spender: Address): CallResult<BigInt> {
    let result = super.tryCall("allowance", [
      EthereumValue.fromAddress(_user),
      EthereumValue.fromAddress(_spender)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  allowedToTrade(_user: Address, _amount: BigInt): boolean {
    let result = super.call("allowedToTrade", [
      EthereumValue.fromAddress(_user),
      EthereumValue.fromUnsignedBigInt(_amount)
    ]);

    return result[0].toBoolean();
  }

  try_allowedToTrade(_user: Address, _amount: BigInt): CallResult<boolean> {
    let result = super.tryCall("allowedToTrade", [
      EthereumValue.fromAddress(_user),
      EthereumValue.fromUnsignedBigInt(_amount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(_user: Address): BigInt {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(_user)]);

    return result[0].toBigInt();
  }

  try_balanceOf(_user: Address): CallResult<BigInt> {
    let result = super.tryCall("balanceOf", [EthereumValue.fromAddress(_user)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfAt(_user: Address, _blockNumber: BigInt): BigInt {
    let result = super.call("balanceOfAt", [
      EthereumValue.fromAddress(_user),
      EthereumValue.fromUnsignedBigInt(_blockNumber)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOfAt(_user: Address, _blockNumber: BigInt): CallResult<BigInt> {
    let result = super.tryCall("balanceOfAt", [
      EthereumValue.fromAddress(_user),
      EthereumValue.fromUnsignedBigInt(_blockNumber)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  didMine(_challenge: Bytes, _miner: Address): boolean {
    let result = super.call("didMine", [
      EthereumValue.fromFixedBytes(_challenge),
      EthereumValue.fromAddress(_miner)
    ]);

    return result[0].toBoolean();
  }

  try_didMine(_challenge: Bytes, _miner: Address): CallResult<boolean> {
    let result = super.tryCall("didMine", [
      EthereumValue.fromFixedBytes(_challenge),
      EthereumValue.fromAddress(_miner)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  didVote(_disputeId: BigInt, _address: Address): boolean {
    let result = super.call("didVote", [
      EthereumValue.fromUnsignedBigInt(_disputeId),
      EthereumValue.fromAddress(_address)
    ]);

    return result[0].toBoolean();
  }

  try_didVote(_disputeId: BigInt, _address: Address): CallResult<boolean> {
    let result = super.tryCall("didVote", [
      EthereumValue.fromUnsignedBigInt(_disputeId),
      EthereumValue.fromAddress(_address)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  getAddressVars(_data: Bytes): Address {
    let result = super.call("getAddressVars", [
      EthereumValue.fromFixedBytes(_data)
    ]);

    return result[0].toAddress();
  }

  try_getAddressVars(_data: Bytes): CallResult<Address> {
    let result = super.tryCall("getAddressVars", [
      EthereumValue.fromFixedBytes(_data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getAllDisputeVars(
    _disputeId: BigInt
  ): GettersContract__getAllDisputeVarsResult {
    let result = super.call("getAllDisputeVars", [
      EthereumValue.fromUnsignedBigInt(_disputeId)
    ]);

    return new GettersContract__getAllDisputeVarsResult(
      result[0].toBytes(),
      result[1].toBoolean(),
      result[2].toBoolean(),
      result[3].toBoolean(),
      result[4].toAddress(),
      result[5].toAddress(),
      result[6].toAddress(),
      result[7].toBigIntArray(),
      result[8].toBigInt()
    );
  }

  try_getAllDisputeVars(
    _disputeId: BigInt
  ): CallResult<GettersContract__getAllDisputeVarsResult> {
    let result = super.tryCall("getAllDisputeVars", [
      EthereumValue.fromUnsignedBigInt(_disputeId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new GettersContract__getAllDisputeVarsResult(
        value[0].toBytes(),
        value[1].toBoolean(),
        value[2].toBoolean(),
        value[3].toBoolean(),
        value[4].toAddress(),
        value[5].toAddress(),
        value[6].toAddress(),
        value[7].toBigIntArray(),
        value[8].toBigInt()
      )
    );
  }

  getCurrentVariables(): GettersContract__getCurrentVariablesResult {
    let result = super.call("getCurrentVariables", []);

    return new GettersContract__getCurrentVariablesResult(
      result[0].toBytes(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toString(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_getCurrentVariables(): CallResult<
    GettersContract__getCurrentVariablesResult
  > {
    let result = super.tryCall("getCurrentVariables", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new GettersContract__getCurrentVariablesResult(
        value[0].toBytes(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toString(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }

  getDisputeIdByDisputeHash(_hash: Bytes): BigInt {
    let result = super.call("getDisputeIdByDisputeHash", [
      EthereumValue.fromFixedBytes(_hash)
    ]);

    return result[0].toBigInt();
  }

  try_getDisputeIdByDisputeHash(_hash: Bytes): CallResult<BigInt> {
    let result = super.tryCall("getDisputeIdByDisputeHash", [
      EthereumValue.fromFixedBytes(_hash)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getDisputeUintVars(_disputeId: BigInt, _data: Bytes): BigInt {
    let result = super.call("getDisputeUintVars", [
      EthereumValue.fromUnsignedBigInt(_disputeId),
      EthereumValue.fromFixedBytes(_data)
    ]);

    return result[0].toBigInt();
  }

  try_getDisputeUintVars(_disputeId: BigInt, _data: Bytes): CallResult<BigInt> {
    let result = super.tryCall("getDisputeUintVars", [
      EthereumValue.fromUnsignedBigInt(_disputeId),
      EthereumValue.fromFixedBytes(_data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getLastNewValue(): GettersContract__getLastNewValueResult {
    let result = super.call("getLastNewValue", []);

    return new GettersContract__getLastNewValueResult(
      result[0].toBigInt(),
      result[1].toBoolean()
    );
  }

  try_getLastNewValue(): CallResult<GettersContract__getLastNewValueResult> {
    let result = super.tryCall("getLastNewValue", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new GettersContract__getLastNewValueResult(
        value[0].toBigInt(),
        value[1].toBoolean()
      )
    );
  }

  getLastNewValueById(
    _requestId: BigInt
  ): GettersContract__getLastNewValueByIdResult {
    let result = super.call("getLastNewValueById", [
      EthereumValue.fromUnsignedBigInt(_requestId)
    ]);

    return new GettersContract__getLastNewValueByIdResult(
      result[0].toBigInt(),
      result[1].toBoolean()
    );
  }

  try_getLastNewValueById(
    _requestId: BigInt
  ): CallResult<GettersContract__getLastNewValueByIdResult> {
    let result = super.tryCall("getLastNewValueById", [
      EthereumValue.fromUnsignedBigInt(_requestId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new GettersContract__getLastNewValueByIdResult(
        value[0].toBigInt(),
        value[1].toBoolean()
      )
    );
  }

  getMinedBlockNum(_requestId: BigInt, _timestamp: BigInt): BigInt {
    let result = super.call("getMinedBlockNum", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);

    return result[0].toBigInt();
  }

  try_getMinedBlockNum(
    _requestId: BigInt,
    _timestamp: BigInt
  ): CallResult<BigInt> {
    let result = super.tryCall("getMinedBlockNum", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getMinersByRequestIdAndTimestamp(
    _requestId: BigInt,
    _timestamp: BigInt
  ): Array<Address> {
    let result = super.call("getMinersByRequestIdAndTimestamp", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);

    return result[0].toAddressArray();
  }

  try_getMinersByRequestIdAndTimestamp(
    _requestId: BigInt,
    _timestamp: BigInt
  ): CallResult<Array<Address>> {
    let result = super.tryCall("getMinersByRequestIdAndTimestamp", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddressArray());
  }

  getName(): string {
    let result = super.call("getName", []);

    return result[0].toString();
  }

  try_getName(): CallResult<string> {
    let result = super.tryCall("getName", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  getNewValueCountbyRequestId(_requestId: BigInt): BigInt {
    let result = super.call("getNewValueCountbyRequestId", [
      EthereumValue.fromUnsignedBigInt(_requestId)
    ]);

    return result[0].toBigInt();
  }

  try_getNewValueCountbyRequestId(_requestId: BigInt): CallResult<BigInt> {
    let result = super.tryCall("getNewValueCountbyRequestId", [
      EthereumValue.fromUnsignedBigInt(_requestId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getRequestIdByRequestQIndex(_index: BigInt): BigInt {
    let result = super.call("getRequestIdByRequestQIndex", [
      EthereumValue.fromUnsignedBigInt(_index)
    ]);

    return result[0].toBigInt();
  }

  try_getRequestIdByRequestQIndex(_index: BigInt): CallResult<BigInt> {
    let result = super.tryCall("getRequestIdByRequestQIndex", [
      EthereumValue.fromUnsignedBigInt(_index)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getRequestIdByTimestamp(_timestamp: BigInt): BigInt {
    let result = super.call("getRequestIdByTimestamp", [
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);

    return result[0].toBigInt();
  }

  try_getRequestIdByTimestamp(_timestamp: BigInt): CallResult<BigInt> {
    let result = super.tryCall("getRequestIdByTimestamp", [
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getRequestIdByQueryHash(_request: Bytes): BigInt {
    let result = super.call("getRequestIdByQueryHash", [
      EthereumValue.fromFixedBytes(_request)
    ]);

    return result[0].toBigInt();
  }

  try_getRequestIdByQueryHash(_request: Bytes): CallResult<BigInt> {
    let result = super.tryCall("getRequestIdByQueryHash", [
      EthereumValue.fromFixedBytes(_request)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getRequestQ(): Array<BigInt> {
    let result = super.call("getRequestQ", []);

    return result[0].toBigIntArray();
  }

  try_getRequestQ(): CallResult<Array<BigInt>> {
    let result = super.tryCall("getRequestQ", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigIntArray());
  }

  getRequestUintVars(_requestId: BigInt, _data: Bytes): BigInt {
    let result = super.call("getRequestUintVars", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromFixedBytes(_data)
    ]);

    return result[0].toBigInt();
  }

  try_getRequestUintVars(_requestId: BigInt, _data: Bytes): CallResult<BigInt> {
    let result = super.tryCall("getRequestUintVars", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromFixedBytes(_data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getRequestVars(_requestId: BigInt): GettersContract__getRequestVarsResult {
    let result = super.call("getRequestVars", [
      EthereumValue.fromUnsignedBigInt(_requestId)
    ]);

    return new GettersContract__getRequestVarsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toBytes(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_getRequestVars(
    _requestId: BigInt
  ): CallResult<GettersContract__getRequestVarsResult> {
    let result = super.tryCall("getRequestVars", [
      EthereumValue.fromUnsignedBigInt(_requestId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new GettersContract__getRequestVarsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toBytes(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }

  getStakerInfo(_staker: Address): GettersContract__getStakerInfoResult {
    let result = super.call("getStakerInfo", [
      EthereumValue.fromAddress(_staker)
    ]);

    return new GettersContract__getStakerInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getStakerInfo(
    _staker: Address
  ): CallResult<GettersContract__getStakerInfoResult> {
    let result = super.tryCall("getStakerInfo", [
      EthereumValue.fromAddress(_staker)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new GettersContract__getStakerInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getSubmissionsByTimestamp(
    _requestId: BigInt,
    _timestamp: BigInt
  ): Array<BigInt> {
    let result = super.call("getSubmissionsByTimestamp", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);

    return result[0].toBigIntArray();
  }

  try_getSubmissionsByTimestamp(
    _requestId: BigInt,
    _timestamp: BigInt
  ): CallResult<Array<BigInt>> {
    let result = super.tryCall("getSubmissionsByTimestamp", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigIntArray());
  }

  getSymbol(): string {
    let result = super.call("getSymbol", []);

    return result[0].toString();
  }

  try_getSymbol(): CallResult<string> {
    let result = super.tryCall("getSymbol", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  getTimestampbyRequestIDandIndex(_requestID: BigInt, _index: BigInt): BigInt {
    let result = super.call("getTimestampbyRequestIDandIndex", [
      EthereumValue.fromUnsignedBigInt(_requestID),
      EthereumValue.fromUnsignedBigInt(_index)
    ]);

    return result[0].toBigInt();
  }

  try_getTimestampbyRequestIDandIndex(
    _requestID: BigInt,
    _index: BigInt
  ): CallResult<BigInt> {
    let result = super.tryCall("getTimestampbyRequestIDandIndex", [
      EthereumValue.fromUnsignedBigInt(_requestID),
      EthereumValue.fromUnsignedBigInt(_index)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getUintVar(_data: Bytes): BigInt {
    let result = super.call("getUintVar", [
      EthereumValue.fromFixedBytes(_data)
    ]);

    return result[0].toBigInt();
  }

  try_getUintVar(_data: Bytes): CallResult<BigInt> {
    let result = super.tryCall("getUintVar", [
      EthereumValue.fromFixedBytes(_data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getVariablesOnDeck(): GettersContract__getVariablesOnDeckResult {
    let result = super.call("getVariablesOnDeck", []);

    return new GettersContract__getVariablesOnDeckResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toString()
    );
  }

  try_getVariablesOnDeck(): CallResult<
    GettersContract__getVariablesOnDeckResult
  > {
    let result = super.tryCall("getVariablesOnDeck", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new GettersContract__getVariablesOnDeckResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toString()
      )
    );
  }

  isInDispute(_requestId: BigInt, _timestamp: BigInt): boolean {
    let result = super.call("isInDispute", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);

    return result[0].toBoolean();
  }

  try_isInDispute(_requestId: BigInt, _timestamp: BigInt): CallResult<boolean> {
    let result = super.tryCall("isInDispute", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  retrieveData(_requestId: BigInt, _timestamp: BigInt): BigInt {
    let result = super.call("retrieveData", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);

    return result[0].toBigInt();
  }

  try_retrieveData(_requestId: BigInt, _timestamp: BigInt): CallResult<BigInt> {
    let result = super.tryCall("retrieveData", [
      EthereumValue.fromUnsignedBigInt(_requestId),
      EthereumValue.fromUnsignedBigInt(_timestamp)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): CallResult<BigInt> {
    let result = super.tryCall("totalSupply", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}