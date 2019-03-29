import React from "react";

import "../styles/NavigationBar.css";

class NavigationBar extends React.Component {
  state = {
    mobileMenuIsActive: false
  };

  mobileMenuStateClick = () => {
    this.setState(prevState => ({
      mobileMenuIsActive: !prevState.mobileMenuIsActive
    }));
  };

  render() {
    return (
      <nav className="menu">
        <ul className="navigation">
          <li className="btn_nav" onClick={() => this.props.isNewGame(true)}>
            Nowa gra
          </li>
          <li className="btn_nav inactive">Zasady</li>
          {this.props.isDrawStarted && !this.props.areCardsOpened ? (
            <li className="btn_nav" onClick={this.props.startNewDraw}>
              Wróć
            </li>
          ) : (
            <li className="btn_nav inactive">Wróć</li>
          )}
        </ul>

        <span className="actual_user_name">{`Gracz ${this.props.activeUser +
          1}`}</span>

        {this.props.isDrawStarted && !this.props.areCardsOpened ? (
          <div className="undo_btn" onClick={this.props.startNewDraw}>
            <i className="fas fa-undo-alt" />
          </div>
        ) : (
          <div className="undo_btn inactive">
            <i className="fas fa-undo-alt" />
          </div>
        )}
        <div className="mobile_menu_btn" onClick={this.mobileMenuStateClick}>
          {this.state.mobileMenuIsActive ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </div>
        <div
          className={
            this.state.mobileMenuIsActive ? "menu_mobile active" : "menu_mobile"
          }
        >
          <ul className="navigation_mobile">
            <li
              className="btn_nav_mobile"
              onClick={() => this.props.isNewGame(true)}
            >
              Nowa gra
            </li>
            <li className="btn_nav_mobile">Zasady</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;

// const NavigationBar = props => {
//   const mobileMenu = () => {

//   };
//   return (
//     <nav className="menu">
//       <ul className="navigation">
//         <li className="btn_nav" onClick={() => props.isNewGame(true)}>
//           Nowa gra
//         </li>
//         <li className="btn_nav">Zasady</li>
//         {props.isDrawStarted && !props.areCardsOpened ? (
//           <li className="btn_nav" onClick={props.startNewDraw}>
//             Wróć
//           </li>
//         ) : (
//           <li className="btn_nav inactive">Wróć</li>
//         )}
//       </ul>
//       <span className="actual_user_name">{`Gracz ${props.activeUser +
//         1}`}</span>
//       <div className="mobile_menu_btn" onClick={mobileMenu}>
//         MENU
//       </div>
//       <div className="menu_mobile">
//         <ul className="navigation_mobile">
//           <li className="btn_nav_mobile" onClick={() => props.isNewGame(true)}>
//             Nowa gra
//           </li>
//           <li className="btn_nav_mobile">Zasady</li>
//           {props.isDrawStarted && !props.areCardsOpened ? (
//             <li className="btn_nav_mobile" onClick={props.startNewDraw}>
//               Wróć
//             </li>
//           ) : (
//             <li className="btn_nav_mobile inactive">Wróć</li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;
