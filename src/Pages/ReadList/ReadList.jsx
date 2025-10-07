import Container from "../../Components/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReadList = () => {
  return (
    <>
      <div className="my-5">
        <Container>
          <Tabs>
            <TabList>
              <Tab>Read book list</Tab>
              <Tab>My wish list</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default ReadList;
