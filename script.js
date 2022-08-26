// Data for table
const dataExample = [
    {
        company: 'Alfreds <b>Futterkiste</b>',
        chef: 'Maria Anders',
        country: 'Germany',
        url: 'https://en.wikipedia.org/wiki/Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        chef: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        chef: 'Roland Mendel',
        country: 'Austria',
    },
    {
        company: 'Island Trading',
        chef: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        chef: 'Yoshi Tannamuri',
        country: 'Canada',
    }
];


//Atributes for colums of table

const tableAttributes =  {
    'company': {
        'label': 'Компания',
        'src': 'html',
    },
    'chef': {
        'label': 'Директор',
    },
    'country': {
        'label': 'Страна',
        'value': (data) => {
            if (data['country'] === 'Germany') {
                return `<a href="${data['url']}" target="_blank">${data['country']}</a>`
            }
            return data['country'];
        }
    }
};




// Create new grid view with all parameter and atributes

let gridView = new GridView();
gridView.header = 'Table of partner copanies!';
gridView.element = '.out-1';
gridView.headerClass = ['heder'];
gridView.tableClass = ['table'];
gridView.attribute = tableAttributes;
gridView.data = dataExample;
gridView.render();
