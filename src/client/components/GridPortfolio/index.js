import React, { PropTypes } from 'react'
import PortfolioCard from '@components/PortfolioCard';
import { CSSGrid, makeResponsive } from 'react-stonecutter';

const Grid = makeResponsive(CSSGrid, { maxWidth: 900 });

class GridPortfolio extends React.Component {
  static propTypes = {
    portfolios: PropTypes.array,
  }

  render() {
    const {
      portfolios,
    } = this.props

    return (
      <Grid
        style={{ margin: 'auto' }}
        component="div"
        columnWidth={200}
        gutterWidth={20}
        gutterHeight={20}
        itemHeight={326}
        duration={200}
        easing="ease-out"
      >
        {
          portfolios.map((portfolio, i) => (
            <div style={{ width: 200 }} key={i}>
              <PortfolioCard
                {...portfolio}
              />
            </div>
          ))
        }
      </Grid>
    )
  }
}


export default GridPortfolio
