import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
} from "@chakra-ui/react";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import CardGrids from "../grids/index";

const Tabular = ({ savedData, LikedData }) => {
  return (
    <Tabs variant="unstyled">
      <TabList justifyContent="center" gap="8rem" p={3}>
        <Tab
          _selected={{
            color: "white",
            borderBottom: "3px solid",
            borderColor: "brand.400",
          }}
          color="gray"
          fontSize="26px"
          fontWeight="bold"
          px={8}
          transition="0.3s"
        >
          <Icon as={FaRegBookmark} />
        </Tab>
        <Tab
          _selected={{
            color: "white",
            borderBottom: "3px solid",
            borderColor: "brand.400",
          }}
          color="gray"
          fontSize="26px"
          fontWeight="bold"
          px={8}
          transition="0.3s"
        >
          <Icon as={FaRegHeart} />
        </Tab>
      </TabList>

      <TabPanels p={6} borderRadius="lg" maxH={"50vh"} overflowY={"visible"}>
        <TabPanel>
          <CardGrids videos={savedData} />
        </TabPanel>
        <TabPanel>
          <CardGrids videos={LikedData} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Tabular;
