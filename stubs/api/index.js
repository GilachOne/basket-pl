const router = require('express').Router();

const stubs = {
    dashboardList: 'success',
    dashboardCommon: 'success',
	landing: 'success',
    shoppingList: 'success',
    listItem: 'success',
    listCategories: 'success',
	listCategoriesAdd: 'success',
    signIn: 'success',
    signUp: 'success'
}

const wait = (req, res, next) => setTimeout(next, 3000)

router.get('/dashboard/list', wait, (req, res) => {
    res
        .status(stubs.dashboardList === 'error' ? 400 : 200)
        .send(require(`../json/dashboard/list/${stubs.dashboardList}.json`))
})

router.delete('/dashboard/list', (req, res) => {
    stubs.dashboardCommon === 'error' 
        ? res.status(400).send(require(`../json/dashboard/common/${stubs.dashboardCommon}.json`))
        : res.status(200).send({})
       
})

router.post('/dashboard/list', (req, res) => {
    res
        .status(stubs.dashboardCommon === 'error' ? 400 : 200)
        .send(require(`../json/dashboard/common/${stubs.dashboardCommon}.json`))
})

router.put('/dashboard/list', (req, res) => {
    res
        .status(stubs.dashboardCommon === 'error' ? 400 : 200)
        .send(require(`../json/dashboard/common/${stubs.dashboardCommon}.json`))
})

router.post('/dashboard/list/duplicate', (req, res) => {
    res
        .status(stubs.dashboardCommon === 'error' ? 400 : 200)
        .send(require(`../json/dashboard/common/${stubs.dashboardCommon}.json`))
})

router.get('/landing', (req, res) => {
	res
		.status(stubs.landing === 'error' ? 400 : 200)
		.send(require(`../json/landing/${stubs.landing}.json`))
})

router.get('/shoppingList/:id', (req, res) => {
	res
		.status(stubs.shoppingList === 'error' ? 400 : 200)
		.send(require(`../json/list/shoppingList/${stubs.shoppingList}.json`))
})
router.post('/shoppingList/item/:id', wait, (req, res) => {
    res
        .status(stubs.listItem === 'error' ? 400 : 200)
        .send(require(`../json/list/shoppingList/${stubs.listItem}.json`))
})

router.put('/shoppingList/item/:id', (req, res) => {
    res
        .status(stubs.listItem === 'error' ? 400 : 200)
        .send(require(`../json/list/item/${stubs.listItem}.json`))
})

router.patch('/shoppingList/item/:id', (req, res) => {
	res
		.status(stubs.listItem === 'error' ? 400 : 200)
		.send(require(`../json/list/item/${stubs.listItem}.json`))
})

router.delete('/shoppingList/item/:id', (req, res) => {
		stubs.listItem === 'error' ? 400 : 200
		? res.status(400).send(require(`../json/list/shoppingList/${stubs.listItem}.json`))
        : res.status(200).send({})
})

router.get('/categories', wait, (req, res) => {
	res
		.status(stubs.listCategories === 'error' ? 400 : 200)
		.send(require(`../json/list/categories/current/${stubs.listCategories}.json`))
})

router.post('/categories', wait, (req, res) => {
	res
		.status(stubs.listCategoriesAdd === 'error' ? 400 : 200)
		.send(require(`../json/list/categories/add/${stubs.listCategoriesAdd}.json`))
})

router.post('/auth/sign-in', wait, (req, res) => {
    res
        .status(stubs.signIn === 'error' ? 400 : 200)
        .send(require(`../json/sign-in/${stubs.signIn}.json`))
}) 

router.post('/auth/sign-up', wait, (req, res) => {
    res
        .status(stubs.signUp === 'error' ? 400 : 200)
        .send(require(`../json/sign-up/${stubs.signUp}.json`))
})

router.get('/admin/set/:key/:value', (req, res) => {
    const { key, value } = req.params;
    stubs[key] = value;

    res.send('');
})

router.get('/admin', (req, res) => {
    res.send(`
    <body>
        <h1>Админка для стабов</h1>

        <section>
            <h2>Dashboard list</h2>

            <ul>
                <li><button onclick="fetch('/api/admin/set/dashboardList/success')">success</button></li>
                <li><button onclick="fetch('/api/admin/set/dashboardList/empty')">empty</button></li>
                <li><button onclick="fetch('/api/admin/set/dashboardList/error')">error</button></li>
            </ul>
        </section>

        <section>
            <h2>Dashboard common</h2>

            <ul>
                <li><button onclick="fetch('/api/admin/set/dashboardCommon/success')">success</button></li>
                <li><button onclick="fetch('/api/admin/set/dashboardCommon/error')">error</button></li>
            </ul>
        </section>

		<section>
            <h2>Landing</h2>

            <ul>
                <li><button onclick="fetch('/api/admin/set/landing/success')">success</button></li>
                <li><button onclick="fetch('/api/admin/set/landing/error')">error</button></li>
            </ul>
        </section>

        <section>
            <h2>Shopping list</h2>

            <ul>
                <li><button onclick="fetch('/api/admin/set/shoppingList/success')">success</button></li>
                <li><button onclick="fetch('/api/admin/set/shoppingList/error')">error</button></li>
            </ul>
        </section>

        <section>
            <h2>List item</h2>

            <ul>
                <li><button onclick="fetch('/api/admin/set/listItem/success')">success</button></li>
                <li><button onclick="fetch('/api/admin/set/listItem/error')">error</button></li>
            </ul>
        </section>
        
        <section>
            <h2>Shopping List Categories (current)</h2>

            <ul>
                <li><button onclick="fetch('/api/admin/set/listCategories/success')">success</button></li>
                <li><button onclick="fetch('/api/admin/set/listCategories/error')">error</button></li>
            </ul>
        </section>

		<section>
            <h2>Shopping List Categories (add categorie)</h2>

            <ul>
                <li><button onclick="fetch('/api/admin/set/listCategoriesAdd/success')">success</button></li>
                <li><button onclick="fetch('/api/admin/set/listCategoriesAdd/error')">error</button></li>
            </ul>
        </section>
       
        <section>
            <h2>Sign In</h2>

            <ul>
                <li><button onclick="fetch('/api/admin/set/signIn/success')">success</button></li>
                <li><button onclick="fetch('/api/admin/set/signIn/error')">error</button></li>
            </ul>
        </section>

        <section>
        <h2>Sign Up</h2>

        <ul>
            <li><button onclick="fetch('/api/admin/set/signUp/success')">success</button></li>
            <li><button onclick="fetch('/api/admin/set/signUp/error')">error</button></li>
        </ul>
    </section>
    </body>
    `)
})

module.exports = router;
