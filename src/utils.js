const company1 = {
    id: 0,
    name: 'company1',
    image: '',
}

const company2 = {
    id: 1,
    name: 'company2',
    image: '',
}


const company3 = {
    id: 2,
    name: 'company3',
    image: '',
}


export const categoriesWithCompanies = [
    {
        id: 0,
        name: 'Category1',
        companies: [company1, company3]
    },
    {
        id: 1,
        name: 'Category2',
        companies: [company2]
    },
    {
        id: 2,
        name: 'Category3',
        companies: [company3]
    },
    {
        id: 3,
        name: 'Category4',
        companies: [company1, company2, company3]
    },
    {
        id: 4,
        name: 'Category5',
        companies: []
    }
]