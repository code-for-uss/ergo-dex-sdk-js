import {ErgoTree, HexString} from "@ergolabs/ergo-sdk"
import {PoolContracts} from "../../contracts/poolContracts"
import {LmPool} from "../entities/lmPool"

export function pool(): ErgoTree {
  return (
    "19ec05240400040004020402040404040406040604080408040404020400040004020402" +
    "0400040a050005000404040204020e2074aeba0675c10c7fff46d3aa5e5a8efc55f0b0d8" +
    "7393dcb2f4b0a04be213cecb040004020500040204020406050005000402050205000500" +
    "d81ed601b2a5730000d602db63087201d603db6308a7d604b27203730100d605e4c6a704" +
    "10d606e4c6a70505d607e4c6a70605d608b27202730200d609b27203730300d60ab27202" +
    "730400d60bb27203730500d60cb27202730600d60db27203730700d60e8c720d01d60fb2" +
    "7202730800d610b27203730900d6118c721001d6128c720b02d613998c720a027212d614" +
    "8c720902d615b27205730a00d6169a99a37215730bd617b27205730c00d6189d72167217" +
    "d61995919e72167217730d9a7218730e7218d61ab27205730f00d61b7e721a05d61c9d72" +
    "06721bd61d998c720c028c720d02d61e998c720f028c721002d1ededededed93b2720273" +
    "10007204ededed93e4c672010410720593e4c672010505720693e4c6720106057207928c" +
    "c77201018cc7a70193c27201c2a7ededed938c7208018c720901938c720a018c720b0193" +
    "8c720c01720e938c720f01721193b172027311959172137312d802d61f9c721399721ba2" +
    "73137e721905d620b2a5731400ededed929a997206721472079c7e9995907219721a7219" +
    "9a721a7315731605721c937213f0721d93721ff0721eedededed93cbc272207317938602" +
    "720e7213b2db630872207318009386027211721fb2db63087220731900e6c67220040893" +
    "e4c67220050e8c720401958f7213731aededec929a997206721472079c7e999590721972" +
    "1a72199a721a731b731c05721c92a39a9a72159c721a7217b27205731d0093721df07213" +
    "92721e95917219721a731e9c721d99721ba2731f7e721905d801d61fe4c672010704eded" +
    "eded90721f9972197320909972149c7e99721a721f05721c9a721c7207907ef0998c7208" +
    "027214069d9c7e721c067e721e067e997212732106937213732293721d7323"
  )
}

export function managedPool(): ErgoTree {
  return '19c0062904000400040204020404040404060406040804080404040204000400040204020601010400040a050005000404040204020e202045638fde5b28db0f08d3ebe28663bc21333348cd7679e11500931a7f9070900400040205000402040204060500050005feffffffffffffffff010502050005000402050005000100d820d601b2a5730000d602db63087201d603db6308a7d604b27203730100d605e4c6a70410d606e4c6a70505d607e4c6a70605d608b27202730200d609b27203730300d60ab27202730400d60bb27203730500d60cb27202730600d60db27203730700d60e8c720d01d60fb27202730800d610b27203730900d6118c721001d6128c720b02d613998c720a027212d6148c720902d615b27205730a00d6169a99a37215730bd617b27205730c00d6189d72167217d61995919e72167217730d9a7218730e7218d61ab27205730f00d61b7e721a05d61c9d7206721bd61d998c720c028c720d02d61e8c721002d61f998c720f02721ed6207310d1ededededed93b272027311007204ededed93e4c672010410720593e4c672010505720693e4c6720106057207928cc77201018cc7a70193c27201c2a7ededed938c7208018c720901938c720a018c720b01938c720c01720e938c720f01721193b172027312959172137313d802d6219c721399721ba273147e721905d622b2a5731500ededed929a997206721472079c7e9995907219721a72199a721a7316731705721c937213f0721d937221f0721fedededed93cbc272227318938602720e7213b2db6308722273190093860272117221b2db63087222731a00e6c67222060893e4c67222070e8c720401958f7213731bededec929a997206721472079c7e9995907219721a72199a721a731c731d05721c92a39a9a72159c721a7217b27205731e0093721df0721392721f95917219721a731f9c721d99721ba273207e721905d804d621e4c672010704d62299721a7221d6237e722205d62499997321721e9c9972127322722395ed917224732391721f7324edededed9072219972197325909972149c7223721c9a721c7207907ef0998c7208027214069a9d9c99997e7214069d9c7e7206067e7222067e721a0672207e721f067e7224067220937213732693721d73277328';

}

export function managedPoolTemplateHash(): HexString {
  return "c8bedd88ad0d833127b0e942495b430db1cd6ab94548c312c22c839016b785c1"
}

export function managedPoolBundle(): PoolContracts<LmPool> {
  return {
    poolTree: managedPool(),
    poolTemplateHash: managedPoolTemplateHash()
  }
}
