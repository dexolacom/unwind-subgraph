import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  PairCreated,
  UpdateUnwindXManager
} from "../generated/UniswapV2Factory/UniswapV2Factory"

export function createPairCreatedEvent(
  token0: Address,
  token1: Address,
  pair: Address,
  param3: BigInt
): PairCreated {
  let pairCreatedEvent = changetype<PairCreated>(newMockEvent())

  pairCreatedEvent.parameters = new Array()

  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("param3", ethereum.Value.fromUnsignedBigInt(param3))
  )

  return pairCreatedEvent
}

export function createUpdateUnwindXManagerEvent(
  newUnwindXManager: Address
): UpdateUnwindXManager {
  let updateUnwindXManagerEvent = changetype<UpdateUnwindXManager>(
    newMockEvent()
  )

  updateUnwindXManagerEvent.parameters = new Array()

  updateUnwindXManagerEvent.parameters.push(
    new ethereum.EventParam(
      "newUnwindXManager",
      ethereum.Value.fromAddress(newUnwindXManager)
    )
  )

  return updateUnwindXManagerEvent
}
