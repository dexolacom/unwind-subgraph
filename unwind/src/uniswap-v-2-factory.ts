import {
  PairCreated as PairCreatedEvent,
  UpdateUnwindXManager as UpdateUnwindXManagerEvent
} from "../generated/UniswapV2Factory/UniswapV2Factory"
import { PairCreated, UpdateUnwindXManager } from "../generated/schema"

export function handlePairCreated(event: PairCreatedEvent): void {
  let entity = new PairCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token0 = event.params.token0
  entity.token1 = event.params.token1
  entity.pair = event.params.pair
  entity.param3 = event.params.param3

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateUnwindXManager(
  event: UpdateUnwindXManagerEvent
): void {
  let entity = new UpdateUnwindXManager(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newUnwindXManager = event.params.newUnwindXManager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
