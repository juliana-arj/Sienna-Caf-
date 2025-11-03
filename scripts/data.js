const PRODUCTS = {
    hotCoffees: [
        {
            id: 'macchiato',
            name: 'Macchiato',
            price: 12.9,
            image: 'assets/macchiato.jpg',
            description: 'Espresso intenso, suavizado com uma delicada camada de espuma cremosa.',
            ingredients: ['Café espresso', 'Espuma de leite', 'Açúcar mascavo']
        },
        {
            id: 'americano',
            name: 'Americano',
            price: 12.5,
            image: 'assets/americano.jpg',
            description: 'Espresso diluído, leve e suave, ideal para quem prefere um café mais longo.',
            ingredients: ['Café espresso', 'Água quente']
        },
        {
            id: 'chai-latte',
            name: 'Chai Latte',
            price: 16.9,
            image: 'assets/chailatte.jpg',
            description: 'Aromático e envolvente, com especiarias que aquecem e confortam em cada gole.',
            ingredients: ['Chá preto', 'Leite vaporizado', 'Canela em pó', 'Açúcar mascavo']
        },
        {
            id: 'match-latte',
            name: 'Matcha Latte',
            price: 16.9,
            image: 'assets/matchalatte.jpg',
            description: 'Cremoso e levemente adocicado, combina a suavidade do leite com a energia do matcha.',
            ingredients: ['Chá verde matcha', 'Leite vaporizado', 'Mel']
        }
    ],
    coldCoffees: [
        {
            id: 'iced-latte',
            name: 'Iced Latte',
            price: 14.90,
            image: 'assets/icedlatte.jpg',
            description: 'Café gelado e cremoso, refrescante e equilibrado para qualquer momento do dia.',
            ingredients: ['Café espresso', 'Leite gelado', 'Gelo', 'Açúcar demerara']
        },
        {
            id: 'iced-black',
            name: 'Iced Black',
            price: 12.50,
            image: 'assets/icedblack.jpg',
            description: 'Café preto gelado, intenso e revigorante, com final refrescante.',
            ingredients: ['Café espresso duplo', 'Água gelada', 'Gelo']
        },
        {
            id: 'iced-matcha',
            name: 'Matcha Iced Latte',
            price: 17.50,
            image: 'assets/matchaicedlatte.jpg',
            description: 'Refrescante e levemente herbal, perfeito para os amantes do matcha em dias quentes.',
            ingredients: ['Chá verde matcha', 'Leite gelado', 'Gelo', 'Xarope de baunilha']
        },
        {
            id: 'iced-chocolate',
            name: 'Iced Chocolate',
            price: 16.50,
            image: 'assets/icedchocolat.jpg',
            description: 'Chocolate gelado, cremoso e irresistível, com sabor intenso e refrescante.',
            ingredients: ['Leite gelado', 'Gelo', 'Calda de chocolate meio amargo', 'Chantilly']
        },
        {
            id: 'ichigo-matcha',
            name: 'Ichigo Matcha',
            price: 19.50,
            image: 'assets/ichigomatcha.jpg',
            description: 'Combinação única do herbal matcha com a doçura e frescor dos morangos.',
            ingredients: ['Chá verde matcha', 'Leite gelado', 'Gelo', 'Morango natural', 'Chantilly']
        }
    ],
    breads: [
        {
            id: 'croissant-tradicional',
            name: 'Croissant Tradicional',
            price: 15.50,
            image: 'assets/croissant.jpg',
            description: 'Delicioso croissant tradicional francês, feito com massa folhada artesanal e assado na perfeição. Crocante por fora e macio por dentro.',
            ingredients: ['Farinha de trigo', 'Manteiga', 'Leite', 'Ovos', 'Açúcar', 'Sal', 'Fermento']
        },
        {
            id: 'croissant-queijo',
            name: 'Croissant com Muçarela',
            price: 19.50,
            image: 'assets/croisssantmussarela.jpg',
            description: 'Um croissant dourado e leve, com recheio derretido de muçarela que traz sabor suave e irresistível.',
            ingredients: ['Farinha de trigo', 'Água', 'Sal', 'Fermento biológico', 'Massa folhada', 'Muçarela']
        },
        {
            id: 'croissant-doce',
            name: 'Croissant Doce',
            price: 26.90,
            image: 'assets/croissant.jpg',
            description: 'Massa crocante e amanteigada combinada ao doce do mel, cremosidade da ricota e o toque crocante das amêndoas.',
            ingredients: ['Massa folhada de croissant', 'Creme de ricota', 'Mel', 'Amêndoas laminadas']
        }
    ],
    desserts: [
        {
            id: 'brownie',
            name: 'Brownie',
            price: 9.90,
            image: 'assets/brownie.jpg',
            description: 'Brownie úmido e intenso em chocolate, com textura macia e sabor marcante.',
            ingredients: ['Chocolate meio amargo', 'Farinha de trigo', 'Açúcar', 'Ovos', 'Manteiga', 'Cacau em pó']
        },
        {
            id: 'cookie-tradicional',
            name: 'Cookie Tradicional',
            price: 6.50,
            image: 'assets/cookie.jpg',
            description: 'Cookie crocante com gotas de chocolate, assado na medida certa.',
            ingredients: ['Farinha de trigo', 'Chocolate chips', 'Manteiga', 'Açúcar mascavo', 'Ovos']
        },
        {
            id: 'brigadeiro',
            name: 'Brigadeiro',
            price: 6.50,
            image: 'assets/brigadeiro.jpg',
            description: 'Clássico brasileiro, cremoso e doce na medida certa, enrolado no granulado crocante.',
            ingredients: ['leite condensado', 'Chocolate em pó 50%', 'Manteiga', 'granulado de chocolate']
        }
    ],
    breakfast: [
        {
            id: 'misto-quente',
            name: 'Misto Quente',
            price: 13.90,
            image: 'assets/mistoquente.jpg',
            description: 'Combinação clássica de queijo derretido e presunto, no pão macio e tostado na medida certa.',
            ingredients: ['Pão de forma', 'Presunto', 'Queijo mussarela', 'Manteiga']
        },
        {
            id: 'queijo-quente',
            name: 'Queijo Quente',
            price: 13.50,
            image: 'assets/queijoquente.jpg',
            description: 'Pão dourado na chapa e recheio de queijo derretido, simples e cheio de sabor caseiro.',
            ingredients: ['Pão de forma', 'Queijo mussarela', 'Manteiga']
        },
        {
            id: 'pao-de-queijo',
            name: 'Pão de Queijo Recheado',
            price: 10.50,
            image: 'assets/paodequeijorecheado.jpg',
            description: 'O sabor tradicional do pão de queijo, agora ainda mais irresistível com recheio cremoso de presunto e queijo.',
            ingredients: ['Pão de queijo', 'Queijo mussarela', 'Presunto']
        }
    ],
    drinks: [
        {
            id: 'soda-limao',
            name: 'Fresh Soda Limão Siciliano',
            price: 14.50,
            image: 'assets/freshsoda.jpg',
            description: 'Refrescante e cítrica, com o toque sofisticado do limão siciliano e a leveza das borbulhas.',
            ingredients: ['Suco de limão siciliano fresco', 'Xarope simples', 'Água com gás', 'Rodelas de limão']
        },
        {
            id: 'soda-pink',
            name: 'Fresh Soda Pink Lemonade',
            price: 17.50,
            image: 'assets/freshsodapink.jpg',
            description: 'Refrescante, cítrica e levemente adocicada, perfeita para matar a sede com estilo.',
            ingredients: ['Suco de limão siciliano', 'Xarope de framboesa', 'Água com gás', 'Rodelas de limão']
        },
        {
            id: 'agua-mineral',
            name: 'Água Mineral sem Gás',
            price: 7.50,
            image: 'assets/agua.jpg',
            description: 'Água mineral gelada, pura e refrescante.',
            ingredients: ['Água mineral']
        },
        {
            id: 'agua-mineral',
            name: 'Água Mineral com Gás',
            price: 7.50,
            image: 'assets/aguagas.jpg',
            description: 'Água mineral gelada, pura e refrescante.',
            ingredients: ['Água mineral']
        }
    ]
};

const CATEGORIES = [
    {
        id: 'hotCoffees',
        name: 'Cafés Quentes',
        imagePath: 'assets/cafesquentesIcon.png'
    },
    {
        id: 'coldCoffees',
        name: 'Cafés Gelados',
        imagePath: 'assets/cafesgeladosIcon.png'
    },
    {
        id: 'breads',
        name: 'Pães',
        imagePath: 'assets/paesIcon.png'
    },
    {
        id: 'desserts',
        name: 'Sobremesas',
        imagePath: 'assets/sobremesasIcon.png'
    },
    {
        id: 'breakfast',
        name: 'Café da Manhã',
        imagePath: 'assets/bagueteIcon.png'
    },
    {
        id: 'drinks',
        name: 'Bebidas',
        imagePath: 'assets/aguaIcon.png'
    }
];

const CATEGORY_NAMES = {
    hotCoffees: 'Cafés Quentes',
    coldCoffees: 'Cafés Gelados',
    breads: 'Pães',
    desserts: 'Sobremesas',
    breakfast: 'Café da Manhã',
    drinks: 'Bebidas'
};