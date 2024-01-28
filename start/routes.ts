/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UserControllers = () => import('#controllers/users_controller')
const HoodiesController = () => import('#controllers/hoodies_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/user', [UserControllers, 'index'])
router.post('/user/create', [UserControllers, 'store'])
router.delete('/user/delete/:id', [UserControllers, 'delete'])
router.patch('/user/update/:id', [UserControllers, 'update'])
router.post('/user/order/:userId/:hoodieId', [UserControllers, 'order'])

router.get('/hoodie', [HoodiesController, 'index'])
router.post('/hoodie/create', [HoodiesController, 'store'])
router.delete('/hoodie/delete/:id', [HoodiesController, 'delete'])
router.patch('/hoodie/update/:id', [HoodiesController, 'update'])
