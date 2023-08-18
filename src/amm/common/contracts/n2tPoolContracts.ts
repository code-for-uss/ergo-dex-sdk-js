import {ErgoTree, HexString, RustModule} from "@ergolabs/ergo-sdk"
import * as crypto from "crypto-js"
import {PoolContracts} from "../../../contracts/poolContracts"
import {toHex} from "../../../utils/hex"
import {AmmPool} from "../entities/ammPool"
import * as N2T from "./n2tTemplates"

export function pool(): ErgoTree {
  return N2T.PoolSample
}

export function poolTemplateHash(): HexString {
  const template = RustModule.SigmaRust.ErgoTree.from_base16_bytes(N2T.PoolSample).template_bytes()
  return crypto.SHA256(crypto.enc.Hex.parse(toHex(template))).toString(crypto.enc.Hex)
}

export function poolBundle(): PoolContracts<AmmPool> {
  return {
    poolTree: pool(),
    poolTemplateHash: poolTemplateHash()
  }
}