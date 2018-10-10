var serverModel = require('../models/serverModel.js');

/**
 * serverController.js
 *
 * @description :: Server-side logic for managing servers.
 */
module.exports = {

    /**
     * serverController.list()
     */
    list: function (req, res) {
        serverModel.find(function (err, servers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting server.',
                    error: err
                });
            }
            return res.json(servers);
        });
    },

    /**
     * serverController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        serverModel.findOne({ _id: id }, function (err, server) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting server.',
                    error: err
                });
            }
            if (!server) {
                return res.status(404).json({
                    message: 'No such server'
                });
            }
            return res.json(server);
        });
    },

    /**
     * serverController.create()
     */
    create: function (req, res) {
        var server = new serverModel({
            name: req.body.name,
            port: req.body.port

        });

        server.save(function (err, server) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating server',
                    error: err
                });
            }
            return res.status(201).json(server);
        });
    },

    /**
     * serverController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        serverModel.findOne({ _id: id }, function (err, server) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting server',
                    error: err
                });
            }
            if (!server) {
                return res.status(404).json({
                    message: 'No such server'
                });
            }

            server.name = req.body.name ? req.body.name : server.name;
            server.port = req.body.port ? req.body.port : server.port;

            server.save(function (err, server) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating server.',
                        error: err
                    });
                }

                return res.json(server);
            });
        });
    },

    /**
     * serverController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        serverModel.findByIdAndRemove(id, function (err, server) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the server.',
                    error: err
                });
            }
            return res.status(200).send({
                success: true,
                message: "User deleted Successfully!"
            }
            );
        });
    }
};
