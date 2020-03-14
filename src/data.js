import dress1 from './images/women/rental/dresses/woman-1/SLR24.jpg';
import dress1_1 from './images/women/rental/dresses/woman-1/SLR24-1.jpg';
import dress1_2 from './images/women/rental/dresses/woman-1/SLR24-2.jpg';
import dress1_3 from './images/women/rental/dresses/woman-1/SLR24-3.jpg';
import dress2 from './images/women/rental/dresses/woman-2/FEA7.jpg';
import dress2_1 from './images/women/rental/dresses/woman-2/FEA7-1.jpg';
import dress2_2 from './images/women/rental/dresses/woman-2/FEA7-2.jpg';
import dress2_3 from './images/women/rental/dresses/woman-2/FEA7-3.jpg';
import dress3 from './images/women/rental/dresses/woman-3/RMB74.jpg';
import dress3_1 from './images/women/rental/dresses/woman-3/RMB74-1.jpg';
import dress3_2 from './images/women/rental/dresses/woman-3/RMB74-2.jpg';
import dress4 from './images/women/rental/dresses/woman-4/DTP67.jpg';
import dress4_1 from './images/women/rental/dresses/woman-4/DTP67-1.jpg';
import dress4_2 from './images/women/rental/dresses/woman-4/DTP67-2.jpg';
import dress4_3 from './images/women/rental/dresses/woman-4/DTP67-3.jpg';
import dress5 from './images/women/rental/dresses/woman-5/CD53.jpg';
import dress5_1 from './images/women/rental/dresses/woman-5/CD53-1.jpg';
import dress5_2 from './images/women/rental/dresses/woman-5/CD53-2.jpg';
import dress5_3 from './images/women/rental/dresses/woman-5/CD53-3.jpg';
import dress6 from './images/women/rental/dresses/woman-6/PK419.jpg';
import dress6_1 from './images/women/rental/dresses/woman-6/PK419-1.jpg';
import dress6_2 from './images/women/rental/dresses/woman-6/PK419-2.jpg';
import dress6_3 from './images/women/rental/dresses/woman-6/PK419-3.jpg';




export default [
    {
        sys: {
            id: "1"
          },
        fields: {
        name: 'Fancy Lace',
        type: 'jacket',
        color: 'black',
        print: 'lace',
        price: 15,
        phrase: 'fancy-lace',
        size: 'M',
        new: true,
        images: [
            {
              fields: {
                file: {
                  url: dress1
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress1_1
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress1_2
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress1_3
                }
              }
            }
          ]
        }
    },
    {
        sys: {
            id: "2"
          },
          fields: {
        name: 'Jacquard Lady',
        type: 'dress',
        color: 'black',
        print: 'jacquard',
        price: 25,
        phrase: 'jacquard-lady',
        size: 'L',
        new: false,
        images: [
            {
              fields: {
                file: {
                  url: dress2
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress2_1
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress2_2
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress2_3
                }
              }
            }
          ]
        }
    },
    {
        sys: {
            id: "3"
          },
          fields: {
        name: 'Velvet Party',
        type: 'dress',
        color: 'burgundy',
        print: 'velvet',
        price: 10,
        phrase: 'velvet-party',
        size: 'M',
        new: false,
        images: [
            {
              fields: {
                file: {
                  url: dress3
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress3_1
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress3_2
                }
              }
            },
          ]
        }
    },
    {
        sys: {
            id: "4"
          },
          fields: {
        name: 'Sequin Light',
        type: 'dress',
        color: 'white',
        print: 'sequin',
        price: 14,
        phrase: 'sequin-light',
        size: 'S',
        new: true,
        images: [
            {
              fields: {
                file: {
                  url: dress4
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress4_1
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress4_2
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress4_3
                }
              }
            }
          ]
        }
    },
    {
        sys: {
            id: "5"
          },
          fields: {
        name: 'Metallic Goddess',
        type: 'dress',
        color: 'silver',
        print: 'metallic',
        price: 20,
        phrase: 'metallic goddess',
        size: 'L',
        new: false,
        images: [
            {
              fields: {
                file: {
                  url: dress5
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress5_1
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress5_2
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress5_3
                }
              }
            }
          ]
        }

    },
    {
        sys: {
            id: "6"
          },
          fields: {
        name: 'Simple Floral',
        type: 'dress',
        color: 'red',
        print: 'floral',
        price: 7,
        phrase: 'simple-floral',
        size: 'S',
        new: true,
        images: [
            {
              fields: {
                file: {
                  url: dress6
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress6_1
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress6_2
                }
              }
            },
            {
              fields: {
                file: {
                  url: dress6_3
                }
              }
            }
          ]
        }

    }
]