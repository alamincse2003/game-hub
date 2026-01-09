import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (isLoading) {
    return (
      <Box textAlign="center">
        <Spinner />
      </Box>
    );
  }

  if (error) return null;

  return (
    <>
      <Menu>
        <MenuButton>
          <Button rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || "Platforms"}
          </Button>
        </MenuButton>

        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
