import React, { PropTypes } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
import FeedItem from '../../components/FeedItem';

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}
const PerfilPage = ({

}) => {
  return (
    <div>
      <Tabs>
      <Tab label="Item One" >
        <div>
          <FeedItem
            title={"Nome de usuario"}
            subtitle={"Usuario criou o projeto"}
            iconElement={Audio}
            time={new Date()}
            imageSrc={"https://upload.wikimedia.org/wikipedia/pt/7/76/Random_Access_Memories_capa.jpg"}
            />
        </div>
      </Tab>
      <Tab label="Item Two" >
        <div>
          <h2 style={styles.headline}>Tab Two</h2>
          <p>
            This is another example tab.
          </p>
        </div>
      </Tab>
      <Tab
        label="onActive"
        data-route="/home"
      >
        <div>
          <h2 style={styles.headline}>Tab Three</h2>
          <p>
            This is a third example tab.
          </p>
        </div>
      </Tab>
    </Tabs>
    </div>
  )
}

export default PerfilPage
