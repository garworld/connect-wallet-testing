import Styled from 'styled-components';

const StyledContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLayout = Styled.div`
  max-width: ${(props) => (props.width <= 850 ? 430 : props.width)}px;
  width: 100%;
  background:
    url(${(props) => (props.width <= 850 ? props.svgbackgroundMobile : props.svgbackground)}) no-repeat center${(props) => (props.width <= 850 ? null : '/cover')},
    var(--app-bg);
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  padding-bottom: ${(props) => (props.withPaddingBottom ? '20px' : 'none')};
  position: relative;
  z-index: 1;

  &::-webkit-scrollbar {
      display: none;
    }

    .bubble {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;

        img {
            position: absolute;
            width:${(props) => (props.width <= 850 ? 5 : 1.5)}%;
        }

        ${(props) =>
          props.width > 850 &&
          `
            .logo-1 {
            margin-left: 1358px;
            margin-top: 523px;
        }

        .logo-8 {
            margin-left: 480px;
            margin-top: 76px;
        }

        .logo-6 {
            margin-left: 1270px;
            margin-top: 194px;
        }

        .logo-9 {
            margin-left: 152px;
            margin-top: 258px;
        }
        
        .logo-3 {
            margin-left: 172px;
            margin-top: 639px;
        }

        .logo-10 {
            margin-left: 1338px;
            margin-top: 624px;
        }
            `}

        ${(props) =>
          props.width <= 850 &&
          `
            .logo-9 {
            margin-left: 30px;
            margin-top: 220px;
        }
        
        .logo-3 {
            margin-left: 15%;
            margin-top: 120%;
        }

        .logo-10 {
            margin-left: 90%;
            margin-top: 60%;
        }
          `}

        
    }

`;

const StyledNavbar = Styled.div`
    width: 100%;
    height: ${(props) => (props.width <= 850 ? 60 : 100)}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => (props.width <= 850 ? '16px' : '33px 70px 33px 70px')};
    color: white;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    position: relative;
    z-index: 3;
    ${(props) =>
      props.width <= 850 &&
      `
        border-bottom: 1px solid rgba(255, 255, 255, 0.30);
        background: linear-gradient(180deg, #FFF -170.83%, rgba(255, 255, 255, 0.00) 115.83%);
        box-shadow: 0px 4px 24px 0px #45BCD9;
        backdrop-filter: blur(17px);
        border-radius: 0px 0px 30px 30px;
    `}

    .navbar-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        height: 100%;

        button {
            background-color: var(--blue);
            color: white;
            border-radius: 40px;
            outline: none;
            border: none;
            padding: 12px 20px;
        }

        .button-connected {
            display: flex;
            gap: 10px;
            justify-content: space-between;
            align-items: center;
        }

        .connected {
            border-radius: 40px;
            border: 1px solid #FFF;
            background: rgba(0, 74, 173, 0.30);
        }
    }

    .connect-button {
        width: 30px;
        height: 30px;
        background-color: var(--blue);
        border-radius: 50%;
        padding: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const StyledConnectWallet = Styled.div`
    width: 100%;
    height: 100%;
    padding-top: ${(props) => (props.mode === 'claim' ? '350px' : props.width <= 850 ? '40px' : '62px')};
    position: relative;
    z-index: 2;

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFF;
        gap: 130px;
        
        .big-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 14px;
            padding: 0px 80px;

            .main-title {
                font-family: Montserrat;
                font-size: ${(props) => (props.width <= 850 ? 34 : 50)}px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                text-align: center;

                span {
                    background: linear-gradient(251deg, #35a1cc 3.43%, #004AAD 62.56%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
            }

            .sub-title {
                color: rgba(255, 255, 255, 0.60);
                text-align: center;
                font-family: Montserrat;
                font-size: ${(props) => (props.width <= 850 ? 16 : 20)}px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }

        .union-group {
            height: 200px;
            max-width: ${(props) => (props.mode === 'claim' ? '100vw' : '80vw')};
            width: 100%;
            position: relative;
            display: flex;
            flex-direction-column;
            justify-content: center;
            align-items: center;

            .traps {
                max-width: 630px;
                width: 100%;
                height: 180px;
                background-image: 
                url(${(props) => props.union});
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                position: absolute;
                top: ${(props) => (props.width <= 850 ? -40 : 0)}px;
            }

            .border {
                max-width: 630px;
                width: 100%;
                height: 300px;
                background-image: 
                url(${(props) => props.groupImage});
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                position: absolute;
                top: ${(props) => (props.width <= 850 ? (props.mode === 'claim' ? 70 : -90) : -30)}px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0px 75px;
               
            }

            .subtract {
                max-width: 480px;
                width: ${(props) => (props.width <= 850 ? '80%' : '100%')};
                height: ${(props) => (props.width <= 850 ? 70 : 180)}px;
                background-image: 
                url(${(props) => props.subtract});
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                position: absolute;
                top: ${(props) => (props.width <= 850 ? 75 : 112)}px;
            }

            .ellipse {
                width: ${(props) => (props.mode === 'switch' ? (props.width <= 850 ? '35%' : '100%') : '100%')};
                height: ${(props) => (props.mode === 'switch' ? '150px' : props.width <= 850 ? '170px' : '240px')};
                background-image: 
                url(${(props) => (props.mode === 'switch' ? props.redEllipse : props.ellipse)});
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                position: absolute;
                top: ${(props) => (props.width <= 850 ? (props.mode === 'switch' ? -95 : -105) : props.mode === 'switch' ? -90 : -135)}px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: ${(props) => (props.width <= 850 ? 50 : 70)}px;
                }
            }

            .warning {
                position: absolute;
                top: 100px;
                font-family: Montserrat;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                display: flex;
                align-items: center;
                text-align: center;
                gap: 14px;
                ${(props) =>
                  props.width <= 850 &&
                  ` padding: 50px 50px 0px 50px;
                    font-size: 12px;
                    font-weight: 500;
                    flex-direction: column;`}

                .icon {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background-color: #AA02024D;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            .connect-button {
                position: relative;
                top: ${(props) => (props.width <= 850 ? 20 : 45)}px;
                max-width: ${(props) => (props.width <= 850 ? 190 : 340)}px;
                width: 100%;
                height: ${(props) => (props.width <= 850 ? 37 : 50)}px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                padding: ${(props) => (props.width <= 850 ? '0px 0px' : '26px 0px')};
                border-radius: 1000px;
                background: linear-gradient(180deg, #5CDFE5 0%, #004AAD 128.64%);
                border: 2px solid #87EEFF;
                box-shadow: 0px 3px 54px 5px rgba(0, 0, 0, 0.25);
                border-radius: 1000px;
                font-family: Montserrat;
                font-size: ${(props) => (props.width <= 850 ? 12 : 20)}px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;

                img {
                    width: ${(props) => (props.width <= 850 ? 12 : 14)}px;
                    height: ${(props) => (props.width <= 850 ? 12 : 14)}px;
                }
            }

            .switch-button {
                position: relative;
                top: ${(props) => (props.width <= 850 ? 20 : 45)}px;
                max-width: ${(props) => (props.width <= 850 ? 190 : 340)}px;
                width: 100%;
                height: ${(props) => (props.width <= 850 ? 35 : 50)}px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 14px;
                padding: ${(props) => (props.width <= 850 ? '0px 0px' : '26px 0px')};
                border: 2px solid #87EEFF;
                background: linear-gradient(180deg, #5C6CE5 0%, #CA1989 148.28%);
                box-shadow: 0px 3px 54px 5px rgba(0, 0, 0, 0.25);
                border-radius: 1000px;
                font-family: Montserrat;
                font-size: ${(props) => (props.width <= 850 ? 12 : 20)}px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;

                img {
                    width: 14px;
                    height: 14px;
                }

                .icon {
                    display: flex;
                }
            }

            .claim-button {
                position: absolute;
                top: ${(props) => (props.width <= 850 ? 160 : 170)}px;
                max-width: ${(props) => (props.width <= 850 ? 190 : 340)}px;
                width: 100%;
                height: ${(props) => (props.width <= 850 ? 37 : 50)}px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 14px;
                padding: ${(props) => (props.width <= 850 ? '0px 0px' : '26px 0px')};
                border: 2px solid #87EEFF;
                background: linear-gradient(180deg, #6BD865 -9.95%, #058B67 100.4%);
                box-shadow: 0px 3px 54px 5px rgba(0, 0, 0, 0.25);
                border-radius: 1000px;
                font-family: Montserrat;
                font-size: ${(props) => (props.width <= 850 ? 12 : 20)}px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
            }

            .outer-board {
                position: absolute;
                top: ${(props) => (props.width <= 850 ? -310 : -320)}px;
                max-width: ${(props) => (props.width <= 850 ? 100 : 70)}%;
                width: 100%;
                height: ${(props) => (props.width <= 850 ? '530px' : '460px')};
                border-radius: 40px 40px 80px 80px;
                border: 11px solid rgba(255, 255, 255, 0.50);
                background: linear-gradient(180deg, rgba(255, 255, 255, 0.50) 9.22%, rgba(255, 255, 255, 0.10) 108.74%);
                backdrop-filter: blur(45px);
                display: flex;
                justify-content: center;
                align-items: center;
                padding: ${(props) => (props.width <= 850 ? 10 : 26)}px;

                .header {
                    position: absolute;
                    top: ${(props) => (props.width <= 850 ? -20 : 25)}px;
                    max-width: ${(props) => (props.width <= 850 ? 300 : 700)}px;
                    width: 100%;
                    height: 140px;
                    background-image: 
                    url(${(props) => props.header});
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding-top: 20px;
                    gap: ${(props) => (props.width <= 850 ? 3 : 10)}px;

                    .ellipse-logo {
                        position: absolute;
                        top: ${(props) => (props.width <= 850 ? -30 : -70)}px;
                        max-width: ${(props) => (props.width <= 850 ? 60 : 110)}px;
                        width: 100%;
                        height: 100px;
                        background-image: 
                        url(${(props) => (props.width <= 850 ? props.claimEllipseMobile : props.claimEllipse)});
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        img {
                            width: ${(props) => (props.width <= 850 ? 30 : 50)}px;
                        }
                    }

                     .eligible {
                        font-family: Montserrat;
                        font-size: ${(props) => (props.width <= 850 ? 14 : 18)}px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: normal;
                    }

                    .amount {
                        font-size: ${(props) => (props.width <= 850 ? 20 : 36)}px;
                        font-weight: 700;
                        background: linear-gradient(142deg, #5CDFE5 23.57%, #B4CBFF 99.95%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }

                .inner-board {
                    width: 100%;
                    height: 100%;
                    border-radius: 40px 40px 50px 50px;
                    background: #002F6E;
                    box-shadow: 0px -11px 46px 0px #022047 inset;
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    align-items: center;
                    padding: 20px;
                    gap: 15px;

                    .task-box {
                        width: 100%;
                        height: ${(props) => (props.width <= 850 ? 350 : 150)}px;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr); /* Default: 3 kolom */
                        gap: 15px; /* Jarak antar kotak */

                        ${(props) =>
                          props.width <= 850 &&
                          `
                            grid-template-columns: repeat(2, 1fr); /* Ubah menjadi 2 kolom */
                            overflow-y: auto; /* Aktifkan scroll vertikal */
                            &::-webkit-scrollbar {
                            width: 1px; /* Atur lebar scrollbar */
                            }
                        `}
                        }

                       .task {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            padding: 15px;
                            flex-direction: column;
                            justify-content: space-between;
                            border-radius: 20px;
                            border: 4px solid #013274;
                            background: rgba(217, 217, 217, 0.10);
                            ${(props) =>
                              props.width > 850 &&
                              `
                                 overflow: auto;
                                &::-webkit-scrollbar {
                                display: none;
                                }
                                `}
                            ${(props) =>
                              props.width <= 850 &&
                              `
                                flex-direction: row;
                                gap: 40px;
                             `}

                            .task-title {
                                font-size: 12px;
                                font-style: normal;
                                font-weight: 500;
                                line-height: 24px;
                            }

                            .task-amount {
                                font-weight: 700;
                                font-size: 18px;
                                ${(props) =>
                                  props.width <= 850 &&
                                  `
                                display: flex;
                                flex-direction: column;
                                justify-content: right;
                                font-size: 16px;
                                `} 

                                span {
                                    color: rgba(255, 255, 255, 0.65);
                                }
                            }
                       }
                    }
                }
            }
        }
    }

`;

const StyledDropdown = Styled.div`
    position: relative;
    z-index: 3;
    ${(props) =>
      props.width <= 850 &&
      `
        width: 100%;
        `}

    button {
        background-color: var(--blue);
        color: white;
        border-radius: 40px;
        outline: none;
        border: none;
        padding: 12px 20px;
        ${(props) =>
          props.width <= 850 &&
          `
        width: 100%;
        padding: 18px 30px;
        `}
    }

    .button-connected {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
    }

    .connected {
        border-radius: 40px;
        border: 1px solid #FFF;
        background: rgba(0, 74, 173, 0.30);
    }

    .button-trigger {
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 14px;
        font-weight: 500;
        width: 180px;

        img {
        width: 20px;
        border-radius: 50%;
        }

        .down-arrow {
        width: 18px;
        transition: transform 0.2s ease-in-out;
        }

        .down-arrow.rotated {
        transform: rotate(180deg);
        }
    }

    .dropdown-wrapper {
        position: absolute;
    }

    ul {
        width: 150px;
        background: #75e0e6;
        color: white;
        list-style: none;
        margin: 0;
        font-size: 12px;
        overflow: hidden;
        height: 0px;
        transition: height 0.3s ease;
        padding: 0;
        margin-top: 4px;
        border-radius: 10px;
        border: white;
    }

    ul.active {
        border: white;
        height: auto;
        overflow: auto;
        padding: 4px 0px;

        &::-webkit-scrollbar {
        display: none;
        }
    }

    li {
    padding: 4px 4px 4px 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    cursor: pointer;
    padding: 4px 8px;
    
    img {
      width: 12px;
      border-radius: 50%;
    }
  }

  li:hover {
    font-size: 12px;
    cursor: pointer;
    font-weight: 600;
    color: gray;
  }
`;

const StyledOptionMenu = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${(props) => (props.height ? props.height : '100vh')};
    outline: none;
    transition: height 1s;
    transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    color: white;

    .content {
        height: 65vh;
        width: 100%;
        border-radius: 0px 0px 30px 30px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.30);
        background: linear-gradient(180deg, #FFF -255.73%, rgba(255, 255, 255, 0.00) 124.06%);
        backdrop-filter: blur(17px);
        display: flex;
        padding: 165px 35px 75px 35px;
        flex-direction: column;
        justify-content: flex-end;
        gap: 60px;
        align-items: center;

        img {
            width: 120px;
        }

        .options {
            display: flex;
            width: 290px;
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;

            .item {
                display: flex;
                padding: 18px 30px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                align-self: stretch;
                border-radius: 30px;
                border: 1px solid #FFF;
            }
        }
    }

    .close {
        width: 100%;
        height: 35vh;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
    }
`;

export {
  StyledContainer,
  StyledLayout,
  StyledNavbar,
  StyledConnectWallet,
  StyledDropdown,
  StyledOptionMenu,
};
