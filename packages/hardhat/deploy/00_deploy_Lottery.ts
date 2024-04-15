import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployLottery: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("Lottery", {
    from: deployer,
    log: true,
    args: ["Token", "TKN", 10n, 1n, 1n],
    autoMine: true,
  });
};

export default deployLottery;

deployLottery.tags = ["Lottery"];
