const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')
const DayController = require('./controllers/DayController')
const FeedController = require('./controllers/dictionary/FeedController')
const PolygonController = require('./controllers/PolygonController')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
	app.post('/register',
		AuthenticationControllerPolicy.register,
		AuthenticationController.register)
	app.post('/login',
		AuthenticationController.login)
	app.get('/songs',
		SongsController.getAllSongs)
	app.get('/song/:songId',
		SongsController.show)
	app.post('/song',
		SongsController.createSong)
	app.put('/song/:songId/edit',
		SongsController.put)
	app.get('/bookmarks',
		isAuthenticated,
		BookmarksController.index)
	app.post('/bookmarks',
		isAuthenticated,
		BookmarksController.post)
	app.delete('/bookmarks/:bookmarkId',
		isAuthenticated,
		BookmarksController.delete)
	app.get('/histories',
		isAuthenticated,
		HistoriesController.index)
	app.post('/histories',
		isAuthenticated,
		HistoriesController.post)
	app.get('/day',
		DayController.get)
	app.post('/day',
		DayController.post)
	app.delete('/day/:dayId',
		DayController.delete)
	app.put('/day/:dayId',
		DayController.put)
	app.get('/feeds',
		FeedController.get)
	app.post('/feed',
		FeedController.post)
	app.delete('/feed/:feedId',
		FeedController.delete)
	app.put('/feed/:feedId',
		FeedController.put)
	app.get('/polygons',
		PolygonController.get)
	app.post('/polygon',
		PolygonController.post)
	app.put('/polygon/:polygonUuid',
		PolygonController.put)
	app.delete('/polygon/:polygonUuid',
		PolygonController.delete)
}
