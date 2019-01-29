/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WebAPI = $root.WebAPI = (() => {

    const WebAPI = {};

    WebAPI.ProtocolVersionMajor = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "PROTOCOL_VERSION_MAJOR"] = 1;
        return values;
    })();

    WebAPI.ProtocolVersionMinor = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[27] = "PROTOCOL_VERSION_MINOR"] = 27;
        return values;
    })();

    WebAPI.ClientMsg = (function() {

        function ClientMsg(properties) {
            this.informationRequest = [];
            this.tradeSubscription = [];
            this.orderRequest = [];
            this.marketDataSubscription = [];
            this.readUserAttributeRequest = [];
            this.modifyUserAttributeRequest = [];
            this.timeAndSalesRequest = [];
            this.timeBarRequest = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientMsg.prototype.logon = null;
        ClientMsg.prototype.restoreSession = null;
        ClientMsg.prototype.logoff = null;
        ClientMsg.prototype.passwordChange = null;
        ClientMsg.prototype.obtainDemoCredentials = null;
        ClientMsg.prototype.userSessionStateRequest = null;
        ClientMsg.prototype.ping = null;
        ClientMsg.prototype.pong = null;
        ClientMsg.prototype.logonRoutineClient = null;
        ClientMsg.prototype.passwordChangeRoutineClient = null;
        ClientMsg.prototype.informationRequest = $util.emptyArray;
        ClientMsg.prototype.tradeSubscription = $util.emptyArray;
        ClientMsg.prototype.orderRequest = $util.emptyArray;
        ClientMsg.prototype.marketDataSubscription = $util.emptyArray;
        ClientMsg.prototype.readUserAttributeRequest = $util.emptyArray;
        ClientMsg.prototype.modifyUserAttributeRequest = $util.emptyArray;
        ClientMsg.prototype.timeAndSalesRequest = $util.emptyArray;
        ClientMsg.prototype.timeBarRequest = $util.emptyArray;
        ClientMsg.prototype.pagedOrderRequest = null;

        ClientMsg.create = function create(properties) {
            return new ClientMsg(properties);
        };

        ClientMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.informationRequest != null && message.informationRequest.length)
                for (let i = 0; i < message.informationRequest.length; ++i)
                    $root.WebAPI.InformationRequest.encode(message.informationRequest[i], writer.uint32(10).fork()).ldelim();
            if (message.tradeSubscription != null && message.tradeSubscription.length)
                for (let i = 0; i < message.tradeSubscription.length; ++i)
                    $root.WebAPI.TradeSubscription.encode(message.tradeSubscription[i], writer.uint32(18).fork()).ldelim();
            if (message.orderRequest != null && message.orderRequest.length)
                for (let i = 0; i < message.orderRequest.length; ++i)
                    $root.WebAPI.OrderRequest.encode(message.orderRequest[i], writer.uint32(26).fork()).ldelim();
            if (message.marketDataSubscription != null && message.marketDataSubscription.length)
                for (let i = 0; i < message.marketDataSubscription.length; ++i)
                    $root.WebAPI.MarketDataSubscription.encode(message.marketDataSubscription[i], writer.uint32(34).fork()).ldelim();
            if (message.readUserAttributeRequest != null && message.readUserAttributeRequest.length)
                for (let i = 0; i < message.readUserAttributeRequest.length; ++i)
                    $root.WebAPI.ReadUserAttributeRequest.encode(message.readUserAttributeRequest[i], writer.uint32(42).fork()).ldelim();
            if (message.modifyUserAttributeRequest != null && message.modifyUserAttributeRequest.length)
                for (let i = 0; i < message.modifyUserAttributeRequest.length; ++i)
                    $root.WebAPI.ModifyUserAttributeRequest.encode(message.modifyUserAttributeRequest[i], writer.uint32(50).fork()).ldelim();
            if (message.timeAndSalesRequest != null && message.timeAndSalesRequest.length)
                for (let i = 0; i < message.timeAndSalesRequest.length; ++i)
                    $root.WebAPI.TimeAndSalesRequest.encode(message.timeAndSalesRequest[i], writer.uint32(58).fork()).ldelim();
            if (message.timeBarRequest != null && message.timeBarRequest.length)
                for (let i = 0; i < message.timeBarRequest.length; ++i)
                    $root.WebAPI.TimeBarRequest.encode(message.timeBarRequest[i], writer.uint32(66).fork()).ldelim();
            if (message.pagedOrderRequest != null && message.hasOwnProperty("pagedOrderRequest"))
                $root.WebAPI.PagedOrderRequest.encode(message.pagedOrderRequest, writer.uint32(74).fork()).ldelim();
            if (message.logon != null && message.hasOwnProperty("logon"))
                $root.WebAPI.Logon.encode(message.logon, writer.uint32(802).fork()).ldelim();
            if (message.restoreSession != null && message.hasOwnProperty("restoreSession"))
                $root.WebAPI.RestoreSession.encode(message.restoreSession, writer.uint32(810).fork()).ldelim();
            if (message.logoff != null && message.hasOwnProperty("logoff"))
                $root.WebAPI.Logoff.encode(message.logoff, writer.uint32(818).fork()).ldelim();
            if (message.passwordChange != null && message.hasOwnProperty("passwordChange"))
                $root.WebAPI.PasswordChange.encode(message.passwordChange, writer.uint32(826).fork()).ldelim();
            if (message.obtainDemoCredentials != null && message.hasOwnProperty("obtainDemoCredentials"))
                $root.WebAPI.ObtainDemoCredentials.encode(message.obtainDemoCredentials, writer.uint32(834).fork()).ldelim();
            if (message.userSessionStateRequest != null && message.hasOwnProperty("userSessionStateRequest"))
                $root.WebAPI.UserSessionStateRequest.encode(message.userSessionStateRequest, writer.uint32(842).fork()).ldelim();
            if (message.ping != null && message.hasOwnProperty("ping"))
                $root.WebAPI.Ping.encode(message.ping, writer.uint32(858).fork()).ldelim();
            if (message.pong != null && message.hasOwnProperty("pong"))
                $root.WebAPI.Pong.encode(message.pong, writer.uint32(866).fork()).ldelim();
            if (message.logonRoutineClient != null && message.hasOwnProperty("logonRoutineClient"))
                $root.WebAPI.LogonRoutineClient.encode(message.logonRoutineClient, writer.uint32(874).fork()).ldelim();
            if (message.passwordChangeRoutineClient != null && message.hasOwnProperty("passwordChangeRoutineClient"))
                $root.WebAPI.PasswordChangeRoutineClient.encode(message.passwordChangeRoutineClient, writer.uint32(882).fork()).ldelim();
            return writer;
        };

        ClientMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ClientMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ClientMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 100:
                    message.logon = $root.WebAPI.Logon.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.restoreSession = $root.WebAPI.RestoreSession.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.logoff = $root.WebAPI.Logoff.decode(reader, reader.uint32());
                    break;
                case 103:
                    message.passwordChange = $root.WebAPI.PasswordChange.decode(reader, reader.uint32());
                    break;
                case 104:
                    message.obtainDemoCredentials = $root.WebAPI.ObtainDemoCredentials.decode(reader, reader.uint32());
                    break;
                case 105:
                    message.userSessionStateRequest = $root.WebAPI.UserSessionStateRequest.decode(reader, reader.uint32());
                    break;
                case 107:
                    message.ping = $root.WebAPI.Ping.decode(reader, reader.uint32());
                    break;
                case 108:
                    message.pong = $root.WebAPI.Pong.decode(reader, reader.uint32());
                    break;
                case 109:
                    message.logonRoutineClient = $root.WebAPI.LogonRoutineClient.decode(reader, reader.uint32());
                    break;
                case 110:
                    message.passwordChangeRoutineClient = $root.WebAPI.PasswordChangeRoutineClient.decode(reader, reader.uint32());
                    break;
                case 1:
                    if (!(message.informationRequest && message.informationRequest.length))
                        message.informationRequest = [];
                    message.informationRequest.push($root.WebAPI.InformationRequest.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.tradeSubscription && message.tradeSubscription.length))
                        message.tradeSubscription = [];
                    message.tradeSubscription.push($root.WebAPI.TradeSubscription.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.orderRequest && message.orderRequest.length))
                        message.orderRequest = [];
                    message.orderRequest.push($root.WebAPI.OrderRequest.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.marketDataSubscription && message.marketDataSubscription.length))
                        message.marketDataSubscription = [];
                    message.marketDataSubscription.push($root.WebAPI.MarketDataSubscription.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.readUserAttributeRequest && message.readUserAttributeRequest.length))
                        message.readUserAttributeRequest = [];
                    message.readUserAttributeRequest.push($root.WebAPI.ReadUserAttributeRequest.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.modifyUserAttributeRequest && message.modifyUserAttributeRequest.length))
                        message.modifyUserAttributeRequest = [];
                    message.modifyUserAttributeRequest.push($root.WebAPI.ModifyUserAttributeRequest.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.timeAndSalesRequest && message.timeAndSalesRequest.length))
                        message.timeAndSalesRequest = [];
                    message.timeAndSalesRequest.push($root.WebAPI.TimeAndSalesRequest.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.timeBarRequest && message.timeBarRequest.length))
                        message.timeBarRequest = [];
                    message.timeBarRequest.push($root.WebAPI.TimeBarRequest.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.pagedOrderRequest = $root.WebAPI.PagedOrderRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClientMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ClientMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.logon != null && message.hasOwnProperty("logon")) {
                let error = $root.WebAPI.Logon.verify(message.logon);
                if (error)
                    return "logon." + error;
            }
            if (message.restoreSession != null && message.hasOwnProperty("restoreSession")) {
                let error = $root.WebAPI.RestoreSession.verify(message.restoreSession);
                if (error)
                    return "restoreSession." + error;
            }
            if (message.logoff != null && message.hasOwnProperty("logoff")) {
                let error = $root.WebAPI.Logoff.verify(message.logoff);
                if (error)
                    return "logoff." + error;
            }
            if (message.passwordChange != null && message.hasOwnProperty("passwordChange")) {
                let error = $root.WebAPI.PasswordChange.verify(message.passwordChange);
                if (error)
                    return "passwordChange." + error;
            }
            if (message.obtainDemoCredentials != null && message.hasOwnProperty("obtainDemoCredentials")) {
                let error = $root.WebAPI.ObtainDemoCredentials.verify(message.obtainDemoCredentials);
                if (error)
                    return "obtainDemoCredentials." + error;
            }
            if (message.userSessionStateRequest != null && message.hasOwnProperty("userSessionStateRequest")) {
                let error = $root.WebAPI.UserSessionStateRequest.verify(message.userSessionStateRequest);
                if (error)
                    return "userSessionStateRequest." + error;
            }
            if (message.ping != null && message.hasOwnProperty("ping")) {
                let error = $root.WebAPI.Ping.verify(message.ping);
                if (error)
                    return "ping." + error;
            }
            if (message.pong != null && message.hasOwnProperty("pong")) {
                let error = $root.WebAPI.Pong.verify(message.pong);
                if (error)
                    return "pong." + error;
            }
            if (message.logonRoutineClient != null && message.hasOwnProperty("logonRoutineClient")) {
                let error = $root.WebAPI.LogonRoutineClient.verify(message.logonRoutineClient);
                if (error)
                    return "logonRoutineClient." + error;
            }
            if (message.passwordChangeRoutineClient != null && message.hasOwnProperty("passwordChangeRoutineClient")) {
                let error = $root.WebAPI.PasswordChangeRoutineClient.verify(message.passwordChangeRoutineClient);
                if (error)
                    return "passwordChangeRoutineClient." + error;
            }
            if (message.informationRequest != null && message.hasOwnProperty("informationRequest")) {
                if (!Array.isArray(message.informationRequest))
                    return "informationRequest: array expected";
                for (let i = 0; i < message.informationRequest.length; ++i) {
                    let error = $root.WebAPI.InformationRequest.verify(message.informationRequest[i]);
                    if (error)
                        return "informationRequest." + error;
                }
            }
            if (message.tradeSubscription != null && message.hasOwnProperty("tradeSubscription")) {
                if (!Array.isArray(message.tradeSubscription))
                    return "tradeSubscription: array expected";
                for (let i = 0; i < message.tradeSubscription.length; ++i) {
                    let error = $root.WebAPI.TradeSubscription.verify(message.tradeSubscription[i]);
                    if (error)
                        return "tradeSubscription." + error;
                }
            }
            if (message.orderRequest != null && message.hasOwnProperty("orderRequest")) {
                if (!Array.isArray(message.orderRequest))
                    return "orderRequest: array expected";
                for (let i = 0; i < message.orderRequest.length; ++i) {
                    let error = $root.WebAPI.OrderRequest.verify(message.orderRequest[i]);
                    if (error)
                        return "orderRequest." + error;
                }
            }
            if (message.marketDataSubscription != null && message.hasOwnProperty("marketDataSubscription")) {
                if (!Array.isArray(message.marketDataSubscription))
                    return "marketDataSubscription: array expected";
                for (let i = 0; i < message.marketDataSubscription.length; ++i) {
                    let error = $root.WebAPI.MarketDataSubscription.verify(message.marketDataSubscription[i]);
                    if (error)
                        return "marketDataSubscription." + error;
                }
            }
            if (message.readUserAttributeRequest != null && message.hasOwnProperty("readUserAttributeRequest")) {
                if (!Array.isArray(message.readUserAttributeRequest))
                    return "readUserAttributeRequest: array expected";
                for (let i = 0; i < message.readUserAttributeRequest.length; ++i) {
                    let error = $root.WebAPI.ReadUserAttributeRequest.verify(message.readUserAttributeRequest[i]);
                    if (error)
                        return "readUserAttributeRequest." + error;
                }
            }
            if (message.modifyUserAttributeRequest != null && message.hasOwnProperty("modifyUserAttributeRequest")) {
                if (!Array.isArray(message.modifyUserAttributeRequest))
                    return "modifyUserAttributeRequest: array expected";
                for (let i = 0; i < message.modifyUserAttributeRequest.length; ++i) {
                    let error = $root.WebAPI.ModifyUserAttributeRequest.verify(message.modifyUserAttributeRequest[i]);
                    if (error)
                        return "modifyUserAttributeRequest." + error;
                }
            }
            if (message.timeAndSalesRequest != null && message.hasOwnProperty("timeAndSalesRequest")) {
                if (!Array.isArray(message.timeAndSalesRequest))
                    return "timeAndSalesRequest: array expected";
                for (let i = 0; i < message.timeAndSalesRequest.length; ++i) {
                    let error = $root.WebAPI.TimeAndSalesRequest.verify(message.timeAndSalesRequest[i]);
                    if (error)
                        return "timeAndSalesRequest." + error;
                }
            }
            if (message.timeBarRequest != null && message.hasOwnProperty("timeBarRequest")) {
                if (!Array.isArray(message.timeBarRequest))
                    return "timeBarRequest: array expected";
                for (let i = 0; i < message.timeBarRequest.length; ++i) {
                    let error = $root.WebAPI.TimeBarRequest.verify(message.timeBarRequest[i]);
                    if (error)
                        return "timeBarRequest." + error;
                }
            }
            if (message.pagedOrderRequest != null && message.hasOwnProperty("pagedOrderRequest")) {
                let error = $root.WebAPI.PagedOrderRequest.verify(message.pagedOrderRequest);
                if (error)
                    return "pagedOrderRequest." + error;
            }
            return null;
        };

        ClientMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ClientMsg)
                return object;
            let message = new $root.WebAPI.ClientMsg();
            if (object.logon != null) {
                if (typeof object.logon !== "object")
                    throw TypeError(".WebAPI.ClientMsg.logon: object expected");
                message.logon = $root.WebAPI.Logon.fromObject(object.logon);
            }
            if (object.restoreSession != null) {
                if (typeof object.restoreSession !== "object")
                    throw TypeError(".WebAPI.ClientMsg.restoreSession: object expected");
                message.restoreSession = $root.WebAPI.RestoreSession.fromObject(object.restoreSession);
            }
            if (object.logoff != null) {
                if (typeof object.logoff !== "object")
                    throw TypeError(".WebAPI.ClientMsg.logoff: object expected");
                message.logoff = $root.WebAPI.Logoff.fromObject(object.logoff);
            }
            if (object.passwordChange != null) {
                if (typeof object.passwordChange !== "object")
                    throw TypeError(".WebAPI.ClientMsg.passwordChange: object expected");
                message.passwordChange = $root.WebAPI.PasswordChange.fromObject(object.passwordChange);
            }
            if (object.obtainDemoCredentials != null) {
                if (typeof object.obtainDemoCredentials !== "object")
                    throw TypeError(".WebAPI.ClientMsg.obtainDemoCredentials: object expected");
                message.obtainDemoCredentials = $root.WebAPI.ObtainDemoCredentials.fromObject(object.obtainDemoCredentials);
            }
            if (object.userSessionStateRequest != null) {
                if (typeof object.userSessionStateRequest !== "object")
                    throw TypeError(".WebAPI.ClientMsg.userSessionStateRequest: object expected");
                message.userSessionStateRequest = $root.WebAPI.UserSessionStateRequest.fromObject(object.userSessionStateRequest);
            }
            if (object.ping != null) {
                if (typeof object.ping !== "object")
                    throw TypeError(".WebAPI.ClientMsg.ping: object expected");
                message.ping = $root.WebAPI.Ping.fromObject(object.ping);
            }
            if (object.pong != null) {
                if (typeof object.pong !== "object")
                    throw TypeError(".WebAPI.ClientMsg.pong: object expected");
                message.pong = $root.WebAPI.Pong.fromObject(object.pong);
            }
            if (object.logonRoutineClient != null) {
                if (typeof object.logonRoutineClient !== "object")
                    throw TypeError(".WebAPI.ClientMsg.logonRoutineClient: object expected");
                message.logonRoutineClient = $root.WebAPI.LogonRoutineClient.fromObject(object.logonRoutineClient);
            }
            if (object.passwordChangeRoutineClient != null) {
                if (typeof object.passwordChangeRoutineClient !== "object")
                    throw TypeError(".WebAPI.ClientMsg.passwordChangeRoutineClient: object expected");
                message.passwordChangeRoutineClient = $root.WebAPI.PasswordChangeRoutineClient.fromObject(object.passwordChangeRoutineClient);
            }
            if (object.informationRequest) {
                if (!Array.isArray(object.informationRequest))
                    throw TypeError(".WebAPI.ClientMsg.informationRequest: array expected");
                message.informationRequest = [];
                for (let i = 0; i < object.informationRequest.length; ++i) {
                    if (typeof object.informationRequest[i] !== "object")
                        throw TypeError(".WebAPI.ClientMsg.informationRequest: object expected");
                    message.informationRequest[i] = $root.WebAPI.InformationRequest.fromObject(object.informationRequest[i]);
                }
            }
            if (object.tradeSubscription) {
                if (!Array.isArray(object.tradeSubscription))
                    throw TypeError(".WebAPI.ClientMsg.tradeSubscription: array expected");
                message.tradeSubscription = [];
                for (let i = 0; i < object.tradeSubscription.length; ++i) {
                    if (typeof object.tradeSubscription[i] !== "object")
                        throw TypeError(".WebAPI.ClientMsg.tradeSubscription: object expected");
                    message.tradeSubscription[i] = $root.WebAPI.TradeSubscription.fromObject(object.tradeSubscription[i]);
                }
            }
            if (object.orderRequest) {
                if (!Array.isArray(object.orderRequest))
                    throw TypeError(".WebAPI.ClientMsg.orderRequest: array expected");
                message.orderRequest = [];
                for (let i = 0; i < object.orderRequest.length; ++i) {
                    if (typeof object.orderRequest[i] !== "object")
                        throw TypeError(".WebAPI.ClientMsg.orderRequest: object expected");
                    message.orderRequest[i] = $root.WebAPI.OrderRequest.fromObject(object.orderRequest[i]);
                }
            }
            if (object.marketDataSubscription) {
                if (!Array.isArray(object.marketDataSubscription))
                    throw TypeError(".WebAPI.ClientMsg.marketDataSubscription: array expected");
                message.marketDataSubscription = [];
                for (let i = 0; i < object.marketDataSubscription.length; ++i) {
                    if (typeof object.marketDataSubscription[i] !== "object")
                        throw TypeError(".WebAPI.ClientMsg.marketDataSubscription: object expected");
                    message.marketDataSubscription[i] = $root.WebAPI.MarketDataSubscription.fromObject(object.marketDataSubscription[i]);
                }
            }
            if (object.readUserAttributeRequest) {
                if (!Array.isArray(object.readUserAttributeRequest))
                    throw TypeError(".WebAPI.ClientMsg.readUserAttributeRequest: array expected");
                message.readUserAttributeRequest = [];
                for (let i = 0; i < object.readUserAttributeRequest.length; ++i) {
                    if (typeof object.readUserAttributeRequest[i] !== "object")
                        throw TypeError(".WebAPI.ClientMsg.readUserAttributeRequest: object expected");
                    message.readUserAttributeRequest[i] = $root.WebAPI.ReadUserAttributeRequest.fromObject(object.readUserAttributeRequest[i]);
                }
            }
            if (object.modifyUserAttributeRequest) {
                if (!Array.isArray(object.modifyUserAttributeRequest))
                    throw TypeError(".WebAPI.ClientMsg.modifyUserAttributeRequest: array expected");
                message.modifyUserAttributeRequest = [];
                for (let i = 0; i < object.modifyUserAttributeRequest.length; ++i) {
                    if (typeof object.modifyUserAttributeRequest[i] !== "object")
                        throw TypeError(".WebAPI.ClientMsg.modifyUserAttributeRequest: object expected");
                    message.modifyUserAttributeRequest[i] = $root.WebAPI.ModifyUserAttributeRequest.fromObject(object.modifyUserAttributeRequest[i]);
                }
            }
            if (object.timeAndSalesRequest) {
                if (!Array.isArray(object.timeAndSalesRequest))
                    throw TypeError(".WebAPI.ClientMsg.timeAndSalesRequest: array expected");
                message.timeAndSalesRequest = [];
                for (let i = 0; i < object.timeAndSalesRequest.length; ++i) {
                    if (typeof object.timeAndSalesRequest[i] !== "object")
                        throw TypeError(".WebAPI.ClientMsg.timeAndSalesRequest: object expected");
                    message.timeAndSalesRequest[i] = $root.WebAPI.TimeAndSalesRequest.fromObject(object.timeAndSalesRequest[i]);
                }
            }
            if (object.timeBarRequest) {
                if (!Array.isArray(object.timeBarRequest))
                    throw TypeError(".WebAPI.ClientMsg.timeBarRequest: array expected");
                message.timeBarRequest = [];
                for (let i = 0; i < object.timeBarRequest.length; ++i) {
                    if (typeof object.timeBarRequest[i] !== "object")
                        throw TypeError(".WebAPI.ClientMsg.timeBarRequest: object expected");
                    message.timeBarRequest[i] = $root.WebAPI.TimeBarRequest.fromObject(object.timeBarRequest[i]);
                }
            }
            if (object.pagedOrderRequest != null) {
                if (typeof object.pagedOrderRequest !== "object")
                    throw TypeError(".WebAPI.ClientMsg.pagedOrderRequest: object expected");
                message.pagedOrderRequest = $root.WebAPI.PagedOrderRequest.fromObject(object.pagedOrderRequest);
            }
            return message;
        };

        ClientMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.informationRequest = [];
                object.tradeSubscription = [];
                object.orderRequest = [];
                object.marketDataSubscription = [];
                object.readUserAttributeRequest = [];
                object.modifyUserAttributeRequest = [];
                object.timeAndSalesRequest = [];
                object.timeBarRequest = [];
            }
            if (options.defaults) {
                object.pagedOrderRequest = null;
                object.logon = null;
                object.restoreSession = null;
                object.logoff = null;
                object.passwordChange = null;
                object.obtainDemoCredentials = null;
                object.userSessionStateRequest = null;
                object.ping = null;
                object.pong = null;
                object.logonRoutineClient = null;
                object.passwordChangeRoutineClient = null;
            }
            if (message.informationRequest && message.informationRequest.length) {
                object.informationRequest = [];
                for (let j = 0; j < message.informationRequest.length; ++j)
                    object.informationRequest[j] = $root.WebAPI.InformationRequest.toObject(message.informationRequest[j], options);
            }
            if (message.tradeSubscription && message.tradeSubscription.length) {
                object.tradeSubscription = [];
                for (let j = 0; j < message.tradeSubscription.length; ++j)
                    object.tradeSubscription[j] = $root.WebAPI.TradeSubscription.toObject(message.tradeSubscription[j], options);
            }
            if (message.orderRequest && message.orderRequest.length) {
                object.orderRequest = [];
                for (let j = 0; j < message.orderRequest.length; ++j)
                    object.orderRequest[j] = $root.WebAPI.OrderRequest.toObject(message.orderRequest[j], options);
            }
            if (message.marketDataSubscription && message.marketDataSubscription.length) {
                object.marketDataSubscription = [];
                for (let j = 0; j < message.marketDataSubscription.length; ++j)
                    object.marketDataSubscription[j] = $root.WebAPI.MarketDataSubscription.toObject(message.marketDataSubscription[j], options);
            }
            if (message.readUserAttributeRequest && message.readUserAttributeRequest.length) {
                object.readUserAttributeRequest = [];
                for (let j = 0; j < message.readUserAttributeRequest.length; ++j)
                    object.readUserAttributeRequest[j] = $root.WebAPI.ReadUserAttributeRequest.toObject(message.readUserAttributeRequest[j], options);
            }
            if (message.modifyUserAttributeRequest && message.modifyUserAttributeRequest.length) {
                object.modifyUserAttributeRequest = [];
                for (let j = 0; j < message.modifyUserAttributeRequest.length; ++j)
                    object.modifyUserAttributeRequest[j] = $root.WebAPI.ModifyUserAttributeRequest.toObject(message.modifyUserAttributeRequest[j], options);
            }
            if (message.timeAndSalesRequest && message.timeAndSalesRequest.length) {
                object.timeAndSalesRequest = [];
                for (let j = 0; j < message.timeAndSalesRequest.length; ++j)
                    object.timeAndSalesRequest[j] = $root.WebAPI.TimeAndSalesRequest.toObject(message.timeAndSalesRequest[j], options);
            }
            if (message.timeBarRequest && message.timeBarRequest.length) {
                object.timeBarRequest = [];
                for (let j = 0; j < message.timeBarRequest.length; ++j)
                    object.timeBarRequest[j] = $root.WebAPI.TimeBarRequest.toObject(message.timeBarRequest[j], options);
            }
            if (message.pagedOrderRequest != null && message.hasOwnProperty("pagedOrderRequest"))
                object.pagedOrderRequest = $root.WebAPI.PagedOrderRequest.toObject(message.pagedOrderRequest, options);
            if (message.logon != null && message.hasOwnProperty("logon"))
                object.logon = $root.WebAPI.Logon.toObject(message.logon, options);
            if (message.restoreSession != null && message.hasOwnProperty("restoreSession"))
                object.restoreSession = $root.WebAPI.RestoreSession.toObject(message.restoreSession, options);
            if (message.logoff != null && message.hasOwnProperty("logoff"))
                object.logoff = $root.WebAPI.Logoff.toObject(message.logoff, options);
            if (message.passwordChange != null && message.hasOwnProperty("passwordChange"))
                object.passwordChange = $root.WebAPI.PasswordChange.toObject(message.passwordChange, options);
            if (message.obtainDemoCredentials != null && message.hasOwnProperty("obtainDemoCredentials"))
                object.obtainDemoCredentials = $root.WebAPI.ObtainDemoCredentials.toObject(message.obtainDemoCredentials, options);
            if (message.userSessionStateRequest != null && message.hasOwnProperty("userSessionStateRequest"))
                object.userSessionStateRequest = $root.WebAPI.UserSessionStateRequest.toObject(message.userSessionStateRequest, options);
            if (message.ping != null && message.hasOwnProperty("ping"))
                object.ping = $root.WebAPI.Ping.toObject(message.ping, options);
            if (message.pong != null && message.hasOwnProperty("pong"))
                object.pong = $root.WebAPI.Pong.toObject(message.pong, options);
            if (message.logonRoutineClient != null && message.hasOwnProperty("logonRoutineClient"))
                object.logonRoutineClient = $root.WebAPI.LogonRoutineClient.toObject(message.logonRoutineClient, options);
            if (message.passwordChangeRoutineClient != null && message.hasOwnProperty("passwordChangeRoutineClient"))
                object.passwordChangeRoutineClient = $root.WebAPI.PasswordChangeRoutineClient.toObject(message.passwordChangeRoutineClient, options);
            return object;
        };

        ClientMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClientMsg;
    })();

    WebAPI.PagedOrderRequest = (function() {

        function PagedOrderRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PagedOrderRequest.prototype.requestId = 0;
        PagedOrderRequest.prototype.pageSize = 0;
        PagedOrderRequest.prototype.offset = 0;

        PagedOrderRequest.create = function create(properties) {
            return new PagedOrderRequest(properties);
        };

        PagedOrderRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            writer.uint32(16).uint32(message.pageSize);
            writer.uint32(24).uint32(message.offset);
            return writer;
        };

        PagedOrderRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PagedOrderRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.PagedOrderRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.pageSize = reader.uint32();
                    break;
                case 3:
                    message.offset = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            if (!message.hasOwnProperty("pageSize"))
                throw $util.ProtocolError("missing required 'pageSize'", { instance: message });
            if (!message.hasOwnProperty("offset"))
                throw $util.ProtocolError("missing required 'offset'", { instance: message });
            return message;
        };

        PagedOrderRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PagedOrderRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (!$util.isInteger(message.pageSize))
                return "pageSize: integer expected";
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
            return null;
        };

        PagedOrderRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.PagedOrderRequest)
                return object;
            let message = new $root.WebAPI.PagedOrderRequest();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize >>> 0;
            if (object.offset != null)
                message.offset = object.offset >>> 0;
            return message;
        };

        PagedOrderRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.requestId = 0;
                object.pageSize = 0;
                object.offset = 0;
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            return object;
        };

        PagedOrderRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PagedOrderRequest;
    })();

    WebAPI.ServerMsg = (function() {

        function ServerMsg(properties) {
            this.userMessage = [];
            this.informationReport = [];
            this.orderRequestReject = [];
            this.tradeSubscriptionStatus = [];
            this.tradeSnapshotCompletion = [];
            this.orderStatus = [];
            this.positionStatus = [];
            this.collateralStatus = [];
            this.marketDataSubscriptionStatus = [];
            this.realTimeMarketData = [];
            this.readUserAttributeResult = [];
            this.modifyUserAttributeResult = [];
            this.timeAndSalesReport = [];
            this.timeBarReport = [];
            this.pagedOrderReport = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerMsg.prototype.logonResult = null;
        ServerMsg.prototype.restoreSessionResult = null;
        ServerMsg.prototype.loggedOff = null;
        ServerMsg.prototype.passwordChangeResult = null;
        ServerMsg.prototype.userMessage = $util.emptyArray;
        ServerMsg.prototype.obtainDemoCredentialsResult = null;
        ServerMsg.prototype.userSessionStateResult = null;
        ServerMsg.prototype.ping = null;
        ServerMsg.prototype.pong = null;
        ServerMsg.prototype.logonRoutineServer = null;
        ServerMsg.prototype.passwordChangeRoutineServer = null;
        ServerMsg.prototype.informationReport = $util.emptyArray;
        ServerMsg.prototype.orderRequestReject = $util.emptyArray;
        ServerMsg.prototype.tradeSubscriptionStatus = $util.emptyArray;
        ServerMsg.prototype.tradeSnapshotCompletion = $util.emptyArray;
        ServerMsg.prototype.orderStatus = $util.emptyArray;
        ServerMsg.prototype.positionStatus = $util.emptyArray;
        ServerMsg.prototype.collateralStatus = $util.emptyArray;
        ServerMsg.prototype.marketDataSubscriptionStatus = $util.emptyArray;
        ServerMsg.prototype.realTimeMarketData = $util.emptyArray;
        ServerMsg.prototype.readUserAttributeResult = $util.emptyArray;
        ServerMsg.prototype.modifyUserAttributeResult = $util.emptyArray;
        ServerMsg.prototype.timeAndSalesReport = $util.emptyArray;
        ServerMsg.prototype.timeBarReport = $util.emptyArray;
        ServerMsg.prototype.pagedOrderReport = $util.emptyArray;

        ServerMsg.create = function create(properties) {
            return new ServerMsg(properties);
        };

        ServerMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.informationReport != null && message.informationReport.length)
                for (let i = 0; i < message.informationReport.length; ++i)
                    $root.WebAPI.InformationReport.encode(message.informationReport[i], writer.uint32(10).fork()).ldelim();
            if (message.orderRequestReject != null && message.orderRequestReject.length)
                for (let i = 0; i < message.orderRequestReject.length; ++i)
                    $root.WebAPI.OrderRequestReject.encode(message.orderRequestReject[i], writer.uint32(18).fork()).ldelim();
            if (message.tradeSubscriptionStatus != null && message.tradeSubscriptionStatus.length)
                for (let i = 0; i < message.tradeSubscriptionStatus.length; ++i)
                    $root.WebAPI.TradeSubscriptionStatus.encode(message.tradeSubscriptionStatus[i], writer.uint32(26).fork()).ldelim();
            if (message.tradeSnapshotCompletion != null && message.tradeSnapshotCompletion.length)
                for (let i = 0; i < message.tradeSnapshotCompletion.length; ++i)
                    $root.WebAPI.TradeSnapshotCompletion.encode(message.tradeSnapshotCompletion[i], writer.uint32(34).fork()).ldelim();
            if (message.orderStatus != null && message.orderStatus.length)
                for (let i = 0; i < message.orderStatus.length; ++i)
                    $root.WebAPI.OrderStatus.encode(message.orderStatus[i], writer.uint32(42).fork()).ldelim();
            if (message.positionStatus != null && message.positionStatus.length)
                for (let i = 0; i < message.positionStatus.length; ++i)
                    $root.WebAPI.PositionStatus.encode(message.positionStatus[i], writer.uint32(50).fork()).ldelim();
            if (message.collateralStatus != null && message.collateralStatus.length)
                for (let i = 0; i < message.collateralStatus.length; ++i)
                    $root.WebAPI.CollateralStatus.encode(message.collateralStatus[i], writer.uint32(58).fork()).ldelim();
            if (message.marketDataSubscriptionStatus != null && message.marketDataSubscriptionStatus.length)
                for (let i = 0; i < message.marketDataSubscriptionStatus.length; ++i)
                    $root.WebAPI.MarketDataSubscriptionStatus.encode(message.marketDataSubscriptionStatus[i], writer.uint32(66).fork()).ldelim();
            if (message.realTimeMarketData != null && message.realTimeMarketData.length)
                for (let i = 0; i < message.realTimeMarketData.length; ++i)
                    $root.WebAPI.RealTimeMarketData.encode(message.realTimeMarketData[i], writer.uint32(74).fork()).ldelim();
            if (message.readUserAttributeResult != null && message.readUserAttributeResult.length)
                for (let i = 0; i < message.readUserAttributeResult.length; ++i)
                    $root.WebAPI.ReadUserAttributeResult.encode(message.readUserAttributeResult[i], writer.uint32(82).fork()).ldelim();
            if (message.modifyUserAttributeResult != null && message.modifyUserAttributeResult.length)
                for (let i = 0; i < message.modifyUserAttributeResult.length; ++i)
                    $root.WebAPI.ModifyUserAttributeResult.encode(message.modifyUserAttributeResult[i], writer.uint32(90).fork()).ldelim();
            if (message.timeAndSalesReport != null && message.timeAndSalesReport.length)
                for (let i = 0; i < message.timeAndSalesReport.length; ++i)
                    $root.WebAPI.TimeAndSalesReport.encode(message.timeAndSalesReport[i], writer.uint32(98).fork()).ldelim();
            if (message.timeBarReport != null && message.timeBarReport.length)
                for (let i = 0; i < message.timeBarReport.length; ++i)
                    $root.WebAPI.TimeBarReport.encode(message.timeBarReport[i], writer.uint32(106).fork()).ldelim();
            if (message.pagedOrderReport != null && message.pagedOrderReport.length)
                for (let i = 0; i < message.pagedOrderReport.length; ++i)
                    $root.WebAPI.PagedOrderReport.encode(message.pagedOrderReport[i], writer.uint32(114).fork()).ldelim();
            if (message.logonResult != null && message.hasOwnProperty("logonResult"))
                $root.WebAPI.LogonResult.encode(message.logonResult, writer.uint32(802).fork()).ldelim();
            if (message.restoreSessionResult != null && message.hasOwnProperty("restoreSessionResult"))
                $root.WebAPI.RestoreSessionResult.encode(message.restoreSessionResult, writer.uint32(810).fork()).ldelim();
            if (message.loggedOff != null && message.hasOwnProperty("loggedOff"))
                $root.WebAPI.LoggedOff.encode(message.loggedOff, writer.uint32(818).fork()).ldelim();
            if (message.passwordChangeResult != null && message.hasOwnProperty("passwordChangeResult"))
                $root.WebAPI.PasswordChangeResult.encode(message.passwordChangeResult, writer.uint32(826).fork()).ldelim();
            if (message.userMessage != null && message.userMessage.length)
                for (let i = 0; i < message.userMessage.length; ++i)
                    $root.WebAPI.UserMessage.encode(message.userMessage[i], writer.uint32(834).fork()).ldelim();
            if (message.obtainDemoCredentialsResult != null && message.hasOwnProperty("obtainDemoCredentialsResult"))
                $root.WebAPI.ObtainDemoCredentialsResult.encode(message.obtainDemoCredentialsResult, writer.uint32(842).fork()).ldelim();
            if (message.userSessionStateResult != null && message.hasOwnProperty("userSessionStateResult"))
                $root.WebAPI.UserSessionStateResult.encode(message.userSessionStateResult, writer.uint32(850).fork()).ldelim();
            if (message.ping != null && message.hasOwnProperty("ping"))
                $root.WebAPI.Ping.encode(message.ping, writer.uint32(858).fork()).ldelim();
            if (message.pong != null && message.hasOwnProperty("pong"))
                $root.WebAPI.Pong.encode(message.pong, writer.uint32(866).fork()).ldelim();
            if (message.logonRoutineServer != null && message.hasOwnProperty("logonRoutineServer"))
                $root.WebAPI.LogonRoutineServer.encode(message.logonRoutineServer, writer.uint32(874).fork()).ldelim();
            if (message.passwordChangeRoutineServer != null && message.hasOwnProperty("passwordChangeRoutineServer"))
                $root.WebAPI.PasswordChangeRoutineServer.encode(message.passwordChangeRoutineServer, writer.uint32(882).fork()).ldelim();
            return writer;
        };

        ServerMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ServerMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ServerMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 100:
                    message.logonResult = $root.WebAPI.LogonResult.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.restoreSessionResult = $root.WebAPI.RestoreSessionResult.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.loggedOff = $root.WebAPI.LoggedOff.decode(reader, reader.uint32());
                    break;
                case 103:
                    message.passwordChangeResult = $root.WebAPI.PasswordChangeResult.decode(reader, reader.uint32());
                    break;
                case 104:
                    if (!(message.userMessage && message.userMessage.length))
                        message.userMessage = [];
                    message.userMessage.push($root.WebAPI.UserMessage.decode(reader, reader.uint32()));
                    break;
                case 105:
                    message.obtainDemoCredentialsResult = $root.WebAPI.ObtainDemoCredentialsResult.decode(reader, reader.uint32());
                    break;
                case 106:
                    message.userSessionStateResult = $root.WebAPI.UserSessionStateResult.decode(reader, reader.uint32());
                    break;
                case 107:
                    message.ping = $root.WebAPI.Ping.decode(reader, reader.uint32());
                    break;
                case 108:
                    message.pong = $root.WebAPI.Pong.decode(reader, reader.uint32());
                    break;
                case 109:
                    message.logonRoutineServer = $root.WebAPI.LogonRoutineServer.decode(reader, reader.uint32());
                    break;
                case 110:
                    message.passwordChangeRoutineServer = $root.WebAPI.PasswordChangeRoutineServer.decode(reader, reader.uint32());
                    break;
                case 1:
                    if (!(message.informationReport && message.informationReport.length))
                        message.informationReport = [];
                    message.informationReport.push($root.WebAPI.InformationReport.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.orderRequestReject && message.orderRequestReject.length))
                        message.orderRequestReject = [];
                    message.orderRequestReject.push($root.WebAPI.OrderRequestReject.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.tradeSubscriptionStatus && message.tradeSubscriptionStatus.length))
                        message.tradeSubscriptionStatus = [];
                    message.tradeSubscriptionStatus.push($root.WebAPI.TradeSubscriptionStatus.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.tradeSnapshotCompletion && message.tradeSnapshotCompletion.length))
                        message.tradeSnapshotCompletion = [];
                    message.tradeSnapshotCompletion.push($root.WebAPI.TradeSnapshotCompletion.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.orderStatus && message.orderStatus.length))
                        message.orderStatus = [];
                    message.orderStatus.push($root.WebAPI.OrderStatus.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.positionStatus && message.positionStatus.length))
                        message.positionStatus = [];
                    message.positionStatus.push($root.WebAPI.PositionStatus.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.collateralStatus && message.collateralStatus.length))
                        message.collateralStatus = [];
                    message.collateralStatus.push($root.WebAPI.CollateralStatus.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.marketDataSubscriptionStatus && message.marketDataSubscriptionStatus.length))
                        message.marketDataSubscriptionStatus = [];
                    message.marketDataSubscriptionStatus.push($root.WebAPI.MarketDataSubscriptionStatus.decode(reader, reader.uint32()));
                    break;
                case 9:
                    if (!(message.realTimeMarketData && message.realTimeMarketData.length))
                        message.realTimeMarketData = [];
                    message.realTimeMarketData.push($root.WebAPI.RealTimeMarketData.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.readUserAttributeResult && message.readUserAttributeResult.length))
                        message.readUserAttributeResult = [];
                    message.readUserAttributeResult.push($root.WebAPI.ReadUserAttributeResult.decode(reader, reader.uint32()));
                    break;
                case 11:
                    if (!(message.modifyUserAttributeResult && message.modifyUserAttributeResult.length))
                        message.modifyUserAttributeResult = [];
                    message.modifyUserAttributeResult.push($root.WebAPI.ModifyUserAttributeResult.decode(reader, reader.uint32()));
                    break;
                case 12:
                    if (!(message.timeAndSalesReport && message.timeAndSalesReport.length))
                        message.timeAndSalesReport = [];
                    message.timeAndSalesReport.push($root.WebAPI.TimeAndSalesReport.decode(reader, reader.uint32()));
                    break;
                case 13:
                    if (!(message.timeBarReport && message.timeBarReport.length))
                        message.timeBarReport = [];
                    message.timeBarReport.push($root.WebAPI.TimeBarReport.decode(reader, reader.uint32()));
                    break;
                case 14:
                    if (!(message.pagedOrderReport && message.pagedOrderReport.length))
                        message.pagedOrderReport = [];
                    message.pagedOrderReport.push($root.WebAPI.PagedOrderReport.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ServerMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ServerMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.logonResult != null && message.hasOwnProperty("logonResult")) {
                let error = $root.WebAPI.LogonResult.verify(message.logonResult);
                if (error)
                    return "logonResult." + error;
            }
            if (message.restoreSessionResult != null && message.hasOwnProperty("restoreSessionResult")) {
                let error = $root.WebAPI.RestoreSessionResult.verify(message.restoreSessionResult);
                if (error)
                    return "restoreSessionResult." + error;
            }
            if (message.loggedOff != null && message.hasOwnProperty("loggedOff")) {
                let error = $root.WebAPI.LoggedOff.verify(message.loggedOff);
                if (error)
                    return "loggedOff." + error;
            }
            if (message.passwordChangeResult != null && message.hasOwnProperty("passwordChangeResult")) {
                let error = $root.WebAPI.PasswordChangeResult.verify(message.passwordChangeResult);
                if (error)
                    return "passwordChangeResult." + error;
            }
            if (message.userMessage != null && message.hasOwnProperty("userMessage")) {
                if (!Array.isArray(message.userMessage))
                    return "userMessage: array expected";
                for (let i = 0; i < message.userMessage.length; ++i) {
                    let error = $root.WebAPI.UserMessage.verify(message.userMessage[i]);
                    if (error)
                        return "userMessage." + error;
                }
            }
            if (message.obtainDemoCredentialsResult != null && message.hasOwnProperty("obtainDemoCredentialsResult")) {
                let error = $root.WebAPI.ObtainDemoCredentialsResult.verify(message.obtainDemoCredentialsResult);
                if (error)
                    return "obtainDemoCredentialsResult." + error;
            }
            if (message.userSessionStateResult != null && message.hasOwnProperty("userSessionStateResult")) {
                let error = $root.WebAPI.UserSessionStateResult.verify(message.userSessionStateResult);
                if (error)
                    return "userSessionStateResult." + error;
            }
            if (message.ping != null && message.hasOwnProperty("ping")) {
                let error = $root.WebAPI.Ping.verify(message.ping);
                if (error)
                    return "ping." + error;
            }
            if (message.pong != null && message.hasOwnProperty("pong")) {
                let error = $root.WebAPI.Pong.verify(message.pong);
                if (error)
                    return "pong." + error;
            }
            if (message.logonRoutineServer != null && message.hasOwnProperty("logonRoutineServer")) {
                let error = $root.WebAPI.LogonRoutineServer.verify(message.logonRoutineServer);
                if (error)
                    return "logonRoutineServer." + error;
            }
            if (message.passwordChangeRoutineServer != null && message.hasOwnProperty("passwordChangeRoutineServer")) {
                let error = $root.WebAPI.PasswordChangeRoutineServer.verify(message.passwordChangeRoutineServer);
                if (error)
                    return "passwordChangeRoutineServer." + error;
            }
            if (message.informationReport != null && message.hasOwnProperty("informationReport")) {
                if (!Array.isArray(message.informationReport))
                    return "informationReport: array expected";
                for (let i = 0; i < message.informationReport.length; ++i) {
                    let error = $root.WebAPI.InformationReport.verify(message.informationReport[i]);
                    if (error)
                        return "informationReport." + error;
                }
            }
            if (message.orderRequestReject != null && message.hasOwnProperty("orderRequestReject")) {
                if (!Array.isArray(message.orderRequestReject))
                    return "orderRequestReject: array expected";
                for (let i = 0; i < message.orderRequestReject.length; ++i) {
                    let error = $root.WebAPI.OrderRequestReject.verify(message.orderRequestReject[i]);
                    if (error)
                        return "orderRequestReject." + error;
                }
            }
            if (message.tradeSubscriptionStatus != null && message.hasOwnProperty("tradeSubscriptionStatus")) {
                if (!Array.isArray(message.tradeSubscriptionStatus))
                    return "tradeSubscriptionStatus: array expected";
                for (let i = 0; i < message.tradeSubscriptionStatus.length; ++i) {
                    let error = $root.WebAPI.TradeSubscriptionStatus.verify(message.tradeSubscriptionStatus[i]);
                    if (error)
                        return "tradeSubscriptionStatus." + error;
                }
            }
            if (message.tradeSnapshotCompletion != null && message.hasOwnProperty("tradeSnapshotCompletion")) {
                if (!Array.isArray(message.tradeSnapshotCompletion))
                    return "tradeSnapshotCompletion: array expected";
                for (let i = 0; i < message.tradeSnapshotCompletion.length; ++i) {
                    let error = $root.WebAPI.TradeSnapshotCompletion.verify(message.tradeSnapshotCompletion[i]);
                    if (error)
                        return "tradeSnapshotCompletion." + error;
                }
            }
            if (message.orderStatus != null && message.hasOwnProperty("orderStatus")) {
                if (!Array.isArray(message.orderStatus))
                    return "orderStatus: array expected";
                for (let i = 0; i < message.orderStatus.length; ++i) {
                    let error = $root.WebAPI.OrderStatus.verify(message.orderStatus[i]);
                    if (error)
                        return "orderStatus." + error;
                }
            }
            if (message.positionStatus != null && message.hasOwnProperty("positionStatus")) {
                if (!Array.isArray(message.positionStatus))
                    return "positionStatus: array expected";
                for (let i = 0; i < message.positionStatus.length; ++i) {
                    let error = $root.WebAPI.PositionStatus.verify(message.positionStatus[i]);
                    if (error)
                        return "positionStatus." + error;
                }
            }
            if (message.collateralStatus != null && message.hasOwnProperty("collateralStatus")) {
                if (!Array.isArray(message.collateralStatus))
                    return "collateralStatus: array expected";
                for (let i = 0; i < message.collateralStatus.length; ++i) {
                    let error = $root.WebAPI.CollateralStatus.verify(message.collateralStatus[i]);
                    if (error)
                        return "collateralStatus." + error;
                }
            }
            if (message.marketDataSubscriptionStatus != null && message.hasOwnProperty("marketDataSubscriptionStatus")) {
                if (!Array.isArray(message.marketDataSubscriptionStatus))
                    return "marketDataSubscriptionStatus: array expected";
                for (let i = 0; i < message.marketDataSubscriptionStatus.length; ++i) {
                    let error = $root.WebAPI.MarketDataSubscriptionStatus.verify(message.marketDataSubscriptionStatus[i]);
                    if (error)
                        return "marketDataSubscriptionStatus." + error;
                }
            }
            if (message.realTimeMarketData != null && message.hasOwnProperty("realTimeMarketData")) {
                if (!Array.isArray(message.realTimeMarketData))
                    return "realTimeMarketData: array expected";
                for (let i = 0; i < message.realTimeMarketData.length; ++i) {
                    let error = $root.WebAPI.RealTimeMarketData.verify(message.realTimeMarketData[i]);
                    if (error)
                        return "realTimeMarketData." + error;
                }
            }
            if (message.readUserAttributeResult != null && message.hasOwnProperty("readUserAttributeResult")) {
                if (!Array.isArray(message.readUserAttributeResult))
                    return "readUserAttributeResult: array expected";
                for (let i = 0; i < message.readUserAttributeResult.length; ++i) {
                    let error = $root.WebAPI.ReadUserAttributeResult.verify(message.readUserAttributeResult[i]);
                    if (error)
                        return "readUserAttributeResult." + error;
                }
            }
            if (message.modifyUserAttributeResult != null && message.hasOwnProperty("modifyUserAttributeResult")) {
                if (!Array.isArray(message.modifyUserAttributeResult))
                    return "modifyUserAttributeResult: array expected";
                for (let i = 0; i < message.modifyUserAttributeResult.length; ++i) {
                    let error = $root.WebAPI.ModifyUserAttributeResult.verify(message.modifyUserAttributeResult[i]);
                    if (error)
                        return "modifyUserAttributeResult." + error;
                }
            }
            if (message.timeAndSalesReport != null && message.hasOwnProperty("timeAndSalesReport")) {
                if (!Array.isArray(message.timeAndSalesReport))
                    return "timeAndSalesReport: array expected";
                for (let i = 0; i < message.timeAndSalesReport.length; ++i) {
                    let error = $root.WebAPI.TimeAndSalesReport.verify(message.timeAndSalesReport[i]);
                    if (error)
                        return "timeAndSalesReport." + error;
                }
            }
            if (message.timeBarReport != null && message.hasOwnProperty("timeBarReport")) {
                if (!Array.isArray(message.timeBarReport))
                    return "timeBarReport: array expected";
                for (let i = 0; i < message.timeBarReport.length; ++i) {
                    let error = $root.WebAPI.TimeBarReport.verify(message.timeBarReport[i]);
                    if (error)
                        return "timeBarReport." + error;
                }
            }
            if (message.pagedOrderReport != null && message.hasOwnProperty("pagedOrderReport")) {
                if (!Array.isArray(message.pagedOrderReport))
                    return "pagedOrderReport: array expected";
                for (let i = 0; i < message.pagedOrderReport.length; ++i) {
                    let error = $root.WebAPI.PagedOrderReport.verify(message.pagedOrderReport[i]);
                    if (error)
                        return "pagedOrderReport." + error;
                }
            }
            return null;
        };

        ServerMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ServerMsg)
                return object;
            let message = new $root.WebAPI.ServerMsg();
            if (object.logonResult != null) {
                if (typeof object.logonResult !== "object")
                    throw TypeError(".WebAPI.ServerMsg.logonResult: object expected");
                message.logonResult = $root.WebAPI.LogonResult.fromObject(object.logonResult);
            }
            if (object.restoreSessionResult != null) {
                if (typeof object.restoreSessionResult !== "object")
                    throw TypeError(".WebAPI.ServerMsg.restoreSessionResult: object expected");
                message.restoreSessionResult = $root.WebAPI.RestoreSessionResult.fromObject(object.restoreSessionResult);
            }
            if (object.loggedOff != null) {
                if (typeof object.loggedOff !== "object")
                    throw TypeError(".WebAPI.ServerMsg.loggedOff: object expected");
                message.loggedOff = $root.WebAPI.LoggedOff.fromObject(object.loggedOff);
            }
            if (object.passwordChangeResult != null) {
                if (typeof object.passwordChangeResult !== "object")
                    throw TypeError(".WebAPI.ServerMsg.passwordChangeResult: object expected");
                message.passwordChangeResult = $root.WebAPI.PasswordChangeResult.fromObject(object.passwordChangeResult);
            }
            if (object.userMessage) {
                if (!Array.isArray(object.userMessage))
                    throw TypeError(".WebAPI.ServerMsg.userMessage: array expected");
                message.userMessage = [];
                for (let i = 0; i < object.userMessage.length; ++i) {
                    if (typeof object.userMessage[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.userMessage: object expected");
                    message.userMessage[i] = $root.WebAPI.UserMessage.fromObject(object.userMessage[i]);
                }
            }
            if (object.obtainDemoCredentialsResult != null) {
                if (typeof object.obtainDemoCredentialsResult !== "object")
                    throw TypeError(".WebAPI.ServerMsg.obtainDemoCredentialsResult: object expected");
                message.obtainDemoCredentialsResult = $root.WebAPI.ObtainDemoCredentialsResult.fromObject(object.obtainDemoCredentialsResult);
            }
            if (object.userSessionStateResult != null) {
                if (typeof object.userSessionStateResult !== "object")
                    throw TypeError(".WebAPI.ServerMsg.userSessionStateResult: object expected");
                message.userSessionStateResult = $root.WebAPI.UserSessionStateResult.fromObject(object.userSessionStateResult);
            }
            if (object.ping != null) {
                if (typeof object.ping !== "object")
                    throw TypeError(".WebAPI.ServerMsg.ping: object expected");
                message.ping = $root.WebAPI.Ping.fromObject(object.ping);
            }
            if (object.pong != null) {
                if (typeof object.pong !== "object")
                    throw TypeError(".WebAPI.ServerMsg.pong: object expected");
                message.pong = $root.WebAPI.Pong.fromObject(object.pong);
            }
            if (object.logonRoutineServer != null) {
                if (typeof object.logonRoutineServer !== "object")
                    throw TypeError(".WebAPI.ServerMsg.logonRoutineServer: object expected");
                message.logonRoutineServer = $root.WebAPI.LogonRoutineServer.fromObject(object.logonRoutineServer);
            }
            if (object.passwordChangeRoutineServer != null) {
                if (typeof object.passwordChangeRoutineServer !== "object")
                    throw TypeError(".WebAPI.ServerMsg.passwordChangeRoutineServer: object expected");
                message.passwordChangeRoutineServer = $root.WebAPI.PasswordChangeRoutineServer.fromObject(object.passwordChangeRoutineServer);
            }
            if (object.informationReport) {
                if (!Array.isArray(object.informationReport))
                    throw TypeError(".WebAPI.ServerMsg.informationReport: array expected");
                message.informationReport = [];
                for (let i = 0; i < object.informationReport.length; ++i) {
                    if (typeof object.informationReport[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.informationReport: object expected");
                    message.informationReport[i] = $root.WebAPI.InformationReport.fromObject(object.informationReport[i]);
                }
            }
            if (object.orderRequestReject) {
                if (!Array.isArray(object.orderRequestReject))
                    throw TypeError(".WebAPI.ServerMsg.orderRequestReject: array expected");
                message.orderRequestReject = [];
                for (let i = 0; i < object.orderRequestReject.length; ++i) {
                    if (typeof object.orderRequestReject[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.orderRequestReject: object expected");
                    message.orderRequestReject[i] = $root.WebAPI.OrderRequestReject.fromObject(object.orderRequestReject[i]);
                }
            }
            if (object.tradeSubscriptionStatus) {
                if (!Array.isArray(object.tradeSubscriptionStatus))
                    throw TypeError(".WebAPI.ServerMsg.tradeSubscriptionStatus: array expected");
                message.tradeSubscriptionStatus = [];
                for (let i = 0; i < object.tradeSubscriptionStatus.length; ++i) {
                    if (typeof object.tradeSubscriptionStatus[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.tradeSubscriptionStatus: object expected");
                    message.tradeSubscriptionStatus[i] = $root.WebAPI.TradeSubscriptionStatus.fromObject(object.tradeSubscriptionStatus[i]);
                }
            }
            if (object.tradeSnapshotCompletion) {
                if (!Array.isArray(object.tradeSnapshotCompletion))
                    throw TypeError(".WebAPI.ServerMsg.tradeSnapshotCompletion: array expected");
                message.tradeSnapshotCompletion = [];
                for (let i = 0; i < object.tradeSnapshotCompletion.length; ++i) {
                    if (typeof object.tradeSnapshotCompletion[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.tradeSnapshotCompletion: object expected");
                    message.tradeSnapshotCompletion[i] = $root.WebAPI.TradeSnapshotCompletion.fromObject(object.tradeSnapshotCompletion[i]);
                }
            }
            if (object.orderStatus) {
                if (!Array.isArray(object.orderStatus))
                    throw TypeError(".WebAPI.ServerMsg.orderStatus: array expected");
                message.orderStatus = [];
                for (let i = 0; i < object.orderStatus.length; ++i) {
                    if (typeof object.orderStatus[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.orderStatus: object expected");
                    message.orderStatus[i] = $root.WebAPI.OrderStatus.fromObject(object.orderStatus[i]);
                }
            }
            if (object.positionStatus) {
                if (!Array.isArray(object.positionStatus))
                    throw TypeError(".WebAPI.ServerMsg.positionStatus: array expected");
                message.positionStatus = [];
                for (let i = 0; i < object.positionStatus.length; ++i) {
                    if (typeof object.positionStatus[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.positionStatus: object expected");
                    message.positionStatus[i] = $root.WebAPI.PositionStatus.fromObject(object.positionStatus[i]);
                }
            }
            if (object.collateralStatus) {
                if (!Array.isArray(object.collateralStatus))
                    throw TypeError(".WebAPI.ServerMsg.collateralStatus: array expected");
                message.collateralStatus = [];
                for (let i = 0; i < object.collateralStatus.length; ++i) {
                    if (typeof object.collateralStatus[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.collateralStatus: object expected");
                    message.collateralStatus[i] = $root.WebAPI.CollateralStatus.fromObject(object.collateralStatus[i]);
                }
            }
            if (object.marketDataSubscriptionStatus) {
                if (!Array.isArray(object.marketDataSubscriptionStatus))
                    throw TypeError(".WebAPI.ServerMsg.marketDataSubscriptionStatus: array expected");
                message.marketDataSubscriptionStatus = [];
                for (let i = 0; i < object.marketDataSubscriptionStatus.length; ++i) {
                    if (typeof object.marketDataSubscriptionStatus[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.marketDataSubscriptionStatus: object expected");
                    message.marketDataSubscriptionStatus[i] = $root.WebAPI.MarketDataSubscriptionStatus.fromObject(object.marketDataSubscriptionStatus[i]);
                }
            }
            if (object.realTimeMarketData) {
                if (!Array.isArray(object.realTimeMarketData))
                    throw TypeError(".WebAPI.ServerMsg.realTimeMarketData: array expected");
                message.realTimeMarketData = [];
                for (let i = 0; i < object.realTimeMarketData.length; ++i) {
                    if (typeof object.realTimeMarketData[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.realTimeMarketData: object expected");
                    message.realTimeMarketData[i] = $root.WebAPI.RealTimeMarketData.fromObject(object.realTimeMarketData[i]);
                }
            }
            if (object.readUserAttributeResult) {
                if (!Array.isArray(object.readUserAttributeResult))
                    throw TypeError(".WebAPI.ServerMsg.readUserAttributeResult: array expected");
                message.readUserAttributeResult = [];
                for (let i = 0; i < object.readUserAttributeResult.length; ++i) {
                    if (typeof object.readUserAttributeResult[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.readUserAttributeResult: object expected");
                    message.readUserAttributeResult[i] = $root.WebAPI.ReadUserAttributeResult.fromObject(object.readUserAttributeResult[i]);
                }
            }
            if (object.modifyUserAttributeResult) {
                if (!Array.isArray(object.modifyUserAttributeResult))
                    throw TypeError(".WebAPI.ServerMsg.modifyUserAttributeResult: array expected");
                message.modifyUserAttributeResult = [];
                for (let i = 0; i < object.modifyUserAttributeResult.length; ++i) {
                    if (typeof object.modifyUserAttributeResult[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.modifyUserAttributeResult: object expected");
                    message.modifyUserAttributeResult[i] = $root.WebAPI.ModifyUserAttributeResult.fromObject(object.modifyUserAttributeResult[i]);
                }
            }
            if (object.timeAndSalesReport) {
                if (!Array.isArray(object.timeAndSalesReport))
                    throw TypeError(".WebAPI.ServerMsg.timeAndSalesReport: array expected");
                message.timeAndSalesReport = [];
                for (let i = 0; i < object.timeAndSalesReport.length; ++i) {
                    if (typeof object.timeAndSalesReport[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.timeAndSalesReport: object expected");
                    message.timeAndSalesReport[i] = $root.WebAPI.TimeAndSalesReport.fromObject(object.timeAndSalesReport[i]);
                }
            }
            if (object.timeBarReport) {
                if (!Array.isArray(object.timeBarReport))
                    throw TypeError(".WebAPI.ServerMsg.timeBarReport: array expected");
                message.timeBarReport = [];
                for (let i = 0; i < object.timeBarReport.length; ++i) {
                    if (typeof object.timeBarReport[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.timeBarReport: object expected");
                    message.timeBarReport[i] = $root.WebAPI.TimeBarReport.fromObject(object.timeBarReport[i]);
                }
            }
            if (object.pagedOrderReport) {
                if (!Array.isArray(object.pagedOrderReport))
                    throw TypeError(".WebAPI.ServerMsg.pagedOrderReport: array expected");
                message.pagedOrderReport = [];
                for (let i = 0; i < object.pagedOrderReport.length; ++i) {
                    if (typeof object.pagedOrderReport[i] !== "object")
                        throw TypeError(".WebAPI.ServerMsg.pagedOrderReport: object expected");
                    message.pagedOrderReport[i] = $root.WebAPI.PagedOrderReport.fromObject(object.pagedOrderReport[i]);
                }
            }
            return message;
        };

        ServerMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.informationReport = [];
                object.orderRequestReject = [];
                object.tradeSubscriptionStatus = [];
                object.tradeSnapshotCompletion = [];
                object.orderStatus = [];
                object.positionStatus = [];
                object.collateralStatus = [];
                object.marketDataSubscriptionStatus = [];
                object.realTimeMarketData = [];
                object.readUserAttributeResult = [];
                object.modifyUserAttributeResult = [];
                object.timeAndSalesReport = [];
                object.timeBarReport = [];
                object.pagedOrderReport = [];
                object.userMessage = [];
            }
            if (options.defaults) {
                object.logonResult = null;
                object.restoreSessionResult = null;
                object.loggedOff = null;
                object.passwordChangeResult = null;
                object.obtainDemoCredentialsResult = null;
                object.userSessionStateResult = null;
                object.ping = null;
                object.pong = null;
                object.logonRoutineServer = null;
                object.passwordChangeRoutineServer = null;
            }
            if (message.informationReport && message.informationReport.length) {
                object.informationReport = [];
                for (let j = 0; j < message.informationReport.length; ++j)
                    object.informationReport[j] = $root.WebAPI.InformationReport.toObject(message.informationReport[j], options);
            }
            if (message.orderRequestReject && message.orderRequestReject.length) {
                object.orderRequestReject = [];
                for (let j = 0; j < message.orderRequestReject.length; ++j)
                    object.orderRequestReject[j] = $root.WebAPI.OrderRequestReject.toObject(message.orderRequestReject[j], options);
            }
            if (message.tradeSubscriptionStatus && message.tradeSubscriptionStatus.length) {
                object.tradeSubscriptionStatus = [];
                for (let j = 0; j < message.tradeSubscriptionStatus.length; ++j)
                    object.tradeSubscriptionStatus[j] = $root.WebAPI.TradeSubscriptionStatus.toObject(message.tradeSubscriptionStatus[j], options);
            }
            if (message.tradeSnapshotCompletion && message.tradeSnapshotCompletion.length) {
                object.tradeSnapshotCompletion = [];
                for (let j = 0; j < message.tradeSnapshotCompletion.length; ++j)
                    object.tradeSnapshotCompletion[j] = $root.WebAPI.TradeSnapshotCompletion.toObject(message.tradeSnapshotCompletion[j], options);
            }
            if (message.orderStatus && message.orderStatus.length) {
                object.orderStatus = [];
                for (let j = 0; j < message.orderStatus.length; ++j)
                    object.orderStatus[j] = $root.WebAPI.OrderStatus.toObject(message.orderStatus[j], options);
            }
            if (message.positionStatus && message.positionStatus.length) {
                object.positionStatus = [];
                for (let j = 0; j < message.positionStatus.length; ++j)
                    object.positionStatus[j] = $root.WebAPI.PositionStatus.toObject(message.positionStatus[j], options);
            }
            if (message.collateralStatus && message.collateralStatus.length) {
                object.collateralStatus = [];
                for (let j = 0; j < message.collateralStatus.length; ++j)
                    object.collateralStatus[j] = $root.WebAPI.CollateralStatus.toObject(message.collateralStatus[j], options);
            }
            if (message.marketDataSubscriptionStatus && message.marketDataSubscriptionStatus.length) {
                object.marketDataSubscriptionStatus = [];
                for (let j = 0; j < message.marketDataSubscriptionStatus.length; ++j)
                    object.marketDataSubscriptionStatus[j] = $root.WebAPI.MarketDataSubscriptionStatus.toObject(message.marketDataSubscriptionStatus[j], options);
            }
            if (message.realTimeMarketData && message.realTimeMarketData.length) {
                object.realTimeMarketData = [];
                for (let j = 0; j < message.realTimeMarketData.length; ++j)
                    object.realTimeMarketData[j] = $root.WebAPI.RealTimeMarketData.toObject(message.realTimeMarketData[j], options);
            }
            if (message.readUserAttributeResult && message.readUserAttributeResult.length) {
                object.readUserAttributeResult = [];
                for (let j = 0; j < message.readUserAttributeResult.length; ++j)
                    object.readUserAttributeResult[j] = $root.WebAPI.ReadUserAttributeResult.toObject(message.readUserAttributeResult[j], options);
            }
            if (message.modifyUserAttributeResult && message.modifyUserAttributeResult.length) {
                object.modifyUserAttributeResult = [];
                for (let j = 0; j < message.modifyUserAttributeResult.length; ++j)
                    object.modifyUserAttributeResult[j] = $root.WebAPI.ModifyUserAttributeResult.toObject(message.modifyUserAttributeResult[j], options);
            }
            if (message.timeAndSalesReport && message.timeAndSalesReport.length) {
                object.timeAndSalesReport = [];
                for (let j = 0; j < message.timeAndSalesReport.length; ++j)
                    object.timeAndSalesReport[j] = $root.WebAPI.TimeAndSalesReport.toObject(message.timeAndSalesReport[j], options);
            }
            if (message.timeBarReport && message.timeBarReport.length) {
                object.timeBarReport = [];
                for (let j = 0; j < message.timeBarReport.length; ++j)
                    object.timeBarReport[j] = $root.WebAPI.TimeBarReport.toObject(message.timeBarReport[j], options);
            }
            if (message.pagedOrderReport && message.pagedOrderReport.length) {
                object.pagedOrderReport = [];
                for (let j = 0; j < message.pagedOrderReport.length; ++j)
                    object.pagedOrderReport[j] = $root.WebAPI.PagedOrderReport.toObject(message.pagedOrderReport[j], options);
            }
            if (message.logonResult != null && message.hasOwnProperty("logonResult"))
                object.logonResult = $root.WebAPI.LogonResult.toObject(message.logonResult, options);
            if (message.restoreSessionResult != null && message.hasOwnProperty("restoreSessionResult"))
                object.restoreSessionResult = $root.WebAPI.RestoreSessionResult.toObject(message.restoreSessionResult, options);
            if (message.loggedOff != null && message.hasOwnProperty("loggedOff"))
                object.loggedOff = $root.WebAPI.LoggedOff.toObject(message.loggedOff, options);
            if (message.passwordChangeResult != null && message.hasOwnProperty("passwordChangeResult"))
                object.passwordChangeResult = $root.WebAPI.PasswordChangeResult.toObject(message.passwordChangeResult, options);
            if (message.userMessage && message.userMessage.length) {
                object.userMessage = [];
                for (let j = 0; j < message.userMessage.length; ++j)
                    object.userMessage[j] = $root.WebAPI.UserMessage.toObject(message.userMessage[j], options);
            }
            if (message.obtainDemoCredentialsResult != null && message.hasOwnProperty("obtainDemoCredentialsResult"))
                object.obtainDemoCredentialsResult = $root.WebAPI.ObtainDemoCredentialsResult.toObject(message.obtainDemoCredentialsResult, options);
            if (message.userSessionStateResult != null && message.hasOwnProperty("userSessionStateResult"))
                object.userSessionStateResult = $root.WebAPI.UserSessionStateResult.toObject(message.userSessionStateResult, options);
            if (message.ping != null && message.hasOwnProperty("ping"))
                object.ping = $root.WebAPI.Ping.toObject(message.ping, options);
            if (message.pong != null && message.hasOwnProperty("pong"))
                object.pong = $root.WebAPI.Pong.toObject(message.pong, options);
            if (message.logonRoutineServer != null && message.hasOwnProperty("logonRoutineServer"))
                object.logonRoutineServer = $root.WebAPI.LogonRoutineServer.toObject(message.logonRoutineServer, options);
            if (message.passwordChangeRoutineServer != null && message.hasOwnProperty("passwordChangeRoutineServer"))
                object.passwordChangeRoutineServer = $root.WebAPI.PasswordChangeRoutineServer.toObject(message.passwordChangeRoutineServer, options);
            return object;
        };

        ServerMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerMsg;
    })();

    WebAPI.PagedOrderReport = (function() {

        function PagedOrderReport(properties) {
            this.orderStatus = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PagedOrderReport.prototype.requestId = 0;
        PagedOrderReport.prototype.totalCount = 0;
        PagedOrderReport.prototype.orderStatus = $util.emptyArray;

        PagedOrderReport.create = function create(properties) {
            return new PagedOrderReport(properties);
        };

        PagedOrderReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            writer.uint32(16).uint32(message.totalCount);
            if (message.orderStatus != null && message.orderStatus.length)
                for (let i = 0; i < message.orderStatus.length; ++i)
                    $root.WebAPI.OrderStatus.encode(message.orderStatus[i], writer.uint32(26).fork()).ldelim();
            return writer;
        };

        PagedOrderReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PagedOrderReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.PagedOrderReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.totalCount = reader.uint32();
                    break;
                case 3:
                    if (!(message.orderStatus && message.orderStatus.length))
                        message.orderStatus = [];
                    message.orderStatus.push($root.WebAPI.OrderStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            if (!message.hasOwnProperty("totalCount"))
                throw $util.ProtocolError("missing required 'totalCount'", { instance: message });
            return message;
        };

        PagedOrderReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PagedOrderReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (!$util.isInteger(message.totalCount))
                return "totalCount: integer expected";
            if (message.orderStatus != null && message.hasOwnProperty("orderStatus")) {
                if (!Array.isArray(message.orderStatus))
                    return "orderStatus: array expected";
                for (let i = 0; i < message.orderStatus.length; ++i) {
                    let error = $root.WebAPI.OrderStatus.verify(message.orderStatus[i]);
                    if (error)
                        return "orderStatus." + error;
                }
            }
            return null;
        };

        PagedOrderReport.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.PagedOrderReport)
                return object;
            let message = new $root.WebAPI.PagedOrderReport();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.totalCount != null)
                message.totalCount = object.totalCount >>> 0;
            if (object.orderStatus) {
                if (!Array.isArray(object.orderStatus))
                    throw TypeError(".WebAPI.PagedOrderReport.orderStatus: array expected");
                message.orderStatus = [];
                for (let i = 0; i < object.orderStatus.length; ++i) {
                    if (typeof object.orderStatus[i] !== "object")
                        throw TypeError(".WebAPI.PagedOrderReport.orderStatus: object expected");
                    message.orderStatus[i] = $root.WebAPI.OrderStatus.fromObject(object.orderStatus[i]);
                }
            }
            return message;
        };

        PagedOrderReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.orderStatus = [];
            if (options.defaults) {
                object.requestId = 0;
                object.totalCount = 0;
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                object.totalCount = message.totalCount;
            if (message.orderStatus && message.orderStatus.length) {
                object.orderStatus = [];
                for (let j = 0; j < message.orderStatus.length; ++j)
                    object.orderStatus[j] = $root.WebAPI.OrderStatus.toObject(message.orderStatus[j], options);
            }
            return object;
        };

        PagedOrderReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PagedOrderReport;
    })();

    WebAPI.RealTimeCollapsing = (function() {

        function RealTimeCollapsing(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RealTimeCollapsing.create = function create(properties) {
            return new RealTimeCollapsing(properties);
        };

        RealTimeCollapsing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        RealTimeCollapsing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RealTimeCollapsing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.RealTimeCollapsing();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RealTimeCollapsing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RealTimeCollapsing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        RealTimeCollapsing.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.RealTimeCollapsing)
                return object;
            return new $root.WebAPI.RealTimeCollapsing();
        };

        RealTimeCollapsing.toObject = function toObject() {
            return {};
        };

        RealTimeCollapsing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        RealTimeCollapsing.Level = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "DOM"] = 1;
            values[valuesById[2] = "DOM_BBA"] = 2;
            values[valuesById[3] = "DOM_BBA_TRADES"] = 3;
            return values;
        })();

        return RealTimeCollapsing;
    })();

    WebAPI.Logon = (function() {

        function Logon(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Logon.prototype.userName = "";
        Logon.prototype.password = "";
        Logon.prototype.oneTimePassword = "";
        Logon.prototype.privateLabel = "";
        Logon.prototype.clientId = "";
        Logon.prototype.clientVersion = "";
        Logon.prototype.dropConcurrentSession = false;
        Logon.prototype.collapsingLevel = 0;
        Logon.prototype.protocolVersionMinor = 0;
        Logon.prototype.protocolVersionMajor = 0;

        Logon.create = function create(properties) {
            return new Logon(properties);
        };

        Logon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.userName);
            writer.uint32(18).string(message.password);
            if (message.oneTimePassword != null && message.hasOwnProperty("oneTimePassword"))
                writer.uint32(26).string(message.oneTimePassword);
            if (message.privateLabel != null && message.hasOwnProperty("privateLabel"))
                writer.uint32(34).string(message.privateLabel);
            writer.uint32(42).string(message.clientId);
            writer.uint32(50).string(message.clientVersion);
            if (message.dropConcurrentSession != null && message.hasOwnProperty("dropConcurrentSession"))
                writer.uint32(56).bool(message.dropConcurrentSession);
            if (message.collapsingLevel != null && message.hasOwnProperty("collapsingLevel"))
                writer.uint32(64).uint32(message.collapsingLevel);
            if (message.protocolVersionMinor != null && message.hasOwnProperty("protocolVersionMinor"))
                writer.uint32(72).uint32(message.protocolVersionMinor);
            if (message.protocolVersionMajor != null && message.hasOwnProperty("protocolVersionMajor"))
                writer.uint32(80).uint32(message.protocolVersionMajor);
            return writer;
        };

        Logon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Logon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.Logon();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.oneTimePassword = reader.string();
                    break;
                case 4:
                    message.privateLabel = reader.string();
                    break;
                case 5:
                    message.clientId = reader.string();
                    break;
                case 6:
                    message.clientVersion = reader.string();
                    break;
                case 7:
                    message.dropConcurrentSession = reader.bool();
                    break;
                case 8:
                    message.collapsingLevel = reader.uint32();
                    break;
                case 9:
                    message.protocolVersionMinor = reader.uint32();
                    break;
                case 10:
                    message.protocolVersionMajor = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userName"))
                throw $util.ProtocolError("missing required 'userName'", { instance: message });
            if (!message.hasOwnProperty("password"))
                throw $util.ProtocolError("missing required 'password'", { instance: message });
            if (!message.hasOwnProperty("clientId"))
                throw $util.ProtocolError("missing required 'clientId'", { instance: message });
            if (!message.hasOwnProperty("clientVersion"))
                throw $util.ProtocolError("missing required 'clientVersion'", { instance: message });
            return message;
        };

        Logon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Logon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userName))
                return "userName: string expected";
            if (!$util.isString(message.password))
                return "password: string expected";
            if (message.oneTimePassword != null && message.hasOwnProperty("oneTimePassword"))
                if (!$util.isString(message.oneTimePassword))
                    return "oneTimePassword: string expected";
            if (message.privateLabel != null && message.hasOwnProperty("privateLabel"))
                if (!$util.isString(message.privateLabel))
                    return "privateLabel: string expected";
            if (!$util.isString(message.clientId))
                return "clientId: string expected";
            if (!$util.isString(message.clientVersion))
                return "clientVersion: string expected";
            if (message.dropConcurrentSession != null && message.hasOwnProperty("dropConcurrentSession"))
                if (typeof message.dropConcurrentSession !== "boolean")
                    return "dropConcurrentSession: boolean expected";
            if (message.collapsingLevel != null && message.hasOwnProperty("collapsingLevel"))
                if (!$util.isInteger(message.collapsingLevel))
                    return "collapsingLevel: integer expected";
            if (message.protocolVersionMinor != null && message.hasOwnProperty("protocolVersionMinor"))
                if (!$util.isInteger(message.protocolVersionMinor))
                    return "protocolVersionMinor: integer expected";
            if (message.protocolVersionMajor != null && message.hasOwnProperty("protocolVersionMajor"))
                if (!$util.isInteger(message.protocolVersionMajor))
                    return "protocolVersionMajor: integer expected";
            return null;
        };

        Logon.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.Logon)
                return object;
            let message = new $root.WebAPI.Logon();
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.password != null)
                message.password = String(object.password);
            if (object.oneTimePassword != null)
                message.oneTimePassword = String(object.oneTimePassword);
            if (object.privateLabel != null)
                message.privateLabel = String(object.privateLabel);
            if (object.clientId != null)
                message.clientId = String(object.clientId);
            if (object.clientVersion != null)
                message.clientVersion = String(object.clientVersion);
            if (object.dropConcurrentSession != null)
                message.dropConcurrentSession = Boolean(object.dropConcurrentSession);
            if (object.collapsingLevel != null)
                message.collapsingLevel = object.collapsingLevel >>> 0;
            if (object.protocolVersionMinor != null)
                message.protocolVersionMinor = object.protocolVersionMinor >>> 0;
            if (object.protocolVersionMajor != null)
                message.protocolVersionMajor = object.protocolVersionMajor >>> 0;
            return message;
        };

        Logon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userName = "";
                object.password = "";
                object.oneTimePassword = "";
                object.privateLabel = "";
                object.clientId = "";
                object.clientVersion = "";
                object.dropConcurrentSession = false;
                object.collapsingLevel = 0;
                object.protocolVersionMinor = 0;
                object.protocolVersionMajor = 0;
            }
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.oneTimePassword != null && message.hasOwnProperty("oneTimePassword"))
                object.oneTimePassword = message.oneTimePassword;
            if (message.privateLabel != null && message.hasOwnProperty("privateLabel"))
                object.privateLabel = message.privateLabel;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                object.clientVersion = message.clientVersion;
            if (message.dropConcurrentSession != null && message.hasOwnProperty("dropConcurrentSession"))
                object.dropConcurrentSession = message.dropConcurrentSession;
            if (message.collapsingLevel != null && message.hasOwnProperty("collapsingLevel"))
                object.collapsingLevel = message.collapsingLevel;
            if (message.protocolVersionMinor != null && message.hasOwnProperty("protocolVersionMinor"))
                object.protocolVersionMinor = message.protocolVersionMinor;
            if (message.protocolVersionMajor != null && message.hasOwnProperty("protocolVersionMajor"))
                object.protocolVersionMajor = message.protocolVersionMajor;
            return object;
        };

        Logon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Logon;
    })();

    WebAPI.LogonResult = (function() {

        function LogonResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LogonResult.prototype.resultCode = 0;
        LogonResult.prototype.baseTime = "";
        LogonResult.prototype.sessionToken = "";
        LogonResult.prototype.textMessage = "";
        LogonResult.prototype.redirectUrl = "";
        LogonResult.prototype.protocolVersionMinor = 0;
        LogonResult.prototype.protocolVersionMajor = 0;
        LogonResult.prototype.userId = 0;
        LogonResult.prototype.serverUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        LogonResult.create = function create(properties) {
            return new LogonResult(properties);
        };

        LogonResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.resultCode);
            writer.uint32(18).string(message.baseTime);
            if (message.sessionToken != null && message.hasOwnProperty("sessionToken"))
                writer.uint32(26).string(message.sessionToken);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(34).string(message.textMessage);
            if (message.redirectUrl != null && message.hasOwnProperty("redirectUrl"))
                writer.uint32(42).string(message.redirectUrl);
            writer.uint32(48).uint32(message.protocolVersionMinor);
            writer.uint32(56).uint32(message.protocolVersionMajor);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(64).sint32(message.userId);
            if (message.serverUtcTime != null && message.hasOwnProperty("serverUtcTime"))
                writer.uint32(72).sint64(message.serverUtcTime);
            return writer;
        };

        LogonResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LogonResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.LogonResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.resultCode = reader.uint32();
                    break;
                case 2:
                    message.baseTime = reader.string();
                    break;
                case 3:
                    message.sessionToken = reader.string();
                    break;
                case 4:
                    message.textMessage = reader.string();
                    break;
                case 5:
                    message.redirectUrl = reader.string();
                    break;
                case 6:
                    message.protocolVersionMinor = reader.uint32();
                    break;
                case 7:
                    message.protocolVersionMajor = reader.uint32();
                    break;
                case 8:
                    message.userId = reader.sint32();
                    break;
                case 9:
                    message.serverUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("resultCode"))
                throw $util.ProtocolError("missing required 'resultCode'", { instance: message });
            if (!message.hasOwnProperty("baseTime"))
                throw $util.ProtocolError("missing required 'baseTime'", { instance: message });
            if (!message.hasOwnProperty("protocolVersionMinor"))
                throw $util.ProtocolError("missing required 'protocolVersionMinor'", { instance: message });
            if (!message.hasOwnProperty("protocolVersionMajor"))
                throw $util.ProtocolError("missing required 'protocolVersionMajor'", { instance: message });
            return message;
        };

        LogonResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LogonResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.resultCode))
                return "resultCode: integer expected";
            if (!$util.isString(message.baseTime))
                return "baseTime: string expected";
            if (message.sessionToken != null && message.hasOwnProperty("sessionToken"))
                if (!$util.isString(message.sessionToken))
                    return "sessionToken: string expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            if (message.redirectUrl != null && message.hasOwnProperty("redirectUrl"))
                if (!$util.isString(message.redirectUrl))
                    return "redirectUrl: string expected";
            if (!$util.isInteger(message.protocolVersionMinor))
                return "protocolVersionMinor: integer expected";
            if (!$util.isInteger(message.protocolVersionMajor))
                return "protocolVersionMajor: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.serverUtcTime != null && message.hasOwnProperty("serverUtcTime"))
                if (!$util.isInteger(message.serverUtcTime) && !(message.serverUtcTime && $util.isInteger(message.serverUtcTime.low) && $util.isInteger(message.serverUtcTime.high)))
                    return "serverUtcTime: integer|Long expected";
            return null;
        };

        LogonResult.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.LogonResult)
                return object;
            let message = new $root.WebAPI.LogonResult();
            if (object.resultCode != null)
                message.resultCode = object.resultCode >>> 0;
            if (object.baseTime != null)
                message.baseTime = String(object.baseTime);
            if (object.sessionToken != null)
                message.sessionToken = String(object.sessionToken);
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            if (object.redirectUrl != null)
                message.redirectUrl = String(object.redirectUrl);
            if (object.protocolVersionMinor != null)
                message.protocolVersionMinor = object.protocolVersionMinor >>> 0;
            if (object.protocolVersionMajor != null)
                message.protocolVersionMajor = object.protocolVersionMajor >>> 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.serverUtcTime != null)
                if ($util.Long)
                    (message.serverUtcTime = $util.Long.fromValue(object.serverUtcTime)).unsigned = false;
                else if (typeof object.serverUtcTime === "string")
                    message.serverUtcTime = parseInt(object.serverUtcTime, 10);
                else if (typeof object.serverUtcTime === "number")
                    message.serverUtcTime = object.serverUtcTime;
                else if (typeof object.serverUtcTime === "object")
                    message.serverUtcTime = new $util.LongBits(object.serverUtcTime.low >>> 0, object.serverUtcTime.high >>> 0).toNumber();
            return message;
        };

        LogonResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.resultCode = 0;
                object.baseTime = "";
                object.sessionToken = "";
                object.textMessage = "";
                object.redirectUrl = "";
                object.protocolVersionMinor = 0;
                object.protocolVersionMajor = 0;
                object.userId = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.serverUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                object.resultCode = message.resultCode;
            if (message.baseTime != null && message.hasOwnProperty("baseTime"))
                object.baseTime = message.baseTime;
            if (message.sessionToken != null && message.hasOwnProperty("sessionToken"))
                object.sessionToken = message.sessionToken;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            if (message.redirectUrl != null && message.hasOwnProperty("redirectUrl"))
                object.redirectUrl = message.redirectUrl;
            if (message.protocolVersionMinor != null && message.hasOwnProperty("protocolVersionMinor"))
                object.protocolVersionMinor = message.protocolVersionMinor;
            if (message.protocolVersionMajor != null && message.hasOwnProperty("protocolVersionMajor"))
                object.protocolVersionMajor = message.protocolVersionMajor;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.serverUtcTime != null && message.hasOwnProperty("serverUtcTime"))
                if (typeof message.serverUtcTime === "number")
                    object.serverUtcTime = options.longs === String ? String(message.serverUtcTime) : message.serverUtcTime;
                else
                    object.serverUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverUtcTime) : options.longs === Number ? new $util.LongBits(message.serverUtcTime.low >>> 0, message.serverUtcTime.high >>> 0).toNumber() : message.serverUtcTime;
            return object;
        };

        LogonResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LogonResult.ResultCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[101] = "FAILURE"] = 101;
            values[valuesById[103] = "NO_ONETIME_PASSWORD"] = 103;
            values[valuesById[104] = "PASSWORD_EXPIRED"] = 104;
            values[valuesById[105] = "CONCURRENT_SESSION"] = 105;
            values[valuesById[106] = "REDIRECTED"] = 106;
            values[valuesById[107] = "ROUTINE_ERROR"] = 107;
            return values;
        })();

        return LogonResult;
    })();

    WebAPI.LogonRoutineClient = (function() {

        function LogonRoutineClient(properties) {
            this.passwordResponse = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LogonRoutineClient.prototype.logonInit = null;
        LogonRoutineClient.prototype.passwordResponse = $util.emptyArray;
        LogonRoutineClient.prototype.traderAgreementAccepted = false;
        LogonRoutineClient.prototype.abortLogon = null;

        LogonRoutineClient.create = function create(properties) {
            return new LogonRoutineClient(properties);
        };

        LogonRoutineClient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.logonInit != null && message.hasOwnProperty("logonInit"))
                $root.WebAPI.LogonInit.encode(message.logonInit, writer.uint32(10).fork()).ldelim();
            if (message.passwordResponse != null && message.passwordResponse.length)
                for (let i = 0; i < message.passwordResponse.length; ++i)
                    $root.WebAPI.PasswordResponse.encode(message.passwordResponse[i], writer.uint32(18).fork()).ldelim();
            if (message.traderAgreementAccepted != null && message.hasOwnProperty("traderAgreementAccepted"))
                writer.uint32(24).bool(message.traderAgreementAccepted);
            if (message.abortLogon != null && message.hasOwnProperty("abortLogon"))
                $root.WebAPI.AbortRoutine.encode(message.abortLogon, writer.uint32(34).fork()).ldelim();
            return writer;
        };

        LogonRoutineClient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LogonRoutineClient.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.LogonRoutineClient();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.logonInit = $root.WebAPI.LogonInit.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.passwordResponse && message.passwordResponse.length))
                        message.passwordResponse = [];
                    message.passwordResponse.push($root.WebAPI.PasswordResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.traderAgreementAccepted = reader.bool();
                    break;
                case 4:
                    message.abortLogon = $root.WebAPI.AbortRoutine.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LogonRoutineClient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LogonRoutineClient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.logonInit != null && message.hasOwnProperty("logonInit")) {
                let error = $root.WebAPI.LogonInit.verify(message.logonInit);
                if (error)
                    return "logonInit." + error;
            }
            if (message.passwordResponse != null && message.hasOwnProperty("passwordResponse")) {
                if (!Array.isArray(message.passwordResponse))
                    return "passwordResponse: array expected";
                for (let i = 0; i < message.passwordResponse.length; ++i) {
                    let error = $root.WebAPI.PasswordResponse.verify(message.passwordResponse[i]);
                    if (error)
                        return "passwordResponse." + error;
                }
            }
            if (message.traderAgreementAccepted != null && message.hasOwnProperty("traderAgreementAccepted"))
                if (typeof message.traderAgreementAccepted !== "boolean")
                    return "traderAgreementAccepted: boolean expected";
            if (message.abortLogon != null && message.hasOwnProperty("abortLogon")) {
                let error = $root.WebAPI.AbortRoutine.verify(message.abortLogon);
                if (error)
                    return "abortLogon." + error;
            }
            return null;
        };

        LogonRoutineClient.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.LogonRoutineClient)
                return object;
            let message = new $root.WebAPI.LogonRoutineClient();
            if (object.logonInit != null) {
                if (typeof object.logonInit !== "object")
                    throw TypeError(".WebAPI.LogonRoutineClient.logonInit: object expected");
                message.logonInit = $root.WebAPI.LogonInit.fromObject(object.logonInit);
            }
            if (object.passwordResponse) {
                if (!Array.isArray(object.passwordResponse))
                    throw TypeError(".WebAPI.LogonRoutineClient.passwordResponse: array expected");
                message.passwordResponse = [];
                for (let i = 0; i < object.passwordResponse.length; ++i) {
                    if (typeof object.passwordResponse[i] !== "object")
                        throw TypeError(".WebAPI.LogonRoutineClient.passwordResponse: object expected");
                    message.passwordResponse[i] = $root.WebAPI.PasswordResponse.fromObject(object.passwordResponse[i]);
                }
            }
            if (object.traderAgreementAccepted != null)
                message.traderAgreementAccepted = Boolean(object.traderAgreementAccepted);
            if (object.abortLogon != null) {
                if (typeof object.abortLogon !== "object")
                    throw TypeError(".WebAPI.LogonRoutineClient.abortLogon: object expected");
                message.abortLogon = $root.WebAPI.AbortRoutine.fromObject(object.abortLogon);
            }
            return message;
        };

        LogonRoutineClient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.passwordResponse = [];
            if (options.defaults) {
                object.logonInit = null;
                object.traderAgreementAccepted = false;
                object.abortLogon = null;
            }
            if (message.logonInit != null && message.hasOwnProperty("logonInit"))
                object.logonInit = $root.WebAPI.LogonInit.toObject(message.logonInit, options);
            if (message.passwordResponse && message.passwordResponse.length) {
                object.passwordResponse = [];
                for (let j = 0; j < message.passwordResponse.length; ++j)
                    object.passwordResponse[j] = $root.WebAPI.PasswordResponse.toObject(message.passwordResponse[j], options);
            }
            if (message.traderAgreementAccepted != null && message.hasOwnProperty("traderAgreementAccepted"))
                object.traderAgreementAccepted = message.traderAgreementAccepted;
            if (message.abortLogon != null && message.hasOwnProperty("abortLogon"))
                object.abortLogon = $root.WebAPI.AbortRoutine.toObject(message.abortLogon, options);
            return object;
        };

        LogonRoutineClient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LogonRoutineClient;
    })();

    WebAPI.LogonRoutineServer = (function() {

        function LogonRoutineServer(properties) {
            this.passwordRequest = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LogonRoutineServer.prototype.logonResult = null;
        LogonRoutineServer.prototype.passwordRequest = $util.emptyArray;
        LogonRoutineServer.prototype.traderAgreementUrl = "";

        LogonRoutineServer.create = function create(properties) {
            return new LogonRoutineServer(properties);
        };

        LogonRoutineServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.logonResult != null && message.hasOwnProperty("logonResult"))
                $root.WebAPI.LogonResult.encode(message.logonResult, writer.uint32(10).fork()).ldelim();
            if (message.passwordRequest != null && message.passwordRequest.length)
                for (let i = 0; i < message.passwordRequest.length; ++i)
                    $root.WebAPI.PasswordRequest.encode(message.passwordRequest[i], writer.uint32(18).fork()).ldelim();
            if (message.traderAgreementUrl != null && message.hasOwnProperty("traderAgreementUrl"))
                writer.uint32(26).string(message.traderAgreementUrl);
            return writer;
        };

        LogonRoutineServer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LogonRoutineServer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.LogonRoutineServer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.logonResult = $root.WebAPI.LogonResult.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.passwordRequest && message.passwordRequest.length))
                        message.passwordRequest = [];
                    message.passwordRequest.push($root.WebAPI.PasswordRequest.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.traderAgreementUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LogonRoutineServer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LogonRoutineServer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.logonResult != null && message.hasOwnProperty("logonResult")) {
                let error = $root.WebAPI.LogonResult.verify(message.logonResult);
                if (error)
                    return "logonResult." + error;
            }
            if (message.passwordRequest != null && message.hasOwnProperty("passwordRequest")) {
                if (!Array.isArray(message.passwordRequest))
                    return "passwordRequest: array expected";
                for (let i = 0; i < message.passwordRequest.length; ++i) {
                    let error = $root.WebAPI.PasswordRequest.verify(message.passwordRequest[i]);
                    if (error)
                        return "passwordRequest." + error;
                }
            }
            if (message.traderAgreementUrl != null && message.hasOwnProperty("traderAgreementUrl"))
                if (!$util.isString(message.traderAgreementUrl))
                    return "traderAgreementUrl: string expected";
            return null;
        };

        LogonRoutineServer.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.LogonRoutineServer)
                return object;
            let message = new $root.WebAPI.LogonRoutineServer();
            if (object.logonResult != null) {
                if (typeof object.logonResult !== "object")
                    throw TypeError(".WebAPI.LogonRoutineServer.logonResult: object expected");
                message.logonResult = $root.WebAPI.LogonResult.fromObject(object.logonResult);
            }
            if (object.passwordRequest) {
                if (!Array.isArray(object.passwordRequest))
                    throw TypeError(".WebAPI.LogonRoutineServer.passwordRequest: array expected");
                message.passwordRequest = [];
                for (let i = 0; i < object.passwordRequest.length; ++i) {
                    if (typeof object.passwordRequest[i] !== "object")
                        throw TypeError(".WebAPI.LogonRoutineServer.passwordRequest: object expected");
                    message.passwordRequest[i] = $root.WebAPI.PasswordRequest.fromObject(object.passwordRequest[i]);
                }
            }
            if (object.traderAgreementUrl != null)
                message.traderAgreementUrl = String(object.traderAgreementUrl);
            return message;
        };

        LogonRoutineServer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.passwordRequest = [];
            if (options.defaults) {
                object.logonResult = null;
                object.traderAgreementUrl = "";
            }
            if (message.logonResult != null && message.hasOwnProperty("logonResult"))
                object.logonResult = $root.WebAPI.LogonResult.toObject(message.logonResult, options);
            if (message.passwordRequest && message.passwordRequest.length) {
                object.passwordRequest = [];
                for (let j = 0; j < message.passwordRequest.length; ++j)
                    object.passwordRequest[j] = $root.WebAPI.PasswordRequest.toObject(message.passwordRequest[j], options);
            }
            if (message.traderAgreementUrl != null && message.hasOwnProperty("traderAgreementUrl"))
                object.traderAgreementUrl = message.traderAgreementUrl;
            return object;
        };

        LogonRoutineServer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LogonRoutineServer;
    })();

    WebAPI.PasswordChangeRoutineClient = (function() {

        function PasswordChangeRoutineClient(properties) {
            this.passwordResponse = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PasswordChangeRoutineClient.prototype.initPasswordChange = false;
        PasswordChangeRoutineClient.prototype.passwordResponse = $util.emptyArray;
        PasswordChangeRoutineClient.prototype.abortPasswordChange = null;

        PasswordChangeRoutineClient.create = function create(properties) {
            return new PasswordChangeRoutineClient(properties);
        };

        PasswordChangeRoutineClient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.initPasswordChange != null && message.hasOwnProperty("initPasswordChange"))
                writer.uint32(8).bool(message.initPasswordChange);
            if (message.passwordResponse != null && message.passwordResponse.length)
                for (let i = 0; i < message.passwordResponse.length; ++i)
                    $root.WebAPI.PasswordResponse.encode(message.passwordResponse[i], writer.uint32(18).fork()).ldelim();
            if (message.abortPasswordChange != null && message.hasOwnProperty("abortPasswordChange"))
                $root.WebAPI.AbortRoutine.encode(message.abortPasswordChange, writer.uint32(26).fork()).ldelim();
            return writer;
        };

        PasswordChangeRoutineClient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PasswordChangeRoutineClient.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.PasswordChangeRoutineClient();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.initPasswordChange = reader.bool();
                    break;
                case 2:
                    if (!(message.passwordResponse && message.passwordResponse.length))
                        message.passwordResponse = [];
                    message.passwordResponse.push($root.WebAPI.PasswordResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.abortPasswordChange = $root.WebAPI.AbortRoutine.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PasswordChangeRoutineClient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PasswordChangeRoutineClient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.initPasswordChange != null && message.hasOwnProperty("initPasswordChange"))
                if (typeof message.initPasswordChange !== "boolean")
                    return "initPasswordChange: boolean expected";
            if (message.passwordResponse != null && message.hasOwnProperty("passwordResponse")) {
                if (!Array.isArray(message.passwordResponse))
                    return "passwordResponse: array expected";
                for (let i = 0; i < message.passwordResponse.length; ++i) {
                    let error = $root.WebAPI.PasswordResponse.verify(message.passwordResponse[i]);
                    if (error)
                        return "passwordResponse." + error;
                }
            }
            if (message.abortPasswordChange != null && message.hasOwnProperty("abortPasswordChange")) {
                let error = $root.WebAPI.AbortRoutine.verify(message.abortPasswordChange);
                if (error)
                    return "abortPasswordChange." + error;
            }
            return null;
        };

        PasswordChangeRoutineClient.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.PasswordChangeRoutineClient)
                return object;
            let message = new $root.WebAPI.PasswordChangeRoutineClient();
            if (object.initPasswordChange != null)
                message.initPasswordChange = Boolean(object.initPasswordChange);
            if (object.passwordResponse) {
                if (!Array.isArray(object.passwordResponse))
                    throw TypeError(".WebAPI.PasswordChangeRoutineClient.passwordResponse: array expected");
                message.passwordResponse = [];
                for (let i = 0; i < object.passwordResponse.length; ++i) {
                    if (typeof object.passwordResponse[i] !== "object")
                        throw TypeError(".WebAPI.PasswordChangeRoutineClient.passwordResponse: object expected");
                    message.passwordResponse[i] = $root.WebAPI.PasswordResponse.fromObject(object.passwordResponse[i]);
                }
            }
            if (object.abortPasswordChange != null) {
                if (typeof object.abortPasswordChange !== "object")
                    throw TypeError(".WebAPI.PasswordChangeRoutineClient.abortPasswordChange: object expected");
                message.abortPasswordChange = $root.WebAPI.AbortRoutine.fromObject(object.abortPasswordChange);
            }
            return message;
        };

        PasswordChangeRoutineClient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.passwordResponse = [];
            if (options.defaults) {
                object.initPasswordChange = false;
                object.abortPasswordChange = null;
            }
            if (message.initPasswordChange != null && message.hasOwnProperty("initPasswordChange"))
                object.initPasswordChange = message.initPasswordChange;
            if (message.passwordResponse && message.passwordResponse.length) {
                object.passwordResponse = [];
                for (let j = 0; j < message.passwordResponse.length; ++j)
                    object.passwordResponse[j] = $root.WebAPI.PasswordResponse.toObject(message.passwordResponse[j], options);
            }
            if (message.abortPasswordChange != null && message.hasOwnProperty("abortPasswordChange"))
                object.abortPasswordChange = $root.WebAPI.AbortRoutine.toObject(message.abortPasswordChange, options);
            return object;
        };

        PasswordChangeRoutineClient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PasswordChangeRoutineClient;
    })();

    WebAPI.PasswordChangeRoutineServer = (function() {

        function PasswordChangeRoutineServer(properties) {
            this.passwordRequest = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PasswordChangeRoutineServer.prototype.passwordRequest = $util.emptyArray;
        PasswordChangeRoutineServer.prototype.passwordChangeResult = null;

        PasswordChangeRoutineServer.create = function create(properties) {
            return new PasswordChangeRoutineServer(properties);
        };

        PasswordChangeRoutineServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.passwordRequest != null && message.passwordRequest.length)
                for (let i = 0; i < message.passwordRequest.length; ++i)
                    $root.WebAPI.PasswordRequest.encode(message.passwordRequest[i], writer.uint32(10).fork()).ldelim();
            if (message.passwordChangeResult != null && message.hasOwnProperty("passwordChangeResult"))
                $root.WebAPI.PasswordChangeResult.encode(message.passwordChangeResult, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        PasswordChangeRoutineServer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PasswordChangeRoutineServer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.PasswordChangeRoutineServer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.passwordRequest && message.passwordRequest.length))
                        message.passwordRequest = [];
                    message.passwordRequest.push($root.WebAPI.PasswordRequest.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.passwordChangeResult = $root.WebAPI.PasswordChangeResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PasswordChangeRoutineServer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PasswordChangeRoutineServer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.passwordRequest != null && message.hasOwnProperty("passwordRequest")) {
                if (!Array.isArray(message.passwordRequest))
                    return "passwordRequest: array expected";
                for (let i = 0; i < message.passwordRequest.length; ++i) {
                    let error = $root.WebAPI.PasswordRequest.verify(message.passwordRequest[i]);
                    if (error)
                        return "passwordRequest." + error;
                }
            }
            if (message.passwordChangeResult != null && message.hasOwnProperty("passwordChangeResult")) {
                let error = $root.WebAPI.PasswordChangeResult.verify(message.passwordChangeResult);
                if (error)
                    return "passwordChangeResult." + error;
            }
            return null;
        };

        PasswordChangeRoutineServer.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.PasswordChangeRoutineServer)
                return object;
            let message = new $root.WebAPI.PasswordChangeRoutineServer();
            if (object.passwordRequest) {
                if (!Array.isArray(object.passwordRequest))
                    throw TypeError(".WebAPI.PasswordChangeRoutineServer.passwordRequest: array expected");
                message.passwordRequest = [];
                for (let i = 0; i < object.passwordRequest.length; ++i) {
                    if (typeof object.passwordRequest[i] !== "object")
                        throw TypeError(".WebAPI.PasswordChangeRoutineServer.passwordRequest: object expected");
                    message.passwordRequest[i] = $root.WebAPI.PasswordRequest.fromObject(object.passwordRequest[i]);
                }
            }
            if (object.passwordChangeResult != null) {
                if (typeof object.passwordChangeResult !== "object")
                    throw TypeError(".WebAPI.PasswordChangeRoutineServer.passwordChangeResult: object expected");
                message.passwordChangeResult = $root.WebAPI.PasswordChangeResult.fromObject(object.passwordChangeResult);
            }
            return message;
        };

        PasswordChangeRoutineServer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.passwordRequest = [];
            if (options.defaults)
                object.passwordChangeResult = null;
            if (message.passwordRequest && message.passwordRequest.length) {
                object.passwordRequest = [];
                for (let j = 0; j < message.passwordRequest.length; ++j)
                    object.passwordRequest[j] = $root.WebAPI.PasswordRequest.toObject(message.passwordRequest[j], options);
            }
            if (message.passwordChangeResult != null && message.hasOwnProperty("passwordChangeResult"))
                object.passwordChangeResult = $root.WebAPI.PasswordChangeResult.toObject(message.passwordChangeResult, options);
            return object;
        };

        PasswordChangeRoutineServer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PasswordChangeRoutineServer;
    })();

    WebAPI.AbortRoutine = (function() {

        function AbortRoutine(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        AbortRoutine.prototype.comment = "";

        AbortRoutine.create = function create(properties) {
            return new AbortRoutine(properties);
        };

        AbortRoutine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.comment != null && message.hasOwnProperty("comment"))
                writer.uint32(10).string(message.comment);
            return writer;
        };

        AbortRoutine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        AbortRoutine.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.AbortRoutine();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.comment = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        AbortRoutine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AbortRoutine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.comment != null && message.hasOwnProperty("comment"))
                if (!$util.isString(message.comment))
                    return "comment: string expected";
            return null;
        };

        AbortRoutine.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.AbortRoutine)
                return object;
            let message = new $root.WebAPI.AbortRoutine();
            if (object.comment != null)
                message.comment = String(object.comment);
            return message;
        };

        AbortRoutine.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.comment = "";
            if (message.comment != null && message.hasOwnProperty("comment"))
                object.comment = message.comment;
            return object;
        };

        AbortRoutine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AbortRoutine;
    })();

    WebAPI.LogonInit = (function() {

        function LogonInit(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LogonInit.prototype.userName = "";
        LogonInit.prototype.privateLabel = "";
        LogonInit.prototype.clientId = "";
        LogonInit.prototype.clientVersion = "";
        LogonInit.prototype.dropConcurrentSession = false;
        LogonInit.prototype.collapsingLevel = 0;
        LogonInit.prototype.protocolVersionMinor = 0;
        LogonInit.prototype.protocolVersionMajor = 0;

        LogonInit.create = function create(properties) {
            return new LogonInit(properties);
        };

        LogonInit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.userName);
            if (message.privateLabel != null && message.hasOwnProperty("privateLabel"))
                writer.uint32(18).string(message.privateLabel);
            writer.uint32(26).string(message.clientId);
            writer.uint32(34).string(message.clientVersion);
            if (message.dropConcurrentSession != null && message.hasOwnProperty("dropConcurrentSession"))
                writer.uint32(40).bool(message.dropConcurrentSession);
            if (message.collapsingLevel != null && message.hasOwnProperty("collapsingLevel"))
                writer.uint32(48).uint32(message.collapsingLevel);
            if (message.protocolVersionMinor != null && message.hasOwnProperty("protocolVersionMinor"))
                writer.uint32(56).uint32(message.protocolVersionMinor);
            if (message.protocolVersionMajor != null && message.hasOwnProperty("protocolVersionMajor"))
                writer.uint32(64).uint32(message.protocolVersionMajor);
            return writer;
        };

        LogonInit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LogonInit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.LogonInit();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.privateLabel = reader.string();
                    break;
                case 3:
                    message.clientId = reader.string();
                    break;
                case 4:
                    message.clientVersion = reader.string();
                    break;
                case 5:
                    message.dropConcurrentSession = reader.bool();
                    break;
                case 6:
                    message.collapsingLevel = reader.uint32();
                    break;
                case 7:
                    message.protocolVersionMinor = reader.uint32();
                    break;
                case 8:
                    message.protocolVersionMajor = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userName"))
                throw $util.ProtocolError("missing required 'userName'", { instance: message });
            if (!message.hasOwnProperty("clientId"))
                throw $util.ProtocolError("missing required 'clientId'", { instance: message });
            if (!message.hasOwnProperty("clientVersion"))
                throw $util.ProtocolError("missing required 'clientVersion'", { instance: message });
            return message;
        };

        LogonInit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LogonInit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userName))
                return "userName: string expected";
            if (message.privateLabel != null && message.hasOwnProperty("privateLabel"))
                if (!$util.isString(message.privateLabel))
                    return "privateLabel: string expected";
            if (!$util.isString(message.clientId))
                return "clientId: string expected";
            if (!$util.isString(message.clientVersion))
                return "clientVersion: string expected";
            if (message.dropConcurrentSession != null && message.hasOwnProperty("dropConcurrentSession"))
                if (typeof message.dropConcurrentSession !== "boolean")
                    return "dropConcurrentSession: boolean expected";
            if (message.collapsingLevel != null && message.hasOwnProperty("collapsingLevel"))
                if (!$util.isInteger(message.collapsingLevel))
                    return "collapsingLevel: integer expected";
            if (message.protocolVersionMinor != null && message.hasOwnProperty("protocolVersionMinor"))
                if (!$util.isInteger(message.protocolVersionMinor))
                    return "protocolVersionMinor: integer expected";
            if (message.protocolVersionMajor != null && message.hasOwnProperty("protocolVersionMajor"))
                if (!$util.isInteger(message.protocolVersionMajor))
                    return "protocolVersionMajor: integer expected";
            return null;
        };

        LogonInit.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.LogonInit)
                return object;
            let message = new $root.WebAPI.LogonInit();
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.privateLabel != null)
                message.privateLabel = String(object.privateLabel);
            if (object.clientId != null)
                message.clientId = String(object.clientId);
            if (object.clientVersion != null)
                message.clientVersion = String(object.clientVersion);
            if (object.dropConcurrentSession != null)
                message.dropConcurrentSession = Boolean(object.dropConcurrentSession);
            if (object.collapsingLevel != null)
                message.collapsingLevel = object.collapsingLevel >>> 0;
            if (object.protocolVersionMinor != null)
                message.protocolVersionMinor = object.protocolVersionMinor >>> 0;
            if (object.protocolVersionMajor != null)
                message.protocolVersionMajor = object.protocolVersionMajor >>> 0;
            return message;
        };

        LogonInit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userName = "";
                object.privateLabel = "";
                object.clientId = "";
                object.clientVersion = "";
                object.dropConcurrentSession = false;
                object.collapsingLevel = 0;
                object.protocolVersionMinor = 0;
                object.protocolVersionMajor = 0;
            }
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.privateLabel != null && message.hasOwnProperty("privateLabel"))
                object.privateLabel = message.privateLabel;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                object.clientVersion = message.clientVersion;
            if (message.dropConcurrentSession != null && message.hasOwnProperty("dropConcurrentSession"))
                object.dropConcurrentSession = message.dropConcurrentSession;
            if (message.collapsingLevel != null && message.hasOwnProperty("collapsingLevel"))
                object.collapsingLevel = message.collapsingLevel;
            if (message.protocolVersionMinor != null && message.hasOwnProperty("protocolVersionMinor"))
                object.protocolVersionMinor = message.protocolVersionMinor;
            if (message.protocolVersionMajor != null && message.hasOwnProperty("protocolVersionMajor"))
                object.protocolVersionMajor = message.protocolVersionMajor;
            return object;
        };

        LogonInit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LogonInit;
    })();

    WebAPI.PasswordRequest = (function() {

        function PasswordRequest(properties) {
            this.encoding = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PasswordRequest.prototype.requestId = 0;
        PasswordRequest.prototype.passwordType = 0;
        PasswordRequest.prototype.userPromptType = "";
        PasswordRequest.prototype.userPromptTypeAlt = "";
        PasswordRequest.prototype.userPrompt = "";
        PasswordRequest.prototype.encoding = $util.emptyArray;

        PasswordRequest.create = function create(properties) {
            return new PasswordRequest(properties);
        };

        PasswordRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            writer.uint32(16).uint32(message.passwordType);
            if (message.userPromptType != null && message.hasOwnProperty("userPromptType"))
                writer.uint32(26).string(message.userPromptType);
            if (message.userPromptTypeAlt != null && message.hasOwnProperty("userPromptTypeAlt"))
                writer.uint32(34).string(message.userPromptTypeAlt);
            if (message.userPrompt != null && message.hasOwnProperty("userPrompt"))
                writer.uint32(42).string(message.userPrompt);
            if (message.encoding != null && message.encoding.length)
                for (let i = 0; i < message.encoding.length; ++i)
                    $root.WebAPI.Encoding.encode(message.encoding[i], writer.uint32(50).fork()).ldelim();
            return writer;
        };

        PasswordRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PasswordRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.PasswordRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.passwordType = reader.uint32();
                    break;
                case 3:
                    message.userPromptType = reader.string();
                    break;
                case 4:
                    message.userPromptTypeAlt = reader.string();
                    break;
                case 5:
                    message.userPrompt = reader.string();
                    break;
                case 6:
                    if (!(message.encoding && message.encoding.length))
                        message.encoding = [];
                    message.encoding.push($root.WebAPI.Encoding.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            if (!message.hasOwnProperty("passwordType"))
                throw $util.ProtocolError("missing required 'passwordType'", { instance: message });
            return message;
        };

        PasswordRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PasswordRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (!$util.isInteger(message.passwordType))
                return "passwordType: integer expected";
            if (message.userPromptType != null && message.hasOwnProperty("userPromptType"))
                if (!$util.isString(message.userPromptType))
                    return "userPromptType: string expected";
            if (message.userPromptTypeAlt != null && message.hasOwnProperty("userPromptTypeAlt"))
                if (!$util.isString(message.userPromptTypeAlt))
                    return "userPromptTypeAlt: string expected";
            if (message.userPrompt != null && message.hasOwnProperty("userPrompt"))
                if (!$util.isString(message.userPrompt))
                    return "userPrompt: string expected";
            if (message.encoding != null && message.hasOwnProperty("encoding")) {
                if (!Array.isArray(message.encoding))
                    return "encoding: array expected";
                for (let i = 0; i < message.encoding.length; ++i) {
                    let error = $root.WebAPI.Encoding.verify(message.encoding[i]);
                    if (error)
                        return "encoding." + error;
                }
            }
            return null;
        };

        PasswordRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.PasswordRequest)
                return object;
            let message = new $root.WebAPI.PasswordRequest();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.passwordType != null)
                message.passwordType = object.passwordType >>> 0;
            if (object.userPromptType != null)
                message.userPromptType = String(object.userPromptType);
            if (object.userPromptTypeAlt != null)
                message.userPromptTypeAlt = String(object.userPromptTypeAlt);
            if (object.userPrompt != null)
                message.userPrompt = String(object.userPrompt);
            if (object.encoding) {
                if (!Array.isArray(object.encoding))
                    throw TypeError(".WebAPI.PasswordRequest.encoding: array expected");
                message.encoding = [];
                for (let i = 0; i < object.encoding.length; ++i) {
                    if (typeof object.encoding[i] !== "object")
                        throw TypeError(".WebAPI.PasswordRequest.encoding: object expected");
                    message.encoding[i] = $root.WebAPI.Encoding.fromObject(object.encoding[i]);
                }
            }
            return message;
        };

        PasswordRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.encoding = [];
            if (options.defaults) {
                object.requestId = 0;
                object.passwordType = 0;
                object.userPromptType = "";
                object.userPromptTypeAlt = "";
                object.userPrompt = "";
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.passwordType != null && message.hasOwnProperty("passwordType"))
                object.passwordType = message.passwordType;
            if (message.userPromptType != null && message.hasOwnProperty("userPromptType"))
                object.userPromptType = message.userPromptType;
            if (message.userPromptTypeAlt != null && message.hasOwnProperty("userPromptTypeAlt"))
                object.userPromptTypeAlt = message.userPromptTypeAlt;
            if (message.userPrompt != null && message.hasOwnProperty("userPrompt"))
                object.userPrompt = message.userPrompt;
            if (message.encoding && message.encoding.length) {
                object.encoding = [];
                for (let j = 0; j < message.encoding.length; ++j)
                    object.encoding[j] = $root.WebAPI.Encoding.toObject(message.encoding[j], options);
            }
            return object;
        };

        PasswordRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PasswordRequest.PasswordType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "STATIC"] = 1;
            values[valuesById[2] = "ONE_TIME"] = 2;
            values[valuesById[3] = "NEW_STATIC"] = 3;
            values[valuesById[4] = "CUR_AND_NEW_STATIC"] = 4;
            values[valuesById[5] = "TEXT"] = 5;
            return values;
        })();

        return PasswordRequest;
    })();

    WebAPI.PasswordResponse = (function() {

        function PasswordResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PasswordResponse.prototype.requestId = 0;
        PasswordResponse.prototype.encodingType = "";
        PasswordResponse.prototype.password = "";

        PasswordResponse.create = function create(properties) {
            return new PasswordResponse(properties);
        };

        PasswordResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            writer.uint32(18).string(message.encodingType);
            writer.uint32(26).string(message.password);
            return writer;
        };

        PasswordResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PasswordResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.PasswordResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.encodingType = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            if (!message.hasOwnProperty("encodingType"))
                throw $util.ProtocolError("missing required 'encodingType'", { instance: message });
            if (!message.hasOwnProperty("password"))
                throw $util.ProtocolError("missing required 'password'", { instance: message });
            return message;
        };

        PasswordResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PasswordResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (!$util.isString(message.encodingType))
                return "encodingType: string expected";
            if (!$util.isString(message.password))
                return "password: string expected";
            return null;
        };

        PasswordResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.PasswordResponse)
                return object;
            let message = new $root.WebAPI.PasswordResponse();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.encodingType != null)
                message.encodingType = String(object.encodingType);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        PasswordResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.requestId = 0;
                object.encodingType = "";
                object.password = "";
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.encodingType != null && message.hasOwnProperty("encodingType"))
                object.encodingType = message.encodingType;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        PasswordResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PasswordResponse;
    })();

    WebAPI.Encoding = (function() {

        function Encoding(properties) {
            this.encodingParameter = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Encoding.prototype.encodingType = "";
        Encoding.prototype.priorityRank = 0;
        Encoding.prototype.encodingParameter = $util.emptyArray;

        Encoding.create = function create(properties) {
            return new Encoding(properties);
        };

        Encoding.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.encodingType);
            writer.uint32(16).uint32(message.priorityRank);
            if (message.encodingParameter != null && message.encodingParameter.length)
                for (let i = 0; i < message.encodingParameter.length; ++i)
                    $root.WebAPI.EncodingParameter.encode(message.encodingParameter[i], writer.uint32(26).fork()).ldelim();
            return writer;
        };

        Encoding.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Encoding.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.Encoding();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encodingType = reader.string();
                    break;
                case 2:
                    message.priorityRank = reader.uint32();
                    break;
                case 3:
                    if (!(message.encodingParameter && message.encodingParameter.length))
                        message.encodingParameter = [];
                    message.encodingParameter.push($root.WebAPI.EncodingParameter.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("encodingType"))
                throw $util.ProtocolError("missing required 'encodingType'", { instance: message });
            if (!message.hasOwnProperty("priorityRank"))
                throw $util.ProtocolError("missing required 'priorityRank'", { instance: message });
            return message;
        };

        Encoding.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Encoding.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.encodingType))
                return "encodingType: string expected";
            if (!$util.isInteger(message.priorityRank))
                return "priorityRank: integer expected";
            if (message.encodingParameter != null && message.hasOwnProperty("encodingParameter")) {
                if (!Array.isArray(message.encodingParameter))
                    return "encodingParameter: array expected";
                for (let i = 0; i < message.encodingParameter.length; ++i) {
                    let error = $root.WebAPI.EncodingParameter.verify(message.encodingParameter[i]);
                    if (error)
                        return "encodingParameter." + error;
                }
            }
            return null;
        };

        Encoding.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.Encoding)
                return object;
            let message = new $root.WebAPI.Encoding();
            if (object.encodingType != null)
                message.encodingType = String(object.encodingType);
            if (object.priorityRank != null)
                message.priorityRank = object.priorityRank >>> 0;
            if (object.encodingParameter) {
                if (!Array.isArray(object.encodingParameter))
                    throw TypeError(".WebAPI.Encoding.encodingParameter: array expected");
                message.encodingParameter = [];
                for (let i = 0; i < object.encodingParameter.length; ++i) {
                    if (typeof object.encodingParameter[i] !== "object")
                        throw TypeError(".WebAPI.Encoding.encodingParameter: object expected");
                    message.encodingParameter[i] = $root.WebAPI.EncodingParameter.fromObject(object.encodingParameter[i]);
                }
            }
            return message;
        };

        Encoding.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.encodingParameter = [];
            if (options.defaults) {
                object.encodingType = "";
                object.priorityRank = 0;
            }
            if (message.encodingType != null && message.hasOwnProperty("encodingType"))
                object.encodingType = message.encodingType;
            if (message.priorityRank != null && message.hasOwnProperty("priorityRank"))
                object.priorityRank = message.priorityRank;
            if (message.encodingParameter && message.encodingParameter.length) {
                object.encodingParameter = [];
                for (let j = 0; j < message.encodingParameter.length; ++j)
                    object.encodingParameter[j] = $root.WebAPI.EncodingParameter.toObject(message.encodingParameter[j], options);
            }
            return object;
        };

        Encoding.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Encoding;
    })();

    WebAPI.EncodingParameter = (function() {

        function EncodingParameter(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        EncodingParameter.prototype.name = "";
        EncodingParameter.prototype.value = "";

        EncodingParameter.create = function create(properties) {
            return new EncodingParameter(properties);
        };

        EncodingParameter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.name);
            writer.uint32(18).string(message.value);
            return writer;
        };

        EncodingParameter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        EncodingParameter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.EncodingParameter();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        EncodingParameter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        EncodingParameter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.value))
                return "value: string expected";
            return null;
        };

        EncodingParameter.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.EncodingParameter)
                return object;
            let message = new $root.WebAPI.EncodingParameter();
            if (object.name != null)
                message.name = String(object.name);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        EncodingParameter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.value = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        EncodingParameter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EncodingParameter;
    })();

    WebAPI.RestoreSession = (function() {

        function RestoreSession(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RestoreSession.prototype.sessionToken = "";

        RestoreSession.create = function create(properties) {
            return new RestoreSession(properties);
        };

        RestoreSession.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.sessionToken);
            return writer;
        };

        RestoreSession.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RestoreSession.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.RestoreSession();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sessionToken"))
                throw $util.ProtocolError("missing required 'sessionToken'", { instance: message });
            return message;
        };

        RestoreSession.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RestoreSession.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sessionToken))
                return "sessionToken: string expected";
            return null;
        };

        RestoreSession.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.RestoreSession)
                return object;
            let message = new $root.WebAPI.RestoreSession();
            if (object.sessionToken != null)
                message.sessionToken = String(object.sessionToken);
            return message;
        };

        RestoreSession.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.sessionToken = "";
            if (message.sessionToken != null && message.hasOwnProperty("sessionToken"))
                object.sessionToken = message.sessionToken;
            return object;
        };

        RestoreSession.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RestoreSession;
    })();

    WebAPI.RestoreSessionResult = (function() {

        function RestoreSessionResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RestoreSessionResult.prototype.resultCode = 0;
        RestoreSessionResult.prototype.baseTime = "";
        RestoreSessionResult.prototype.serverUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        RestoreSessionResult.create = function create(properties) {
            return new RestoreSessionResult(properties);
        };

        RestoreSessionResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.resultCode);
            writer.uint32(18).string(message.baseTime);
            if (message.serverUtcTime != null && message.hasOwnProperty("serverUtcTime"))
                writer.uint32(24).sint64(message.serverUtcTime);
            return writer;
        };

        RestoreSessionResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RestoreSessionResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.RestoreSessionResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.resultCode = reader.uint32();
                    break;
                case 2:
                    message.baseTime = reader.string();
                    break;
                case 3:
                    message.serverUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("resultCode"))
                throw $util.ProtocolError("missing required 'resultCode'", { instance: message });
            if (!message.hasOwnProperty("baseTime"))
                throw $util.ProtocolError("missing required 'baseTime'", { instance: message });
            return message;
        };

        RestoreSessionResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RestoreSessionResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.resultCode))
                return "resultCode: integer expected";
            if (!$util.isString(message.baseTime))
                return "baseTime: string expected";
            if (message.serverUtcTime != null && message.hasOwnProperty("serverUtcTime"))
                if (!$util.isInteger(message.serverUtcTime) && !(message.serverUtcTime && $util.isInteger(message.serverUtcTime.low) && $util.isInteger(message.serverUtcTime.high)))
                    return "serverUtcTime: integer|Long expected";
            return null;
        };

        RestoreSessionResult.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.RestoreSessionResult)
                return object;
            let message = new $root.WebAPI.RestoreSessionResult();
            if (object.resultCode != null)
                message.resultCode = object.resultCode >>> 0;
            if (object.baseTime != null)
                message.baseTime = String(object.baseTime);
            if (object.serverUtcTime != null)
                if ($util.Long)
                    (message.serverUtcTime = $util.Long.fromValue(object.serverUtcTime)).unsigned = false;
                else if (typeof object.serverUtcTime === "string")
                    message.serverUtcTime = parseInt(object.serverUtcTime, 10);
                else if (typeof object.serverUtcTime === "number")
                    message.serverUtcTime = object.serverUtcTime;
                else if (typeof object.serverUtcTime === "object")
                    message.serverUtcTime = new $util.LongBits(object.serverUtcTime.low >>> 0, object.serverUtcTime.high >>> 0).toNumber();
            return message;
        };

        RestoreSessionResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.resultCode = 0;
                object.baseTime = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.serverUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                object.resultCode = message.resultCode;
            if (message.baseTime != null && message.hasOwnProperty("baseTime"))
                object.baseTime = message.baseTime;
            if (message.serverUtcTime != null && message.hasOwnProperty("serverUtcTime"))
                if (typeof message.serverUtcTime === "number")
                    object.serverUtcTime = options.longs === String ? String(message.serverUtcTime) : message.serverUtcTime;
                else
                    object.serverUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverUtcTime) : options.longs === Number ? new $util.LongBits(message.serverUtcTime.low >>> 0, message.serverUtcTime.high >>> 0).toNumber() : message.serverUtcTime;
            return object;
        };

        RestoreSessionResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        RestoreSessionResult.ResultCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[101] = "UNKNOWN_SESSION"] = 101;
            return values;
        })();

        return RestoreSessionResult;
    })();

    WebAPI.Logoff = (function() {

        function Logoff(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Logoff.prototype.textMessage = "";

        Logoff.create = function create(properties) {
            return new Logoff(properties);
        };

        Logoff.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(10).string(message.textMessage);
            return writer;
        };

        Logoff.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Logoff.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.Logoff();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.textMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Logoff.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Logoff.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            return null;
        };

        Logoff.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.Logoff)
                return object;
            let message = new $root.WebAPI.Logoff();
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            return message;
        };

        Logoff.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.textMessage = "";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            return object;
        };

        Logoff.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Logoff;
    })();

    WebAPI.LoggedOff = (function() {

        function LoggedOff(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LoggedOff.prototype.logoffReason = 0;
        LoggedOff.prototype.textMessage = "";
        LoggedOff.prototype.redirectUrl = "";

        LoggedOff.create = function create(properties) {
            return new LoggedOff(properties);
        };

        LoggedOff.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.logoffReason);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(18).string(message.textMessage);
            if (message.redirectUrl != null && message.hasOwnProperty("redirectUrl"))
                writer.uint32(26).string(message.redirectUrl);
            return writer;
        };

        LoggedOff.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LoggedOff.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.LoggedOff();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.logoffReason = reader.uint32();
                    break;
                case 2:
                    message.textMessage = reader.string();
                    break;
                case 3:
                    message.redirectUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("logoffReason"))
                throw $util.ProtocolError("missing required 'logoffReason'", { instance: message });
            return message;
        };

        LoggedOff.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LoggedOff.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.logoffReason))
                return "logoffReason: integer expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            if (message.redirectUrl != null && message.hasOwnProperty("redirectUrl"))
                if (!$util.isString(message.redirectUrl))
                    return "redirectUrl: string expected";
            return null;
        };

        LoggedOff.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.LoggedOff)
                return object;
            let message = new $root.WebAPI.LoggedOff();
            if (object.logoffReason != null)
                message.logoffReason = object.logoffReason >>> 0;
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            if (object.redirectUrl != null)
                message.redirectUrl = String(object.redirectUrl);
            return message;
        };

        LoggedOff.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.logoffReason = 0;
                object.textMessage = "";
                object.redirectUrl = "";
            }
            if (message.logoffReason != null && message.hasOwnProperty("logoffReason"))
                object.logoffReason = message.logoffReason;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            if (message.redirectUrl != null && message.hasOwnProperty("redirectUrl"))
                object.redirectUrl = message.redirectUrl;
            return object;
        };

        LoggedOff.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LoggedOff.LogoffReason = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "BY_REQUEST"] = 1;
            values[valuesById[2] = "REDIRECTED"] = 2;
            values[valuesById[3] = "FORCED"] = 3;
            values[valuesById[4] = "REASSIGNED"] = 4;
            return values;
        })();

        return LoggedOff;
    })();

    WebAPI.PasswordChange = (function() {

        function PasswordChange(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PasswordChange.prototype.oldPassword = "";
        PasswordChange.prototype.newPassword = "";

        PasswordChange.create = function create(properties) {
            return new PasswordChange(properties);
        };

        PasswordChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.oldPassword);
            writer.uint32(18).string(message.newPassword);
            return writer;
        };

        PasswordChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PasswordChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.PasswordChange();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.oldPassword = reader.string();
                    break;
                case 2:
                    message.newPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("oldPassword"))
                throw $util.ProtocolError("missing required 'oldPassword'", { instance: message });
            if (!message.hasOwnProperty("newPassword"))
                throw $util.ProtocolError("missing required 'newPassword'", { instance: message });
            return message;
        };

        PasswordChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PasswordChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.oldPassword))
                return "oldPassword: string expected";
            if (!$util.isString(message.newPassword))
                return "newPassword: string expected";
            return null;
        };

        PasswordChange.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.PasswordChange)
                return object;
            let message = new $root.WebAPI.PasswordChange();
            if (object.oldPassword != null)
                message.oldPassword = String(object.oldPassword);
            if (object.newPassword != null)
                message.newPassword = String(object.newPassword);
            return message;
        };

        PasswordChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.oldPassword = "";
                object.newPassword = "";
            }
            if (message.oldPassword != null && message.hasOwnProperty("oldPassword"))
                object.oldPassword = message.oldPassword;
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                object.newPassword = message.newPassword;
            return object;
        };

        PasswordChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PasswordChange;
    })();

    WebAPI.PasswordChangeResult = (function() {

        function PasswordChangeResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PasswordChangeResult.prototype.resultCode = 0;
        PasswordChangeResult.prototype.textMessage = "";

        PasswordChangeResult.create = function create(properties) {
            return new PasswordChangeResult(properties);
        };

        PasswordChangeResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.resultCode);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(18).string(message.textMessage);
            return writer;
        };

        PasswordChangeResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PasswordChangeResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.PasswordChangeResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.resultCode = reader.uint32();
                    break;
                case 2:
                    message.textMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("resultCode"))
                throw $util.ProtocolError("missing required 'resultCode'", { instance: message });
            return message;
        };

        PasswordChangeResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PasswordChangeResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.resultCode))
                return "resultCode: integer expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            return null;
        };

        PasswordChangeResult.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.PasswordChangeResult)
                return object;
            let message = new $root.WebAPI.PasswordChangeResult();
            if (object.resultCode != null)
                message.resultCode = object.resultCode >>> 0;
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            return message;
        };

        PasswordChangeResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.resultCode = 0;
                object.textMessage = "";
            }
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                object.resultCode = message.resultCode;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            return object;
        };

        PasswordChangeResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PasswordChangeResult.ResultCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[101] = "FAILURE"] = 101;
            values[valuesById[102] = "ROUTINE_ERROR"] = 102;
            return values;
        })();

        return PasswordChangeResult;
    })();

    WebAPI.ObtainDemoCredentials = (function() {

        function ObtainDemoCredentials(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ObtainDemoCredentials.prototype.clientId = "";
        ObtainDemoCredentials.prototype.firstName = "";
        ObtainDemoCredentials.prototype.secondName = "";
        ObtainDemoCredentials.prototype.eMail = "";
        ObtainDemoCredentials.prototype.privateLabel = "";

        ObtainDemoCredentials.create = function create(properties) {
            return new ObtainDemoCredentials(properties);
        };

        ObtainDemoCredentials.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.clientId);
            writer.uint32(18).string(message.firstName);
            writer.uint32(26).string(message.secondName);
            writer.uint32(34).string(message.eMail);
            if (message.privateLabel != null && message.hasOwnProperty("privateLabel"))
                writer.uint32(42).string(message.privateLabel);
            return writer;
        };

        ObtainDemoCredentials.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ObtainDemoCredentials.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ObtainDemoCredentials();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.firstName = reader.string();
                    break;
                case 3:
                    message.secondName = reader.string();
                    break;
                case 4:
                    message.eMail = reader.string();
                    break;
                case 5:
                    message.privateLabel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("clientId"))
                throw $util.ProtocolError("missing required 'clientId'", { instance: message });
            if (!message.hasOwnProperty("firstName"))
                throw $util.ProtocolError("missing required 'firstName'", { instance: message });
            if (!message.hasOwnProperty("secondName"))
                throw $util.ProtocolError("missing required 'secondName'", { instance: message });
            if (!message.hasOwnProperty("eMail"))
                throw $util.ProtocolError("missing required 'eMail'", { instance: message });
            return message;
        };

        ObtainDemoCredentials.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ObtainDemoCredentials.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.clientId))
                return "clientId: string expected";
            if (!$util.isString(message.firstName))
                return "firstName: string expected";
            if (!$util.isString(message.secondName))
                return "secondName: string expected";
            if (!$util.isString(message.eMail))
                return "eMail: string expected";
            if (message.privateLabel != null && message.hasOwnProperty("privateLabel"))
                if (!$util.isString(message.privateLabel))
                    return "privateLabel: string expected";
            return null;
        };

        ObtainDemoCredentials.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ObtainDemoCredentials)
                return object;
            let message = new $root.WebAPI.ObtainDemoCredentials();
            if (object.clientId != null)
                message.clientId = String(object.clientId);
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.secondName != null)
                message.secondName = String(object.secondName);
            if (object.eMail != null)
                message.eMail = String(object.eMail);
            if (object.privateLabel != null)
                message.privateLabel = String(object.privateLabel);
            return message;
        };

        ObtainDemoCredentials.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clientId = "";
                object.firstName = "";
                object.secondName = "";
                object.eMail = "";
                object.privateLabel = "";
            }
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.secondName != null && message.hasOwnProperty("secondName"))
                object.secondName = message.secondName;
            if (message.eMail != null && message.hasOwnProperty("eMail"))
                object.eMail = message.eMail;
            if (message.privateLabel != null && message.hasOwnProperty("privateLabel"))
                object.privateLabel = message.privateLabel;
            return object;
        };

        ObtainDemoCredentials.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ObtainDemoCredentials;
    })();

    WebAPI.ObtainDemoCredentialsResult = (function() {

        function ObtainDemoCredentialsResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ObtainDemoCredentialsResult.prototype.resultCode = 0;
        ObtainDemoCredentialsResult.prototype.userName = "";
        ObtainDemoCredentialsResult.prototype.password = "";
        ObtainDemoCredentialsResult.prototype.textMessage = "";

        ObtainDemoCredentialsResult.create = function create(properties) {
            return new ObtainDemoCredentialsResult(properties);
        };

        ObtainDemoCredentialsResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.resultCode);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(18).string(message.userName);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(26).string(message.password);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(34).string(message.textMessage);
            return writer;
        };

        ObtainDemoCredentialsResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ObtainDemoCredentialsResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ObtainDemoCredentialsResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.resultCode = reader.uint32();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.textMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("resultCode"))
                throw $util.ProtocolError("missing required 'resultCode'", { instance: message });
            return message;
        };

        ObtainDemoCredentialsResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ObtainDemoCredentialsResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.resultCode))
                return "resultCode: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            return null;
        };

        ObtainDemoCredentialsResult.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ObtainDemoCredentialsResult)
                return object;
            let message = new $root.WebAPI.ObtainDemoCredentialsResult();
            if (object.resultCode != null)
                message.resultCode = object.resultCode >>> 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.password != null)
                message.password = String(object.password);
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            return message;
        };

        ObtainDemoCredentialsResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.resultCode = 0;
                object.userName = "";
                object.password = "";
                object.textMessage = "";
            }
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                object.resultCode = message.resultCode;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            return object;
        };

        ObtainDemoCredentialsResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ObtainDemoCredentialsResult.ResultCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[101] = "FAILURE"] = 101;
            return values;
        })();

        return ObtainDemoCredentialsResult;
    })();

    WebAPI.UserMessage = (function() {

        function UserMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        UserMessage.prototype.messageType = 0;
        UserMessage.prototype.source = "";
        UserMessage.prototype.subject = "";
        UserMessage.prototype.text = "";
        UserMessage.prototype.expirationUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        UserMessage.create = function create(properties) {
            return new UserMessage(properties);
        };

        UserMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.messageType);
            writer.uint32(18).string(message.source);
            if (message.subject != null && message.hasOwnProperty("subject"))
                writer.uint32(26).string(message.subject);
            writer.uint32(34).string(message.text);
            if (message.expirationUtcTime != null && message.hasOwnProperty("expirationUtcTime"))
                writer.uint32(40).sint64(message.expirationUtcTime);
            return writer;
        };

        UserMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        UserMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.UserMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageType = reader.uint32();
                    break;
                case 2:
                    message.source = reader.string();
                    break;
                case 3:
                    message.subject = reader.string();
                    break;
                case 4:
                    message.text = reader.string();
                    break;
                case 5:
                    message.expirationUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("messageType"))
                throw $util.ProtocolError("missing required 'messageType'", { instance: message });
            if (!message.hasOwnProperty("source"))
                throw $util.ProtocolError("missing required 'source'", { instance: message });
            if (!message.hasOwnProperty("text"))
                throw $util.ProtocolError("missing required 'text'", { instance: message });
            return message;
        };

        UserMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        UserMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.messageType))
                return "messageType: integer expected";
            if (!$util.isString(message.source))
                return "source: string expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (!$util.isString(message.text))
                return "text: string expected";
            if (message.expirationUtcTime != null && message.hasOwnProperty("expirationUtcTime"))
                if (!$util.isInteger(message.expirationUtcTime) && !(message.expirationUtcTime && $util.isInteger(message.expirationUtcTime.low) && $util.isInteger(message.expirationUtcTime.high)))
                    return "expirationUtcTime: integer|Long expected";
            return null;
        };

        UserMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.UserMessage)
                return object;
            let message = new $root.WebAPI.UserMessage();
            if (object.messageType != null)
                message.messageType = object.messageType >>> 0;
            if (object.source != null)
                message.source = String(object.source);
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.text != null)
                message.text = String(object.text);
            if (object.expirationUtcTime != null)
                if ($util.Long)
                    (message.expirationUtcTime = $util.Long.fromValue(object.expirationUtcTime)).unsigned = false;
                else if (typeof object.expirationUtcTime === "string")
                    message.expirationUtcTime = parseInt(object.expirationUtcTime, 10);
                else if (typeof object.expirationUtcTime === "number")
                    message.expirationUtcTime = object.expirationUtcTime;
                else if (typeof object.expirationUtcTime === "object")
                    message.expirationUtcTime = new $util.LongBits(object.expirationUtcTime.low >>> 0, object.expirationUtcTime.high >>> 0).toNumber();
            return message;
        };

        UserMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.messageType = 0;
                object.source = "";
                object.subject = "";
                object.text = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.expirationUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expirationUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = message.messageType;
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = message.source;
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.expirationUtcTime != null && message.hasOwnProperty("expirationUtcTime"))
                if (typeof message.expirationUtcTime === "number")
                    object.expirationUtcTime = options.longs === String ? String(message.expirationUtcTime) : message.expirationUtcTime;
                else
                    object.expirationUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.expirationUtcTime) : options.longs === Number ? new $util.LongBits(message.expirationUtcTime.low >>> 0, message.expirationUtcTime.high >>> 0).toNumber() : message.expirationUtcTime;
            return object;
        };

        UserMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        UserMessage.MessageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "CRITICAL_ERROR"] = 1;
            values[valuesById[2] = "WARNING"] = 2;
            values[valuesById[3] = "INFO"] = 3;
            values[valuesById[4] = "LOG"] = 4;
            return values;
        })();

        return UserMessage;
    })();

    WebAPI.UserSessionStateRequest = (function() {

        function UserSessionStateRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        UserSessionStateRequest.prototype.sessionToken = "";

        UserSessionStateRequest.create = function create(properties) {
            return new UserSessionStateRequest(properties);
        };

        UserSessionStateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.sessionToken);
            return writer;
        };

        UserSessionStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        UserSessionStateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.UserSessionStateRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sessionToken"))
                throw $util.ProtocolError("missing required 'sessionToken'", { instance: message });
            return message;
        };

        UserSessionStateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        UserSessionStateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sessionToken))
                return "sessionToken: string expected";
            return null;
        };

        UserSessionStateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.UserSessionStateRequest)
                return object;
            let message = new $root.WebAPI.UserSessionStateRequest();
            if (object.sessionToken != null)
                message.sessionToken = String(object.sessionToken);
            return message;
        };

        UserSessionStateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.sessionToken = "";
            if (message.sessionToken != null && message.hasOwnProperty("sessionToken"))
                object.sessionToken = message.sessionToken;
            return object;
        };

        UserSessionStateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSessionStateRequest;
    })();

    WebAPI.UserSessionStateResult = (function() {

        function UserSessionStateResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        UserSessionStateResult.prototype.sessionToken = "";
        UserSessionStateResult.prototype.resultCode = 0;
        UserSessionStateResult.prototype.userId = 0;
        UserSessionStateResult.prototype.username = "";

        UserSessionStateResult.create = function create(properties) {
            return new UserSessionStateResult(properties);
        };

        UserSessionStateResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.sessionToken);
            writer.uint32(16).uint32(message.resultCode);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(24).sint32(message.userId);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(34).string(message.username);
            return writer;
        };

        UserSessionStateResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        UserSessionStateResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.UserSessionStateResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionToken = reader.string();
                    break;
                case 2:
                    message.resultCode = reader.uint32();
                    break;
                case 3:
                    message.userId = reader.sint32();
                    break;
                case 4:
                    message.username = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sessionToken"))
                throw $util.ProtocolError("missing required 'sessionToken'", { instance: message });
            if (!message.hasOwnProperty("resultCode"))
                throw $util.ProtocolError("missing required 'resultCode'", { instance: message });
            return message;
        };

        UserSessionStateResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        UserSessionStateResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sessionToken))
                return "sessionToken: string expected";
            if (!$util.isInteger(message.resultCode))
                return "resultCode: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        UserSessionStateResult.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.UserSessionStateResult)
                return object;
            let message = new $root.WebAPI.UserSessionStateResult();
            if (object.sessionToken != null)
                message.sessionToken = String(object.sessionToken);
            if (object.resultCode != null)
                message.resultCode = object.resultCode >>> 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        UserSessionStateResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sessionToken = "";
                object.resultCode = 0;
                object.userId = 0;
                object.username = "";
            }
            if (message.sessionToken != null && message.hasOwnProperty("sessionToken"))
                object.sessionToken = message.sessionToken;
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                object.resultCode = message.resultCode;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        UserSessionStateResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        UserSessionStateResult.ResultCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[101] = "FAILURE"] = 101;
            values[valuesById[102] = "UNKNOWN_SESSION"] = 102;
            values[valuesById[103] = "ACCESS_DENIED"] = 103;
            return values;
        })();

        return UserSessionStateResult;
    })();

    WebAPI.Ping = (function() {

        function Ping(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Ping.prototype.token = "";
        Ping.prototype.pingUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        Ping.create = function create(properties) {
            return new Ping(properties);
        };

        Ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(10).string(message.token);
            writer.uint32(16).sint64(message.pingUtcTime);
            return writer;
        };

        Ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.Ping();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.pingUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("pingUtcTime"))
                throw $util.ProtocolError("missing required 'pingUtcTime'", { instance: message });
            return message;
        };

        Ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (!$util.isInteger(message.pingUtcTime) && !(message.pingUtcTime && $util.isInteger(message.pingUtcTime.low) && $util.isInteger(message.pingUtcTime.high)))
                return "pingUtcTime: integer|Long expected";
            return null;
        };

        Ping.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.Ping)
                return object;
            let message = new $root.WebAPI.Ping();
            if (object.token != null)
                message.token = String(object.token);
            if (object.pingUtcTime != null)
                if ($util.Long)
                    (message.pingUtcTime = $util.Long.fromValue(object.pingUtcTime)).unsigned = false;
                else if (typeof object.pingUtcTime === "string")
                    message.pingUtcTime = parseInt(object.pingUtcTime, 10);
                else if (typeof object.pingUtcTime === "number")
                    message.pingUtcTime = object.pingUtcTime;
                else if (typeof object.pingUtcTime === "object")
                    message.pingUtcTime = new $util.LongBits(object.pingUtcTime.low >>> 0, object.pingUtcTime.high >>> 0).toNumber();
            return message;
        };

        Ping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.token = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pingUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pingUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.pingUtcTime != null && message.hasOwnProperty("pingUtcTime"))
                if (typeof message.pingUtcTime === "number")
                    object.pingUtcTime = options.longs === String ? String(message.pingUtcTime) : message.pingUtcTime;
                else
                    object.pingUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.pingUtcTime) : options.longs === Number ? new $util.LongBits(message.pingUtcTime.low >>> 0, message.pingUtcTime.high >>> 0).toNumber() : message.pingUtcTime;
            return object;
        };

        Ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ping;
    })();

    WebAPI.Pong = (function() {

        function Pong(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Pong.prototype.token = "";
        Pong.prototype.pingUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Pong.prototype.pongUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        Pong.create = function create(properties) {
            return new Pong(properties);
        };

        Pong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(10).string(message.token);
            writer.uint32(16).sint64(message.pingUtcTime);
            writer.uint32(24).sint64(message.pongUtcTime);
            return writer;
        };

        Pong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Pong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.Pong();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.pingUtcTime = reader.sint64();
                    break;
                case 3:
                    message.pongUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("pingUtcTime"))
                throw $util.ProtocolError("missing required 'pingUtcTime'", { instance: message });
            if (!message.hasOwnProperty("pongUtcTime"))
                throw $util.ProtocolError("missing required 'pongUtcTime'", { instance: message });
            return message;
        };

        Pong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Pong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (!$util.isInteger(message.pingUtcTime) && !(message.pingUtcTime && $util.isInteger(message.pingUtcTime.low) && $util.isInteger(message.pingUtcTime.high)))
                return "pingUtcTime: integer|Long expected";
            if (!$util.isInteger(message.pongUtcTime) && !(message.pongUtcTime && $util.isInteger(message.pongUtcTime.low) && $util.isInteger(message.pongUtcTime.high)))
                return "pongUtcTime: integer|Long expected";
            return null;
        };

        Pong.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.Pong)
                return object;
            let message = new $root.WebAPI.Pong();
            if (object.token != null)
                message.token = String(object.token);
            if (object.pingUtcTime != null)
                if ($util.Long)
                    (message.pingUtcTime = $util.Long.fromValue(object.pingUtcTime)).unsigned = false;
                else if (typeof object.pingUtcTime === "string")
                    message.pingUtcTime = parseInt(object.pingUtcTime, 10);
                else if (typeof object.pingUtcTime === "number")
                    message.pingUtcTime = object.pingUtcTime;
                else if (typeof object.pingUtcTime === "object")
                    message.pingUtcTime = new $util.LongBits(object.pingUtcTime.low >>> 0, object.pingUtcTime.high >>> 0).toNumber();
            if (object.pongUtcTime != null)
                if ($util.Long)
                    (message.pongUtcTime = $util.Long.fromValue(object.pongUtcTime)).unsigned = false;
                else if (typeof object.pongUtcTime === "string")
                    message.pongUtcTime = parseInt(object.pongUtcTime, 10);
                else if (typeof object.pongUtcTime === "number")
                    message.pongUtcTime = object.pongUtcTime;
                else if (typeof object.pongUtcTime === "object")
                    message.pongUtcTime = new $util.LongBits(object.pongUtcTime.low >>> 0, object.pongUtcTime.high >>> 0).toNumber();
            return message;
        };

        Pong.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.token = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pingUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pingUtcTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pongUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pongUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.pingUtcTime != null && message.hasOwnProperty("pingUtcTime"))
                if (typeof message.pingUtcTime === "number")
                    object.pingUtcTime = options.longs === String ? String(message.pingUtcTime) : message.pingUtcTime;
                else
                    object.pingUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.pingUtcTime) : options.longs === Number ? new $util.LongBits(message.pingUtcTime.low >>> 0, message.pingUtcTime.high >>> 0).toNumber() : message.pingUtcTime;
            if (message.pongUtcTime != null && message.hasOwnProperty("pongUtcTime"))
                if (typeof message.pongUtcTime === "number")
                    object.pongUtcTime = options.longs === String ? String(message.pongUtcTime) : message.pongUtcTime;
                else
                    object.pongUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.pongUtcTime) : options.longs === Number ? new $util.LongBits(message.pongUtcTime.low >>> 0, message.pongUtcTime.high >>> 0).toNumber() : message.pongUtcTime;
            return object;
        };

        Pong.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pong;
    })();

    WebAPI.TickSizeByPrice = (function() {

        function TickSizeByPrice(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TickSizeByPrice.prototype.tickSize = 0;
        TickSizeByPrice.prototype.tickValue = 0;
        TickSizeByPrice.prototype.minimumPrice = 0;

        TickSizeByPrice.create = function create(properties) {
            return new TickSizeByPrice(properties);
        };

        TickSizeByPrice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(9).double(message.tickSize);
            writer.uint32(17).double(message.tickValue);
            writer.uint32(25).double(message.minimumPrice);
            return writer;
        };

        TickSizeByPrice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TickSizeByPrice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TickSizeByPrice();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tickSize = reader.double();
                    break;
                case 2:
                    message.tickValue = reader.double();
                    break;
                case 3:
                    message.minimumPrice = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tickSize"))
                throw $util.ProtocolError("missing required 'tickSize'", { instance: message });
            if (!message.hasOwnProperty("tickValue"))
                throw $util.ProtocolError("missing required 'tickValue'", { instance: message });
            if (!message.hasOwnProperty("minimumPrice"))
                throw $util.ProtocolError("missing required 'minimumPrice'", { instance: message });
            return message;
        };

        TickSizeByPrice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TickSizeByPrice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.tickSize !== "number")
                return "tickSize: number expected";
            if (typeof message.tickValue !== "number")
                return "tickValue: number expected";
            if (typeof message.minimumPrice !== "number")
                return "minimumPrice: number expected";
            return null;
        };

        TickSizeByPrice.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TickSizeByPrice)
                return object;
            let message = new $root.WebAPI.TickSizeByPrice();
            if (object.tickSize != null)
                message.tickSize = Number(object.tickSize);
            if (object.tickValue != null)
                message.tickValue = Number(object.tickValue);
            if (object.minimumPrice != null)
                message.minimumPrice = Number(object.minimumPrice);
            return message;
        };

        TickSizeByPrice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.tickSize = 0;
                object.tickValue = 0;
                object.minimumPrice = 0;
            }
            if (message.tickSize != null && message.hasOwnProperty("tickSize"))
                object.tickSize = options.json && !isFinite(message.tickSize) ? String(message.tickSize) : message.tickSize;
            if (message.tickValue != null && message.hasOwnProperty("tickValue"))
                object.tickValue = options.json && !isFinite(message.tickValue) ? String(message.tickValue) : message.tickValue;
            if (message.minimumPrice != null && message.hasOwnProperty("minimumPrice"))
                object.minimumPrice = options.json && !isFinite(message.minimumPrice) ? String(message.minimumPrice) : message.minimumPrice;
            return object;
        };

        TickSizeByPrice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TickSizeByPrice;
    })();

    WebAPI.TickSizeByDateTillExpiration = (function() {

        function TickSizeByDateTillExpiration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TickSizeByDateTillExpiration.prototype.id = 0;
        TickSizeByDateTillExpiration.prototype.tickSize = 0;
        TickSizeByDateTillExpiration.prototype.tickValue = 0;

        TickSizeByDateTillExpiration.create = function create(properties) {
            return new TickSizeByDateTillExpiration(properties);
        };

        TickSizeByDateTillExpiration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.id);
            writer.uint32(17).double(message.tickSize);
            writer.uint32(25).double(message.tickValue);
            return writer;
        };

        TickSizeByDateTillExpiration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TickSizeByDateTillExpiration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TickSizeByDateTillExpiration();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.tickSize = reader.double();
                    break;
                case 3:
                    message.tickValue = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("tickSize"))
                throw $util.ProtocolError("missing required 'tickSize'", { instance: message });
            if (!message.hasOwnProperty("tickValue"))
                throw $util.ProtocolError("missing required 'tickValue'", { instance: message });
            return message;
        };

        TickSizeByDateTillExpiration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TickSizeByDateTillExpiration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (typeof message.tickSize !== "number")
                return "tickSize: number expected";
            if (typeof message.tickValue !== "number")
                return "tickValue: number expected";
            return null;
        };

        TickSizeByDateTillExpiration.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TickSizeByDateTillExpiration)
                return object;
            let message = new $root.WebAPI.TickSizeByDateTillExpiration();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.tickSize != null)
                message.tickSize = Number(object.tickSize);
            if (object.tickValue != null)
                message.tickValue = Number(object.tickValue);
            return message;
        };

        TickSizeByDateTillExpiration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.tickSize = 0;
                object.tickValue = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.tickSize != null && message.hasOwnProperty("tickSize"))
                object.tickSize = options.json && !isFinite(message.tickSize) ? String(message.tickSize) : message.tickSize;
            if (message.tickValue != null && message.hasOwnProperty("tickValue"))
                object.tickValue = options.json && !isFinite(message.tickValue) ? String(message.tickValue) : message.tickValue;
            return object;
        };

        TickSizeByDateTillExpiration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TickSizeByDateTillExpiration;
    })();

    WebAPI.ContractMetadata = (function() {

        function ContractMetadata(properties) {
            this.permission = [];
            this.tickSizesByPrice = [];
            this.tickSizesByDte = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ContractMetadata.prototype.contractId = 0;
        ContractMetadata.prototype.contractSymbol = "";
        ContractMetadata.prototype.correctPriceScale = 0;
        ContractMetadata.prototype.displayPriceScale = 0;
        ContractMetadata.prototype.description = "";
        ContractMetadata.prototype.title = "";
        ContractMetadata.prototype.tickSize = 0;
        ContractMetadata.prototype.currency = "";
        ContractMetadata.prototype.tickValue = 0;
        ContractMetadata.prototype.cfiCode = "";
        ContractMetadata.prototype.isMostActive = false;
        ContractMetadata.prototype.lastTradingDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ContractMetadata.prototype.firstNoticeDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ContractMetadata.prototype.underlyingContractSymbol = "";
        ContractMetadata.prototype.marginStyle = 0;
        ContractMetadata.prototype.instrumentGroupName = "";
        ContractMetadata.prototype.sessionInfoId = 0;
        ContractMetadata.prototype.mic = "";
        ContractMetadata.prototype.permission = $util.emptyArray;
        ContractMetadata.prototype.delay = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ContractMetadata.prototype.shortInstrumentGroupName = "";
        ContractMetadata.prototype.instrumentGroupDescription = "";
        ContractMetadata.prototype.tickSizesByPrice = $util.emptyArray;
        ContractMetadata.prototype.tickSizesByDte = $util.emptyArray;
        ContractMetadata.prototype.tickSizesByDteId = 0;
        ContractMetadata.prototype.lotSize = 0;
        ContractMetadata.prototype.ticker = "";
        ContractMetadata.prototype.couponValue = 0;
        ContractMetadata.prototype.facevalue = 0;
        ContractMetadata.prototype.shortname = "";

        ContractMetadata.create = function create(properties) {
            return new ContractMetadata(properties);
        };

        ContractMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.contractId);
            writer.uint32(18).string(message.contractSymbol);
            writer.uint32(25).double(message.correctPriceScale);
            writer.uint32(32).uint32(message.displayPriceScale);
            writer.uint32(42).string(message.description);
            writer.uint32(50).string(message.title);
            writer.uint32(57).double(message.tickSize);
            writer.uint32(66).string(message.currency);
            writer.uint32(73).double(message.tickValue);
            writer.uint32(82).string(message.cfiCode);
            if (message.isMostActive != null && message.hasOwnProperty("isMostActive"))
                writer.uint32(88).bool(message.isMostActive);
            if (message.lastTradingDate != null && message.hasOwnProperty("lastTradingDate"))
                writer.uint32(96).sint64(message.lastTradingDate);
            if (message.firstNoticeDate != null && message.hasOwnProperty("firstNoticeDate"))
                writer.uint32(104).sint64(message.firstNoticeDate);
            if (message.underlyingContractSymbol != null && message.hasOwnProperty("underlyingContractSymbol"))
                writer.uint32(114).string(message.underlyingContractSymbol);
            if (message.marginStyle != null && message.hasOwnProperty("marginStyle"))
                writer.uint32(120).uint32(message.marginStyle);
            writer.uint32(130).string(message.instrumentGroupName);
            writer.uint32(136).sint32(message.sessionInfoId);
            if (message.mic != null && message.hasOwnProperty("mic"))
                writer.uint32(146).string(message.mic);
            if (message.permission != null && message.permission.length)
                for (let i = 0; i < message.permission.length; ++i)
                    writer.uint32(152).uint32(message.permission[i]);
            if (message.delay != null && message.hasOwnProperty("delay"))
                writer.uint32(160).sint64(message.delay);
            writer.uint32(170).string(message.shortInstrumentGroupName);
            writer.uint32(178).string(message.instrumentGroupDescription);
            if (message.tickSizesByPrice != null && message.tickSizesByPrice.length)
                for (let i = 0; i < message.tickSizesByPrice.length; ++i)
                    $root.WebAPI.TickSizeByPrice.encode(message.tickSizesByPrice[i], writer.uint32(186).fork()).ldelim();
            if (message.tickSizesByDte != null && message.tickSizesByDte.length)
                for (let i = 0; i < message.tickSizesByDte.length; ++i)
                    $root.WebAPI.TickSizeByDateTillExpiration.encode(message.tickSizesByDte[i], writer.uint32(194).fork()).ldelim();
            if (message.tickSizesByDteId != null && message.hasOwnProperty("tickSizesByDteId"))
                writer.uint32(200).uint32(message.tickSizesByDteId);
            if (message.lotSize != null && message.hasOwnProperty("lotSize"))
                writer.uint32(208).uint32(message.lotSize);
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                writer.uint32(218).string(message.ticker);
            if (message.couponValue != null && message.hasOwnProperty("couponValue"))
                writer.uint32(225).double(message.couponValue);
            if (message.facevalue != null && message.hasOwnProperty("facevalue"))
                writer.uint32(233).double(message.facevalue);
            writer.uint32(242).string(message.shortname);
            return writer;
        };

        ContractMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ContractMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ContractMetadata();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contractId = reader.uint32();
                    break;
                case 2:
                    message.contractSymbol = reader.string();
                    break;
                case 3:
                    message.correctPriceScale = reader.double();
                    break;
                case 4:
                    message.displayPriceScale = reader.uint32();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.title = reader.string();
                    break;
                case 7:
                    message.tickSize = reader.double();
                    break;
                case 8:
                    message.currency = reader.string();
                    break;
                case 9:
                    message.tickValue = reader.double();
                    break;
                case 10:
                    message.cfiCode = reader.string();
                    break;
                case 11:
                    message.isMostActive = reader.bool();
                    break;
                case 12:
                    message.lastTradingDate = reader.sint64();
                    break;
                case 13:
                    message.firstNoticeDate = reader.sint64();
                    break;
                case 14:
                    message.underlyingContractSymbol = reader.string();
                    break;
                case 15:
                    message.marginStyle = reader.uint32();
                    break;
                case 16:
                    message.instrumentGroupName = reader.string();
                    break;
                case 17:
                    message.sessionInfoId = reader.sint32();
                    break;
                case 18:
                    message.mic = reader.string();
                    break;
                case 19:
                    if (!(message.permission && message.permission.length))
                        message.permission = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.permission.push(reader.uint32());
                    } else
                        message.permission.push(reader.uint32());
                    break;
                case 20:
                    message.delay = reader.sint64();
                    break;
                case 21:
                    message.shortInstrumentGroupName = reader.string();
                    break;
                case 22:
                    message.instrumentGroupDescription = reader.string();
                    break;
                case 23:
                    if (!(message.tickSizesByPrice && message.tickSizesByPrice.length))
                        message.tickSizesByPrice = [];
                    message.tickSizesByPrice.push($root.WebAPI.TickSizeByPrice.decode(reader, reader.uint32()));
                    break;
                case 24:
                    if (!(message.tickSizesByDte && message.tickSizesByDte.length))
                        message.tickSizesByDte = [];
                    message.tickSizesByDte.push($root.WebAPI.TickSizeByDateTillExpiration.decode(reader, reader.uint32()));
                    break;
                case 25:
                    message.tickSizesByDteId = reader.uint32();
                    break;
                case 26:
                    message.lotSize = reader.uint32();
                    break;
                case 27:
                    message.ticker = reader.string();
                    break;
                case 28:
                    message.couponValue = reader.double();
                    break;
                case 29:
                    message.facevalue = reader.double();
                    break;
                case 30:
                    message.shortname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("contractId"))
                throw $util.ProtocolError("missing required 'contractId'", { instance: message });
            if (!message.hasOwnProperty("contractSymbol"))
                throw $util.ProtocolError("missing required 'contractSymbol'", { instance: message });
            if (!message.hasOwnProperty("correctPriceScale"))
                throw $util.ProtocolError("missing required 'correctPriceScale'", { instance: message });
            if (!message.hasOwnProperty("displayPriceScale"))
                throw $util.ProtocolError("missing required 'displayPriceScale'", { instance: message });
            if (!message.hasOwnProperty("description"))
                throw $util.ProtocolError("missing required 'description'", { instance: message });
            if (!message.hasOwnProperty("title"))
                throw $util.ProtocolError("missing required 'title'", { instance: message });
            if (!message.hasOwnProperty("tickSize"))
                throw $util.ProtocolError("missing required 'tickSize'", { instance: message });
            if (!message.hasOwnProperty("currency"))
                throw $util.ProtocolError("missing required 'currency'", { instance: message });
            if (!message.hasOwnProperty("tickValue"))
                throw $util.ProtocolError("missing required 'tickValue'", { instance: message });
            if (!message.hasOwnProperty("cfiCode"))
                throw $util.ProtocolError("missing required 'cfiCode'", { instance: message });
            if (!message.hasOwnProperty("instrumentGroupName"))
                throw $util.ProtocolError("missing required 'instrumentGroupName'", { instance: message });
            if (!message.hasOwnProperty("sessionInfoId"))
                throw $util.ProtocolError("missing required 'sessionInfoId'", { instance: message });
            if (!message.hasOwnProperty("shortInstrumentGroupName"))
                throw $util.ProtocolError("missing required 'shortInstrumentGroupName'", { instance: message });
            if (!message.hasOwnProperty("instrumentGroupDescription"))
                throw $util.ProtocolError("missing required 'instrumentGroupDescription'", { instance: message });
            if (!message.hasOwnProperty("shortname"))
                throw $util.ProtocolError("missing required 'shortname'", { instance: message });
            return message;
        };

        ContractMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ContractMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.contractId))
                return "contractId: integer expected";
            if (!$util.isString(message.contractSymbol))
                return "contractSymbol: string expected";
            if (typeof message.correctPriceScale !== "number")
                return "correctPriceScale: number expected";
            if (!$util.isInteger(message.displayPriceScale))
                return "displayPriceScale: integer expected";
            if (!$util.isString(message.description))
                return "description: string expected";
            if (!$util.isString(message.title))
                return "title: string expected";
            if (typeof message.tickSize !== "number")
                return "tickSize: number expected";
            if (!$util.isString(message.currency))
                return "currency: string expected";
            if (typeof message.tickValue !== "number")
                return "tickValue: number expected";
            if (!$util.isString(message.cfiCode))
                return "cfiCode: string expected";
            if (message.isMostActive != null && message.hasOwnProperty("isMostActive"))
                if (typeof message.isMostActive !== "boolean")
                    return "isMostActive: boolean expected";
            if (message.lastTradingDate != null && message.hasOwnProperty("lastTradingDate"))
                if (!$util.isInteger(message.lastTradingDate) && !(message.lastTradingDate && $util.isInteger(message.lastTradingDate.low) && $util.isInteger(message.lastTradingDate.high)))
                    return "lastTradingDate: integer|Long expected";
            if (message.firstNoticeDate != null && message.hasOwnProperty("firstNoticeDate"))
                if (!$util.isInteger(message.firstNoticeDate) && !(message.firstNoticeDate && $util.isInteger(message.firstNoticeDate.low) && $util.isInteger(message.firstNoticeDate.high)))
                    return "firstNoticeDate: integer|Long expected";
            if (message.underlyingContractSymbol != null && message.hasOwnProperty("underlyingContractSymbol"))
                if (!$util.isString(message.underlyingContractSymbol))
                    return "underlyingContractSymbol: string expected";
            if (message.marginStyle != null && message.hasOwnProperty("marginStyle"))
                if (!$util.isInteger(message.marginStyle))
                    return "marginStyle: integer expected";
            if (!$util.isString(message.instrumentGroupName))
                return "instrumentGroupName: string expected";
            if (!$util.isInteger(message.sessionInfoId))
                return "sessionInfoId: integer expected";
            if (message.mic != null && message.hasOwnProperty("mic"))
                if (!$util.isString(message.mic))
                    return "mic: string expected";
            if (message.permission != null && message.hasOwnProperty("permission")) {
                if (!Array.isArray(message.permission))
                    return "permission: array expected";
                for (let i = 0; i < message.permission.length; ++i)
                    if (!$util.isInteger(message.permission[i]))
                        return "permission: integer[] expected";
            }
            if (message.delay != null && message.hasOwnProperty("delay"))
                if (!$util.isInteger(message.delay) && !(message.delay && $util.isInteger(message.delay.low) && $util.isInteger(message.delay.high)))
                    return "delay: integer|Long expected";
            if (!$util.isString(message.shortInstrumentGroupName))
                return "shortInstrumentGroupName: string expected";
            if (!$util.isString(message.instrumentGroupDescription))
                return "instrumentGroupDescription: string expected";
            if (message.tickSizesByPrice != null && message.hasOwnProperty("tickSizesByPrice")) {
                if (!Array.isArray(message.tickSizesByPrice))
                    return "tickSizesByPrice: array expected";
                for (let i = 0; i < message.tickSizesByPrice.length; ++i) {
                    let error = $root.WebAPI.TickSizeByPrice.verify(message.tickSizesByPrice[i]);
                    if (error)
                        return "tickSizesByPrice." + error;
                }
            }
            if (message.tickSizesByDte != null && message.hasOwnProperty("tickSizesByDte")) {
                if (!Array.isArray(message.tickSizesByDte))
                    return "tickSizesByDte: array expected";
                for (let i = 0; i < message.tickSizesByDte.length; ++i) {
                    let error = $root.WebAPI.TickSizeByDateTillExpiration.verify(message.tickSizesByDte[i]);
                    if (error)
                        return "tickSizesByDte." + error;
                }
            }
            if (message.tickSizesByDteId != null && message.hasOwnProperty("tickSizesByDteId"))
                if (!$util.isInteger(message.tickSizesByDteId))
                    return "tickSizesByDteId: integer expected";
            if (message.lotSize != null && message.hasOwnProperty("lotSize"))
                if (!$util.isInteger(message.lotSize))
                    return "lotSize: integer expected";
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                if (!$util.isString(message.ticker))
                    return "ticker: string expected";
            if (message.couponValue != null && message.hasOwnProperty("couponValue"))
                if (typeof message.couponValue !== "number")
                    return "couponValue: number expected";
            if (message.facevalue != null && message.hasOwnProperty("facevalue"))
                if (typeof message.facevalue !== "number")
                    return "facevalue: number expected";
            if (!$util.isString(message.shortname))
                return "shortname: string expected";
            return null;
        };

        ContractMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ContractMetadata)
                return object;
            let message = new $root.WebAPI.ContractMetadata();
            if (object.contractId != null)
                message.contractId = object.contractId >>> 0;
            if (object.contractSymbol != null)
                message.contractSymbol = String(object.contractSymbol);
            if (object.correctPriceScale != null)
                message.correctPriceScale = Number(object.correctPriceScale);
            if (object.displayPriceScale != null)
                message.displayPriceScale = object.displayPriceScale >>> 0;
            if (object.description != null)
                message.description = String(object.description);
            if (object.title != null)
                message.title = String(object.title);
            if (object.tickSize != null)
                message.tickSize = Number(object.tickSize);
            if (object.currency != null)
                message.currency = String(object.currency);
            if (object.tickValue != null)
                message.tickValue = Number(object.tickValue);
            if (object.cfiCode != null)
                message.cfiCode = String(object.cfiCode);
            if (object.isMostActive != null)
                message.isMostActive = Boolean(object.isMostActive);
            if (object.lastTradingDate != null)
                if ($util.Long)
                    (message.lastTradingDate = $util.Long.fromValue(object.lastTradingDate)).unsigned = false;
                else if (typeof object.lastTradingDate === "string")
                    message.lastTradingDate = parseInt(object.lastTradingDate, 10);
                else if (typeof object.lastTradingDate === "number")
                    message.lastTradingDate = object.lastTradingDate;
                else if (typeof object.lastTradingDate === "object")
                    message.lastTradingDate = new $util.LongBits(object.lastTradingDate.low >>> 0, object.lastTradingDate.high >>> 0).toNumber();
            if (object.firstNoticeDate != null)
                if ($util.Long)
                    (message.firstNoticeDate = $util.Long.fromValue(object.firstNoticeDate)).unsigned = false;
                else if (typeof object.firstNoticeDate === "string")
                    message.firstNoticeDate = parseInt(object.firstNoticeDate, 10);
                else if (typeof object.firstNoticeDate === "number")
                    message.firstNoticeDate = object.firstNoticeDate;
                else if (typeof object.firstNoticeDate === "object")
                    message.firstNoticeDate = new $util.LongBits(object.firstNoticeDate.low >>> 0, object.firstNoticeDate.high >>> 0).toNumber();
            if (object.underlyingContractSymbol != null)
                message.underlyingContractSymbol = String(object.underlyingContractSymbol);
            if (object.marginStyle != null)
                message.marginStyle = object.marginStyle >>> 0;
            if (object.instrumentGroupName != null)
                message.instrumentGroupName = String(object.instrumentGroupName);
            if (object.sessionInfoId != null)
                message.sessionInfoId = object.sessionInfoId | 0;
            if (object.mic != null)
                message.mic = String(object.mic);
            if (object.permission) {
                if (!Array.isArray(object.permission))
                    throw TypeError(".WebAPI.ContractMetadata.permission: array expected");
                message.permission = [];
                for (let i = 0; i < object.permission.length; ++i)
                    message.permission[i] = object.permission[i] >>> 0;
            }
            if (object.delay != null)
                if ($util.Long)
                    (message.delay = $util.Long.fromValue(object.delay)).unsigned = false;
                else if (typeof object.delay === "string")
                    message.delay = parseInt(object.delay, 10);
                else if (typeof object.delay === "number")
                    message.delay = object.delay;
                else if (typeof object.delay === "object")
                    message.delay = new $util.LongBits(object.delay.low >>> 0, object.delay.high >>> 0).toNumber();
            if (object.shortInstrumentGroupName != null)
                message.shortInstrumentGroupName = String(object.shortInstrumentGroupName);
            if (object.instrumentGroupDescription != null)
                message.instrumentGroupDescription = String(object.instrumentGroupDescription);
            if (object.tickSizesByPrice) {
                if (!Array.isArray(object.tickSizesByPrice))
                    throw TypeError(".WebAPI.ContractMetadata.tickSizesByPrice: array expected");
                message.tickSizesByPrice = [];
                for (let i = 0; i < object.tickSizesByPrice.length; ++i) {
                    if (typeof object.tickSizesByPrice[i] !== "object")
                        throw TypeError(".WebAPI.ContractMetadata.tickSizesByPrice: object expected");
                    message.tickSizesByPrice[i] = $root.WebAPI.TickSizeByPrice.fromObject(object.tickSizesByPrice[i]);
                }
            }
            if (object.tickSizesByDte) {
                if (!Array.isArray(object.tickSizesByDte))
                    throw TypeError(".WebAPI.ContractMetadata.tickSizesByDte: array expected");
                message.tickSizesByDte = [];
                for (let i = 0; i < object.tickSizesByDte.length; ++i) {
                    if (typeof object.tickSizesByDte[i] !== "object")
                        throw TypeError(".WebAPI.ContractMetadata.tickSizesByDte: object expected");
                    message.tickSizesByDte[i] = $root.WebAPI.TickSizeByDateTillExpiration.fromObject(object.tickSizesByDte[i]);
                }
            }
            if (object.tickSizesByDteId != null)
                message.tickSizesByDteId = object.tickSizesByDteId >>> 0;
            if (object.lotSize != null)
                message.lotSize = object.lotSize >>> 0;
            if (object.ticker != null)
                message.ticker = String(object.ticker);
            if (object.couponValue != null)
                message.couponValue = Number(object.couponValue);
            if (object.facevalue != null)
                message.facevalue = Number(object.facevalue);
            if (object.shortname != null)
                message.shortname = String(object.shortname);
            return message;
        };

        ContractMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.permission = [];
                object.tickSizesByPrice = [];
                object.tickSizesByDte = [];
            }
            if (options.defaults) {
                object.contractId = 0;
                object.contractSymbol = "";
                object.correctPriceScale = 0;
                object.displayPriceScale = 0;
                object.description = "";
                object.title = "";
                object.tickSize = 0;
                object.currency = "";
                object.tickValue = 0;
                object.cfiCode = "";
                object.isMostActive = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lastTradingDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastTradingDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.firstNoticeDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.firstNoticeDate = options.longs === String ? "0" : 0;
                object.underlyingContractSymbol = "";
                object.marginStyle = 0;
                object.instrumentGroupName = "";
                object.sessionInfoId = 0;
                object.mic = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.delay = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.delay = options.longs === String ? "0" : 0;
                object.shortInstrumentGroupName = "";
                object.instrumentGroupDescription = "";
                object.tickSizesByDteId = 0;
                object.lotSize = 0;
                object.ticker = "";
                object.couponValue = 0;
                object.facevalue = 0;
                object.shortname = "";
            }
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = message.contractId;
            if (message.contractSymbol != null && message.hasOwnProperty("contractSymbol"))
                object.contractSymbol = message.contractSymbol;
            if (message.correctPriceScale != null && message.hasOwnProperty("correctPriceScale"))
                object.correctPriceScale = options.json && !isFinite(message.correctPriceScale) ? String(message.correctPriceScale) : message.correctPriceScale;
            if (message.displayPriceScale != null && message.hasOwnProperty("displayPriceScale"))
                object.displayPriceScale = message.displayPriceScale;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.tickSize != null && message.hasOwnProperty("tickSize"))
                object.tickSize = options.json && !isFinite(message.tickSize) ? String(message.tickSize) : message.tickSize;
            if (message.currency != null && message.hasOwnProperty("currency"))
                object.currency = message.currency;
            if (message.tickValue != null && message.hasOwnProperty("tickValue"))
                object.tickValue = options.json && !isFinite(message.tickValue) ? String(message.tickValue) : message.tickValue;
            if (message.cfiCode != null && message.hasOwnProperty("cfiCode"))
                object.cfiCode = message.cfiCode;
            if (message.isMostActive != null && message.hasOwnProperty("isMostActive"))
                object.isMostActive = message.isMostActive;
            if (message.lastTradingDate != null && message.hasOwnProperty("lastTradingDate"))
                if (typeof message.lastTradingDate === "number")
                    object.lastTradingDate = options.longs === String ? String(message.lastTradingDate) : message.lastTradingDate;
                else
                    object.lastTradingDate = options.longs === String ? $util.Long.prototype.toString.call(message.lastTradingDate) : options.longs === Number ? new $util.LongBits(message.lastTradingDate.low >>> 0, message.lastTradingDate.high >>> 0).toNumber() : message.lastTradingDate;
            if (message.firstNoticeDate != null && message.hasOwnProperty("firstNoticeDate"))
                if (typeof message.firstNoticeDate === "number")
                    object.firstNoticeDate = options.longs === String ? String(message.firstNoticeDate) : message.firstNoticeDate;
                else
                    object.firstNoticeDate = options.longs === String ? $util.Long.prototype.toString.call(message.firstNoticeDate) : options.longs === Number ? new $util.LongBits(message.firstNoticeDate.low >>> 0, message.firstNoticeDate.high >>> 0).toNumber() : message.firstNoticeDate;
            if (message.underlyingContractSymbol != null && message.hasOwnProperty("underlyingContractSymbol"))
                object.underlyingContractSymbol = message.underlyingContractSymbol;
            if (message.marginStyle != null && message.hasOwnProperty("marginStyle"))
                object.marginStyle = message.marginStyle;
            if (message.instrumentGroupName != null && message.hasOwnProperty("instrumentGroupName"))
                object.instrumentGroupName = message.instrumentGroupName;
            if (message.sessionInfoId != null && message.hasOwnProperty("sessionInfoId"))
                object.sessionInfoId = message.sessionInfoId;
            if (message.mic != null && message.hasOwnProperty("mic"))
                object.mic = message.mic;
            if (message.permission && message.permission.length) {
                object.permission = [];
                for (let j = 0; j < message.permission.length; ++j)
                    object.permission[j] = message.permission[j];
            }
            if (message.delay != null && message.hasOwnProperty("delay"))
                if (typeof message.delay === "number")
                    object.delay = options.longs === String ? String(message.delay) : message.delay;
                else
                    object.delay = options.longs === String ? $util.Long.prototype.toString.call(message.delay) : options.longs === Number ? new $util.LongBits(message.delay.low >>> 0, message.delay.high >>> 0).toNumber() : message.delay;
            if (message.shortInstrumentGroupName != null && message.hasOwnProperty("shortInstrumentGroupName"))
                object.shortInstrumentGroupName = message.shortInstrumentGroupName;
            if (message.instrumentGroupDescription != null && message.hasOwnProperty("instrumentGroupDescription"))
                object.instrumentGroupDescription = message.instrumentGroupDescription;
            if (message.tickSizesByPrice && message.tickSizesByPrice.length) {
                object.tickSizesByPrice = [];
                for (let j = 0; j < message.tickSizesByPrice.length; ++j)
                    object.tickSizesByPrice[j] = $root.WebAPI.TickSizeByPrice.toObject(message.tickSizesByPrice[j], options);
            }
            if (message.tickSizesByDte && message.tickSizesByDte.length) {
                object.tickSizesByDte = [];
                for (let j = 0; j < message.tickSizesByDte.length; ++j)
                    object.tickSizesByDte[j] = $root.WebAPI.TickSizeByDateTillExpiration.toObject(message.tickSizesByDte[j], options);
            }
            if (message.tickSizesByDteId != null && message.hasOwnProperty("tickSizesByDteId"))
                object.tickSizesByDteId = message.tickSizesByDteId;
            if (message.lotSize != null && message.hasOwnProperty("lotSize"))
                object.lotSize = message.lotSize;
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                object.ticker = message.ticker;
            if (message.couponValue != null && message.hasOwnProperty("couponValue"))
                object.couponValue = options.json && !isFinite(message.couponValue) ? String(message.couponValue) : message.couponValue;
            if (message.facevalue != null && message.hasOwnProperty("facevalue"))
                object.facevalue = options.json && !isFinite(message.facevalue) ? String(message.facevalue) : message.facevalue;
            if (message.shortname != null && message.hasOwnProperty("shortname"))
                object.shortname = message.shortname;
            return object;
        };

        ContractMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ContractMetadata.MarginStyle = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "FUTURE"] = 1;
            values[valuesById[2] = "PREMIUM"] = 2;
            return values;
        })();

        ContractMetadata.Permission = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "DELAYED_BBA_SUBSCRIPTION"] = 1;
            values[valuesById[2] = "BBA_SUBSCRIPTION"] = 2;
            values[valuesById[3] = "DOM_SUBSCRIPTION"] = 3;
            values[valuesById[4] = "TRADING"] = 4;
            return values;
        })();

        return ContractMetadata;
    })();

    WebAPI.InformationRequest = (function() {

        function InformationRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        InformationRequest.prototype.id = 0;
        InformationRequest.prototype.subscribe = false;
        InformationRequest.prototype.accountsRequest = null;
        InformationRequest.prototype.symbolResolutionRequest = null;
        InformationRequest.prototype.lastStatementBalancesRequest = null;
        InformationRequest.prototype.currencyRatesRequest = null;
        InformationRequest.prototype.sessionInformationRequest = null;
        InformationRequest.prototype.historicalOrdersRequest = null;

        InformationRequest.create = function create(properties) {
            return new InformationRequest(properties);
        };

        InformationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.id);
            if (message.subscribe != null && message.hasOwnProperty("subscribe"))
                writer.uint32(16).bool(message.subscribe);
            if (message.accountsRequest != null && message.hasOwnProperty("accountsRequest"))
                $root.WebAPI.AccountsRequest.encode(message.accountsRequest, writer.uint32(26).fork()).ldelim();
            if (message.symbolResolutionRequest != null && message.hasOwnProperty("symbolResolutionRequest"))
                $root.WebAPI.SymbolResolutionRequest.encode(message.symbolResolutionRequest, writer.uint32(34).fork()).ldelim();
            if (message.lastStatementBalancesRequest != null && message.hasOwnProperty("lastStatementBalancesRequest"))
                $root.WebAPI.LastStatementBalancesRequest.encode(message.lastStatementBalancesRequest, writer.uint32(42).fork()).ldelim();
            if (message.currencyRatesRequest != null && message.hasOwnProperty("currencyRatesRequest"))
                $root.WebAPI.CurrencyRatesRequest.encode(message.currencyRatesRequest, writer.uint32(50).fork()).ldelim();
            if (message.sessionInformationRequest != null && message.hasOwnProperty("sessionInformationRequest"))
                $root.WebAPI.SessionInformationRequest.encode(message.sessionInformationRequest, writer.uint32(58).fork()).ldelim();
            if (message.historicalOrdersRequest != null && message.hasOwnProperty("historicalOrdersRequest"))
                $root.WebAPI.HistoricalOrdersRequest.encode(message.historicalOrdersRequest, writer.uint32(106).fork()).ldelim();
            return writer;
        };

        InformationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        InformationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.InformationRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.subscribe = reader.bool();
                    break;
                case 3:
                    message.accountsRequest = $root.WebAPI.AccountsRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.symbolResolutionRequest = $root.WebAPI.SymbolResolutionRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.lastStatementBalancesRequest = $root.WebAPI.LastStatementBalancesRequest.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.currencyRatesRequest = $root.WebAPI.CurrencyRatesRequest.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.sessionInformationRequest = $root.WebAPI.SessionInformationRequest.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.historicalOrdersRequest = $root.WebAPI.HistoricalOrdersRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        InformationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        InformationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.subscribe != null && message.hasOwnProperty("subscribe"))
                if (typeof message.subscribe !== "boolean")
                    return "subscribe: boolean expected";
            if (message.accountsRequest != null && message.hasOwnProperty("accountsRequest")) {
                let error = $root.WebAPI.AccountsRequest.verify(message.accountsRequest);
                if (error)
                    return "accountsRequest." + error;
            }
            if (message.symbolResolutionRequest != null && message.hasOwnProperty("symbolResolutionRequest")) {
                let error = $root.WebAPI.SymbolResolutionRequest.verify(message.symbolResolutionRequest);
                if (error)
                    return "symbolResolutionRequest." + error;
            }
            if (message.lastStatementBalancesRequest != null && message.hasOwnProperty("lastStatementBalancesRequest")) {
                let error = $root.WebAPI.LastStatementBalancesRequest.verify(message.lastStatementBalancesRequest);
                if (error)
                    return "lastStatementBalancesRequest." + error;
            }
            if (message.currencyRatesRequest != null && message.hasOwnProperty("currencyRatesRequest")) {
                let error = $root.WebAPI.CurrencyRatesRequest.verify(message.currencyRatesRequest);
                if (error)
                    return "currencyRatesRequest." + error;
            }
            if (message.sessionInformationRequest != null && message.hasOwnProperty("sessionInformationRequest")) {
                let error = $root.WebAPI.SessionInformationRequest.verify(message.sessionInformationRequest);
                if (error)
                    return "sessionInformationRequest." + error;
            }
            if (message.historicalOrdersRequest != null && message.hasOwnProperty("historicalOrdersRequest")) {
                let error = $root.WebAPI.HistoricalOrdersRequest.verify(message.historicalOrdersRequest);
                if (error)
                    return "historicalOrdersRequest." + error;
            }
            return null;
        };

        InformationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.InformationRequest)
                return object;
            let message = new $root.WebAPI.InformationRequest();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.subscribe != null)
                message.subscribe = Boolean(object.subscribe);
            if (object.accountsRequest != null) {
                if (typeof object.accountsRequest !== "object")
                    throw TypeError(".WebAPI.InformationRequest.accountsRequest: object expected");
                message.accountsRequest = $root.WebAPI.AccountsRequest.fromObject(object.accountsRequest);
            }
            if (object.symbolResolutionRequest != null) {
                if (typeof object.symbolResolutionRequest !== "object")
                    throw TypeError(".WebAPI.InformationRequest.symbolResolutionRequest: object expected");
                message.symbolResolutionRequest = $root.WebAPI.SymbolResolutionRequest.fromObject(object.symbolResolutionRequest);
            }
            if (object.lastStatementBalancesRequest != null) {
                if (typeof object.lastStatementBalancesRequest !== "object")
                    throw TypeError(".WebAPI.InformationRequest.lastStatementBalancesRequest: object expected");
                message.lastStatementBalancesRequest = $root.WebAPI.LastStatementBalancesRequest.fromObject(object.lastStatementBalancesRequest);
            }
            if (object.currencyRatesRequest != null) {
                if (typeof object.currencyRatesRequest !== "object")
                    throw TypeError(".WebAPI.InformationRequest.currencyRatesRequest: object expected");
                message.currencyRatesRequest = $root.WebAPI.CurrencyRatesRequest.fromObject(object.currencyRatesRequest);
            }
            if (object.sessionInformationRequest != null) {
                if (typeof object.sessionInformationRequest !== "object")
                    throw TypeError(".WebAPI.InformationRequest.sessionInformationRequest: object expected");
                message.sessionInformationRequest = $root.WebAPI.SessionInformationRequest.fromObject(object.sessionInformationRequest);
            }
            if (object.historicalOrdersRequest != null) {
                if (typeof object.historicalOrdersRequest !== "object")
                    throw TypeError(".WebAPI.InformationRequest.historicalOrdersRequest: object expected");
                message.historicalOrdersRequest = $root.WebAPI.HistoricalOrdersRequest.fromObject(object.historicalOrdersRequest);
            }
            return message;
        };

        InformationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.subscribe = false;
                object.accountsRequest = null;
                object.symbolResolutionRequest = null;
                object.lastStatementBalancesRequest = null;
                object.currencyRatesRequest = null;
                object.sessionInformationRequest = null;
                object.historicalOrdersRequest = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.subscribe != null && message.hasOwnProperty("subscribe"))
                object.subscribe = message.subscribe;
            if (message.accountsRequest != null && message.hasOwnProperty("accountsRequest"))
                object.accountsRequest = $root.WebAPI.AccountsRequest.toObject(message.accountsRequest, options);
            if (message.symbolResolutionRequest != null && message.hasOwnProperty("symbolResolutionRequest"))
                object.symbolResolutionRequest = $root.WebAPI.SymbolResolutionRequest.toObject(message.symbolResolutionRequest, options);
            if (message.lastStatementBalancesRequest != null && message.hasOwnProperty("lastStatementBalancesRequest"))
                object.lastStatementBalancesRequest = $root.WebAPI.LastStatementBalancesRequest.toObject(message.lastStatementBalancesRequest, options);
            if (message.currencyRatesRequest != null && message.hasOwnProperty("currencyRatesRequest"))
                object.currencyRatesRequest = $root.WebAPI.CurrencyRatesRequest.toObject(message.currencyRatesRequest, options);
            if (message.sessionInformationRequest != null && message.hasOwnProperty("sessionInformationRequest"))
                object.sessionInformationRequest = $root.WebAPI.SessionInformationRequest.toObject(message.sessionInformationRequest, options);
            if (message.historicalOrdersRequest != null && message.hasOwnProperty("historicalOrdersRequest"))
                object.historicalOrdersRequest = $root.WebAPI.HistoricalOrdersRequest.toObject(message.historicalOrdersRequest, options);
            return object;
        };

        InformationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InformationRequest;
    })();

    WebAPI.InformationReport = (function() {

        function InformationReport(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        InformationReport.prototype.id = 0;
        InformationReport.prototype.isReportComplete = true;
        InformationReport.prototype.statusCode = 0;
        InformationReport.prototype.textMessage = "";
        InformationReport.prototype.accountsReport = null;
        InformationReport.prototype.symbolResolutionReport = null;
        InformationReport.prototype.lastStatementBalancesReport = null;
        InformationReport.prototype.currencyRatesReport = null;
        InformationReport.prototype.sessionInformationReport = null;
        InformationReport.prototype.historicalOrdersReport = null;

        InformationReport.create = function create(properties) {
            return new InformationReport(properties);
        };

        InformationReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.id);
            if (message.isReportComplete != null && message.hasOwnProperty("isReportComplete"))
                writer.uint32(16).bool(message.isReportComplete);
            writer.uint32(24).uint32(message.statusCode);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(34).string(message.textMessage);
            if (message.accountsReport != null && message.hasOwnProperty("accountsReport"))
                $root.WebAPI.AccountsReport.encode(message.accountsReport, writer.uint32(42).fork()).ldelim();
            if (message.symbolResolutionReport != null && message.hasOwnProperty("symbolResolutionReport"))
                $root.WebAPI.SymbolResolutionReport.encode(message.symbolResolutionReport, writer.uint32(50).fork()).ldelim();
            if (message.lastStatementBalancesReport != null && message.hasOwnProperty("lastStatementBalancesReport"))
                $root.WebAPI.LastStatementBalancesReport.encode(message.lastStatementBalancesReport, writer.uint32(58).fork()).ldelim();
            if (message.currencyRatesReport != null && message.hasOwnProperty("currencyRatesReport"))
                $root.WebAPI.CurrencyRatesReport.encode(message.currencyRatesReport, writer.uint32(66).fork()).ldelim();
            if (message.sessionInformationReport != null && message.hasOwnProperty("sessionInformationReport"))
                $root.WebAPI.SessionInformationReport.encode(message.sessionInformationReport, writer.uint32(74).fork()).ldelim();
            if (message.historicalOrdersReport != null && message.hasOwnProperty("historicalOrdersReport"))
                $root.WebAPI.HistoricalOrdersReport.encode(message.historicalOrdersReport, writer.uint32(122).fork()).ldelim();
            return writer;
        };

        InformationReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        InformationReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.InformationReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.isReportComplete = reader.bool();
                    break;
                case 3:
                    message.statusCode = reader.uint32();
                    break;
                case 4:
                    message.textMessage = reader.string();
                    break;
                case 5:
                    message.accountsReport = $root.WebAPI.AccountsReport.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.symbolResolutionReport = $root.WebAPI.SymbolResolutionReport.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.lastStatementBalancesReport = $root.WebAPI.LastStatementBalancesReport.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.currencyRatesReport = $root.WebAPI.CurrencyRatesReport.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sessionInformationReport = $root.WebAPI.SessionInformationReport.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.historicalOrdersReport = $root.WebAPI.HistoricalOrdersReport.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("statusCode"))
                throw $util.ProtocolError("missing required 'statusCode'", { instance: message });
            return message;
        };

        InformationReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        InformationReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.isReportComplete != null && message.hasOwnProperty("isReportComplete"))
                if (typeof message.isReportComplete !== "boolean")
                    return "isReportComplete: boolean expected";
            if (!$util.isInteger(message.statusCode))
                return "statusCode: integer expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            if (message.accountsReport != null && message.hasOwnProperty("accountsReport")) {
                let error = $root.WebAPI.AccountsReport.verify(message.accountsReport);
                if (error)
                    return "accountsReport." + error;
            }
            if (message.symbolResolutionReport != null && message.hasOwnProperty("symbolResolutionReport")) {
                let error = $root.WebAPI.SymbolResolutionReport.verify(message.symbolResolutionReport);
                if (error)
                    return "symbolResolutionReport." + error;
            }
            if (message.lastStatementBalancesReport != null && message.hasOwnProperty("lastStatementBalancesReport")) {
                let error = $root.WebAPI.LastStatementBalancesReport.verify(message.lastStatementBalancesReport);
                if (error)
                    return "lastStatementBalancesReport." + error;
            }
            if (message.currencyRatesReport != null && message.hasOwnProperty("currencyRatesReport")) {
                let error = $root.WebAPI.CurrencyRatesReport.verify(message.currencyRatesReport);
                if (error)
                    return "currencyRatesReport." + error;
            }
            if (message.sessionInformationReport != null && message.hasOwnProperty("sessionInformationReport")) {
                let error = $root.WebAPI.SessionInformationReport.verify(message.sessionInformationReport);
                if (error)
                    return "sessionInformationReport." + error;
            }
            if (message.historicalOrdersReport != null && message.hasOwnProperty("historicalOrdersReport")) {
                let error = $root.WebAPI.HistoricalOrdersReport.verify(message.historicalOrdersReport);
                if (error)
                    return "historicalOrdersReport." + error;
            }
            return null;
        };

        InformationReport.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.InformationReport)
                return object;
            let message = new $root.WebAPI.InformationReport();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.isReportComplete != null)
                message.isReportComplete = Boolean(object.isReportComplete);
            if (object.statusCode != null)
                message.statusCode = object.statusCode >>> 0;
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            if (object.accountsReport != null) {
                if (typeof object.accountsReport !== "object")
                    throw TypeError(".WebAPI.InformationReport.accountsReport: object expected");
                message.accountsReport = $root.WebAPI.AccountsReport.fromObject(object.accountsReport);
            }
            if (object.symbolResolutionReport != null) {
                if (typeof object.symbolResolutionReport !== "object")
                    throw TypeError(".WebAPI.InformationReport.symbolResolutionReport: object expected");
                message.symbolResolutionReport = $root.WebAPI.SymbolResolutionReport.fromObject(object.symbolResolutionReport);
            }
            if (object.lastStatementBalancesReport != null) {
                if (typeof object.lastStatementBalancesReport !== "object")
                    throw TypeError(".WebAPI.InformationReport.lastStatementBalancesReport: object expected");
                message.lastStatementBalancesReport = $root.WebAPI.LastStatementBalancesReport.fromObject(object.lastStatementBalancesReport);
            }
            if (object.currencyRatesReport != null) {
                if (typeof object.currencyRatesReport !== "object")
                    throw TypeError(".WebAPI.InformationReport.currencyRatesReport: object expected");
                message.currencyRatesReport = $root.WebAPI.CurrencyRatesReport.fromObject(object.currencyRatesReport);
            }
            if (object.sessionInformationReport != null) {
                if (typeof object.sessionInformationReport !== "object")
                    throw TypeError(".WebAPI.InformationReport.sessionInformationReport: object expected");
                message.sessionInformationReport = $root.WebAPI.SessionInformationReport.fromObject(object.sessionInformationReport);
            }
            if (object.historicalOrdersReport != null) {
                if (typeof object.historicalOrdersReport !== "object")
                    throw TypeError(".WebAPI.InformationReport.historicalOrdersReport: object expected");
                message.historicalOrdersReport = $root.WebAPI.HistoricalOrdersReport.fromObject(object.historicalOrdersReport);
            }
            return message;
        };

        InformationReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.isReportComplete = true;
                object.statusCode = 0;
                object.textMessage = "";
                object.accountsReport = null;
                object.symbolResolutionReport = null;
                object.lastStatementBalancesReport = null;
                object.currencyRatesReport = null;
                object.sessionInformationReport = null;
                object.historicalOrdersReport = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.isReportComplete != null && message.hasOwnProperty("isReportComplete"))
                object.isReportComplete = message.isReportComplete;
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            if (message.accountsReport != null && message.hasOwnProperty("accountsReport"))
                object.accountsReport = $root.WebAPI.AccountsReport.toObject(message.accountsReport, options);
            if (message.symbolResolutionReport != null && message.hasOwnProperty("symbolResolutionReport"))
                object.symbolResolutionReport = $root.WebAPI.SymbolResolutionReport.toObject(message.symbolResolutionReport, options);
            if (message.lastStatementBalancesReport != null && message.hasOwnProperty("lastStatementBalancesReport"))
                object.lastStatementBalancesReport = $root.WebAPI.LastStatementBalancesReport.toObject(message.lastStatementBalancesReport, options);
            if (message.currencyRatesReport != null && message.hasOwnProperty("currencyRatesReport"))
                object.currencyRatesReport = $root.WebAPI.CurrencyRatesReport.toObject(message.currencyRatesReport, options);
            if (message.sessionInformationReport != null && message.hasOwnProperty("sessionInformationReport"))
                object.sessionInformationReport = $root.WebAPI.SessionInformationReport.toObject(message.sessionInformationReport, options);
            if (message.historicalOrdersReport != null && message.hasOwnProperty("historicalOrdersReport"))
                object.historicalOrdersReport = $root.WebAPI.HistoricalOrdersReport.toObject(message.historicalOrdersReport, options);
            return object;
        };

        InformationReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        InformationReport.StatusCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[1] = "SUBSCRIBED"] = 1;
            values[valuesById[2] = "DROPPED"] = 2;
            values[valuesById[3] = "UPDATE"] = 3;
            values[valuesById[4] = "DISCONNECTED"] = 4;
            values[valuesById[101] = "FAILURE"] = 101;
            values[valuesById[104] = "NOT_FOUND"] = 104;
            return values;
        })();

        return InformationReport;
    })();

    WebAPI.AccountsRequest = (function() {

        function AccountsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        AccountsRequest.create = function create(properties) {
            return new AccountsRequest(properties);
        };

        AccountsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        AccountsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        AccountsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.AccountsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        AccountsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AccountsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        AccountsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.AccountsRequest)
                return object;
            return new $root.WebAPI.AccountsRequest();
        };

        AccountsRequest.toObject = function toObject() {
            return {};
        };

        AccountsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountsRequest;
    })();

    WebAPI.AccountsReport = (function() {

        function AccountsReport(properties) {
            this.brokerage = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        AccountsReport.prototype.brokerage = $util.emptyArray;

        AccountsReport.create = function create(properties) {
            return new AccountsReport(properties);
        };

        AccountsReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.brokerage != null && message.brokerage.length)
                for (let i = 0; i < message.brokerage.length; ++i)
                    $root.WebAPI.Brokerage.encode(message.brokerage[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        AccountsReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        AccountsReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.AccountsReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.brokerage && message.brokerage.length))
                        message.brokerage = [];
                    message.brokerage.push($root.WebAPI.Brokerage.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        AccountsReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AccountsReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.brokerage != null && message.hasOwnProperty("brokerage")) {
                if (!Array.isArray(message.brokerage))
                    return "brokerage: array expected";
                for (let i = 0; i < message.brokerage.length; ++i) {
                    let error = $root.WebAPI.Brokerage.verify(message.brokerage[i]);
                    if (error)
                        return "brokerage." + error;
                }
            }
            return null;
        };

        AccountsReport.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.AccountsReport)
                return object;
            let message = new $root.WebAPI.AccountsReport();
            if (object.brokerage) {
                if (!Array.isArray(object.brokerage))
                    throw TypeError(".WebAPI.AccountsReport.brokerage: array expected");
                message.brokerage = [];
                for (let i = 0; i < object.brokerage.length; ++i) {
                    if (typeof object.brokerage[i] !== "object")
                        throw TypeError(".WebAPI.AccountsReport.brokerage: object expected");
                    message.brokerage[i] = $root.WebAPI.Brokerage.fromObject(object.brokerage[i]);
                }
            }
            return message;
        };

        AccountsReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.brokerage = [];
            if (message.brokerage && message.brokerage.length) {
                object.brokerage = [];
                for (let j = 0; j < message.brokerage.length; ++j)
                    object.brokerage[j] = $root.WebAPI.Brokerage.toObject(message.brokerage[j], options);
            }
            return object;
        };

        AccountsReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountsReport;
    })();

    WebAPI.Brokerage = (function() {

        function Brokerage(properties) {
            this.salesSeries = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Brokerage.prototype.id = 0;
        Brokerage.prototype.name = "";
        Brokerage.prototype.salesSeries = $util.emptyArray;

        Brokerage.create = function create(properties) {
            return new Brokerage(properties);
        };

        Brokerage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.id);
            writer.uint32(18).string(message.name);
            if (message.salesSeries != null && message.salesSeries.length)
                for (let i = 0; i < message.salesSeries.length; ++i)
                    $root.WebAPI.SalesSeries.encode(message.salesSeries[i], writer.uint32(26).fork()).ldelim();
            return writer;
        };

        Brokerage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Brokerage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.Brokerage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    if (!(message.salesSeries && message.salesSeries.length))
                        message.salesSeries = [];
                    message.salesSeries.push($root.WebAPI.SalesSeries.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        Brokerage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Brokerage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.salesSeries != null && message.hasOwnProperty("salesSeries")) {
                if (!Array.isArray(message.salesSeries))
                    return "salesSeries: array expected";
                for (let i = 0; i < message.salesSeries.length; ++i) {
                    let error = $root.WebAPI.SalesSeries.verify(message.salesSeries[i]);
                    if (error)
                        return "salesSeries." + error;
                }
            }
            return null;
        };

        Brokerage.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.Brokerage)
                return object;
            let message = new $root.WebAPI.Brokerage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.salesSeries) {
                if (!Array.isArray(object.salesSeries))
                    throw TypeError(".WebAPI.Brokerage.salesSeries: array expected");
                message.salesSeries = [];
                for (let i = 0; i < object.salesSeries.length; ++i) {
                    if (typeof object.salesSeries[i] !== "object")
                        throw TypeError(".WebAPI.Brokerage.salesSeries: object expected");
                    message.salesSeries[i] = $root.WebAPI.SalesSeries.fromObject(object.salesSeries[i]);
                }
            }
            return message;
        };

        Brokerage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.salesSeries = [];
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.salesSeries && message.salesSeries.length) {
                object.salesSeries = [];
                for (let j = 0; j < message.salesSeries.length; ++j)
                    object.salesSeries[j] = $root.WebAPI.SalesSeries.toObject(message.salesSeries[j], options);
            }
            return object;
        };

        Brokerage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Brokerage;
    })();

    WebAPI.SalesSeries = (function() {

        function SalesSeries(properties) {
            this.account = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SalesSeries.prototype.number = "";
        SalesSeries.prototype.name = "";
        SalesSeries.prototype.account = $util.emptyArray;

        SalesSeries.create = function create(properties) {
            return new SalesSeries(properties);
        };

        SalesSeries.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.number);
            writer.uint32(18).string(message.name);
            if (message.account != null && message.account.length)
                for (let i = 0; i < message.account.length; ++i)
                    $root.WebAPI.Account.encode(message.account[i], writer.uint32(26).fork()).ldelim();
            return writer;
        };

        SalesSeries.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SalesSeries.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.SalesSeries();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.number = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    if (!(message.account && message.account.length))
                        message.account = [];
                    message.account.push($root.WebAPI.Account.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("number"))
                throw $util.ProtocolError("missing required 'number'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        SalesSeries.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SalesSeries.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.number))
                return "number: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.account != null && message.hasOwnProperty("account")) {
                if (!Array.isArray(message.account))
                    return "account: array expected";
                for (let i = 0; i < message.account.length; ++i) {
                    let error = $root.WebAPI.Account.verify(message.account[i]);
                    if (error)
                        return "account." + error;
                }
            }
            return null;
        };

        SalesSeries.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.SalesSeries)
                return object;
            let message = new $root.WebAPI.SalesSeries();
            if (object.number != null)
                message.number = String(object.number);
            if (object.name != null)
                message.name = String(object.name);
            if (object.account) {
                if (!Array.isArray(object.account))
                    throw TypeError(".WebAPI.SalesSeries.account: array expected");
                message.account = [];
                for (let i = 0; i < object.account.length; ++i) {
                    if (typeof object.account[i] !== "object")
                        throw TypeError(".WebAPI.SalesSeries.account: object expected");
                    message.account[i] = $root.WebAPI.Account.fromObject(object.account[i]);
                }
            }
            return message;
        };

        SalesSeries.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.account = [];
            if (options.defaults) {
                object.number = "";
                object.name = "";
            }
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.account && message.account.length) {
                object.account = [];
                for (let j = 0; j < message.account.length; ++j)
                    object.account[j] = $root.WebAPI.Account.toObject(message.account[j], options);
            }
            return object;
        };

        SalesSeries.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SalesSeries;
    })();

    WebAPI.Account = (function() {

        function Account(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Account.prototype.accountId = 0;
        Account.prototype.brokerageAccountId = "";
        Account.prototype.name = "";
        Account.prototype.lastStatementDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Account.prototype.isViewOnly = false;
        Account.prototype.isUnauthorized = false;
        Account.prototype.exchange = "";

        Account.create = function create(properties) {
            return new Account(properties);
        };

        Account.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).sint32(message.accountId);
            writer.uint32(18).string(message.brokerageAccountId);
            writer.uint32(26).string(message.name);
            writer.uint32(32).sint64(message.lastStatementDate);
            if (message.isViewOnly != null && message.hasOwnProperty("isViewOnly"))
                writer.uint32(40).bool(message.isViewOnly);
            if (message.isUnauthorized != null && message.hasOwnProperty("isUnauthorized"))
                writer.uint32(48).bool(message.isUnauthorized);
            if (message.exchange != null && message.hasOwnProperty("exchange"))
                writer.uint32(58).string(message.exchange);
            return writer;
        };

        Account.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Account.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.Account();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.sint32();
                    break;
                case 2:
                    message.brokerageAccountId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.lastStatementDate = reader.sint64();
                    break;
                case 5:
                    message.isViewOnly = reader.bool();
                    break;
                case 6:
                    message.isUnauthorized = reader.bool();
                    break;
                case 7:
                    message.exchange = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("accountId"))
                throw $util.ProtocolError("missing required 'accountId'", { instance: message });
            if (!message.hasOwnProperty("brokerageAccountId"))
                throw $util.ProtocolError("missing required 'brokerageAccountId'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("lastStatementDate"))
                throw $util.ProtocolError("missing required 'lastStatementDate'", { instance: message });
            return message;
        };

        Account.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Account.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.accountId))
                return "accountId: integer expected";
            if (!$util.isString(message.brokerageAccountId))
                return "brokerageAccountId: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.lastStatementDate) && !(message.lastStatementDate && $util.isInteger(message.lastStatementDate.low) && $util.isInteger(message.lastStatementDate.high)))
                return "lastStatementDate: integer|Long expected";
            if (message.isViewOnly != null && message.hasOwnProperty("isViewOnly"))
                if (typeof message.isViewOnly !== "boolean")
                    return "isViewOnly: boolean expected";
            if (message.isUnauthorized != null && message.hasOwnProperty("isUnauthorized"))
                if (typeof message.isUnauthorized !== "boolean")
                    return "isUnauthorized: boolean expected";
            if (message.exchange != null && message.hasOwnProperty("exchange"))
                if (!$util.isString(message.exchange))
                    return "exchange: string expected";
            return null;
        };

        Account.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.Account)
                return object;
            let message = new $root.WebAPI.Account();
            if (object.accountId != null)
                message.accountId = object.accountId | 0;
            if (object.brokerageAccountId != null)
                message.brokerageAccountId = String(object.brokerageAccountId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.lastStatementDate != null)
                if ($util.Long)
                    (message.lastStatementDate = $util.Long.fromValue(object.lastStatementDate)).unsigned = false;
                else if (typeof object.lastStatementDate === "string")
                    message.lastStatementDate = parseInt(object.lastStatementDate, 10);
                else if (typeof object.lastStatementDate === "number")
                    message.lastStatementDate = object.lastStatementDate;
                else if (typeof object.lastStatementDate === "object")
                    message.lastStatementDate = new $util.LongBits(object.lastStatementDate.low >>> 0, object.lastStatementDate.high >>> 0).toNumber();
            if (object.isViewOnly != null)
                message.isViewOnly = Boolean(object.isViewOnly);
            if (object.isUnauthorized != null)
                message.isUnauthorized = Boolean(object.isUnauthorized);
            if (object.exchange != null)
                message.exchange = String(object.exchange);
            return message;
        };

        Account.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.accountId = 0;
                object.brokerageAccountId = "";
                object.name = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lastStatementDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastStatementDate = options.longs === String ? "0" : 0;
                object.isViewOnly = false;
                object.isUnauthorized = false;
                object.exchange = "";
            }
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.brokerageAccountId != null && message.hasOwnProperty("brokerageAccountId"))
                object.brokerageAccountId = message.brokerageAccountId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.lastStatementDate != null && message.hasOwnProperty("lastStatementDate"))
                if (typeof message.lastStatementDate === "number")
                    object.lastStatementDate = options.longs === String ? String(message.lastStatementDate) : message.lastStatementDate;
                else
                    object.lastStatementDate = options.longs === String ? $util.Long.prototype.toString.call(message.lastStatementDate) : options.longs === Number ? new $util.LongBits(message.lastStatementDate.low >>> 0, message.lastStatementDate.high >>> 0).toNumber() : message.lastStatementDate;
            if (message.isViewOnly != null && message.hasOwnProperty("isViewOnly"))
                object.isViewOnly = message.isViewOnly;
            if (message.isUnauthorized != null && message.hasOwnProperty("isUnauthorized"))
                object.isUnauthorized = message.isUnauthorized;
            if (message.exchange != null && message.hasOwnProperty("exchange"))
                object.exchange = message.exchange;
            return object;
        };

        Account.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Account;
    })();

    WebAPI.SymbolResolutionRequest = (function() {

        function SymbolResolutionRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SymbolResolutionRequest.prototype.symbol = "";

        SymbolResolutionRequest.create = function create(properties) {
            return new SymbolResolutionRequest(properties);
        };

        SymbolResolutionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.symbol);
            return writer;
        };

        SymbolResolutionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SymbolResolutionRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.SymbolResolutionRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("symbol"))
                throw $util.ProtocolError("missing required 'symbol'", { instance: message });
            return message;
        };

        SymbolResolutionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SymbolResolutionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.symbol))
                return "symbol: string expected";
            return null;
        };

        SymbolResolutionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.SymbolResolutionRequest)
                return object;
            let message = new $root.WebAPI.SymbolResolutionRequest();
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            return message;
        };

        SymbolResolutionRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.symbol = "";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            return object;
        };

        SymbolResolutionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SymbolResolutionRequest;
    })();

    WebAPI.SymbolResolutionReport = (function() {

        function SymbolResolutionReport(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SymbolResolutionReport.prototype.contractMetadata = null;

        SymbolResolutionReport.create = function create(properties) {
            return new SymbolResolutionReport(properties);
        };

        SymbolResolutionReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.WebAPI.ContractMetadata.encode(message.contractMetadata, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        SymbolResolutionReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SymbolResolutionReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.SymbolResolutionReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contractMetadata = $root.WebAPI.ContractMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("contractMetadata"))
                throw $util.ProtocolError("missing required 'contractMetadata'", { instance: message });
            return message;
        };

        SymbolResolutionReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SymbolResolutionReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                let error = $root.WebAPI.ContractMetadata.verify(message.contractMetadata);
                if (error)
                    return "contractMetadata." + error;
            }
            return null;
        };

        SymbolResolutionReport.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.SymbolResolutionReport)
                return object;
            let message = new $root.WebAPI.SymbolResolutionReport();
            if (object.contractMetadata != null) {
                if (typeof object.contractMetadata !== "object")
                    throw TypeError(".WebAPI.SymbolResolutionReport.contractMetadata: object expected");
                message.contractMetadata = $root.WebAPI.ContractMetadata.fromObject(object.contractMetadata);
            }
            return message;
        };

        SymbolResolutionReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.contractMetadata = null;
            if (message.contractMetadata != null && message.hasOwnProperty("contractMetadata"))
                object.contractMetadata = $root.WebAPI.ContractMetadata.toObject(message.contractMetadata, options);
            return object;
        };

        SymbolResolutionReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SymbolResolutionReport;
    })();

    WebAPI.LastStatementBalancesRequest = (function() {

        function LastStatementBalancesRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LastStatementBalancesRequest.create = function create(properties) {
            return new LastStatementBalancesRequest(properties);
        };

        LastStatementBalancesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        LastStatementBalancesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LastStatementBalancesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.LastStatementBalancesRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LastStatementBalancesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LastStatementBalancesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        LastStatementBalancesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.LastStatementBalancesRequest)
                return object;
            return new $root.WebAPI.LastStatementBalancesRequest();
        };

        LastStatementBalancesRequest.toObject = function toObject() {
            return {};
        };

        LastStatementBalancesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LastStatementBalancesRequest;
    })();

    WebAPI.LastStatementBalancesReport = (function() {

        function LastStatementBalancesReport(properties) {
            this.balance = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LastStatementBalancesReport.prototype.balance = $util.emptyArray;

        LastStatementBalancesReport.create = function create(properties) {
            return new LastStatementBalancesReport(properties);
        };

        LastStatementBalancesReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.balance != null && message.balance.length)
                for (let i = 0; i < message.balance.length; ++i)
                    $root.WebAPI.Balance.encode(message.balance[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        LastStatementBalancesReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LastStatementBalancesReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.LastStatementBalancesReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.balance && message.balance.length))
                        message.balance = [];
                    message.balance.push($root.WebAPI.Balance.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LastStatementBalancesReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LastStatementBalancesReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.balance != null && message.hasOwnProperty("balance")) {
                if (!Array.isArray(message.balance))
                    return "balance: array expected";
                for (let i = 0; i < message.balance.length; ++i) {
                    let error = $root.WebAPI.Balance.verify(message.balance[i]);
                    if (error)
                        return "balance." + error;
                }
            }
            return null;
        };

        LastStatementBalancesReport.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.LastStatementBalancesReport)
                return object;
            let message = new $root.WebAPI.LastStatementBalancesReport();
            if (object.balance) {
                if (!Array.isArray(object.balance))
                    throw TypeError(".WebAPI.LastStatementBalancesReport.balance: array expected");
                message.balance = [];
                for (let i = 0; i < object.balance.length; ++i) {
                    if (typeof object.balance[i] !== "object")
                        throw TypeError(".WebAPI.LastStatementBalancesReport.balance: object expected");
                    message.balance[i] = $root.WebAPI.Balance.fromObject(object.balance[i]);
                }
            }
            return message;
        };

        LastStatementBalancesReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.balance = [];
            if (message.balance && message.balance.length) {
                object.balance = [];
                for (let j = 0; j < message.balance.length; ++j)
                    object.balance[j] = $root.WebAPI.Balance.toObject(message.balance[j], options);
            }
            return object;
        };

        LastStatementBalancesReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LastStatementBalancesReport;
    })();

    WebAPI.Balance = (function() {

        function Balance(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Balance.prototype.id = 0;
        Balance.prototype.accountId = 0;
        Balance.prototype.statementDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Balance.prototype.currency = "";
        Balance.prototype.balance = 0;
        Balance.prototype.totalValue = 0;
        Balance.prototype.ote = 0;
        Balance.prototype.upl = 0;
        Balance.prototype.mvo = 0;
        Balance.prototype.cashExcess = 0;
        Balance.prototype.collateral = 0;
        Balance.prototype.initialMargin = 0;

        Balance.create = function create(properties) {
            return new Balance(properties);
        };

        Balance.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).sint32(message.id);
            writer.uint32(16).sint32(message.accountId);
            writer.uint32(24).sint64(message.statementDate);
            writer.uint32(34).string(message.currency);
            writer.uint32(41).double(message.balance);
            writer.uint32(49).double(message.totalValue);
            writer.uint32(57).double(message.ote);
            writer.uint32(65).double(message.upl);
            writer.uint32(73).double(message.mvo);
            writer.uint32(81).double(message.cashExcess);
            writer.uint32(89).double(message.collateral);
            writer.uint32(97).double(message.initialMargin);
            return writer;
        };

        Balance.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Balance.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.Balance();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.sint32();
                    break;
                case 2:
                    message.accountId = reader.sint32();
                    break;
                case 3:
                    message.statementDate = reader.sint64();
                    break;
                case 4:
                    message.currency = reader.string();
                    break;
                case 5:
                    message.balance = reader.double();
                    break;
                case 6:
                    message.totalValue = reader.double();
                    break;
                case 7:
                    message.ote = reader.double();
                    break;
                case 8:
                    message.upl = reader.double();
                    break;
                case 9:
                    message.mvo = reader.double();
                    break;
                case 10:
                    message.cashExcess = reader.double();
                    break;
                case 11:
                    message.collateral = reader.double();
                    break;
                case 12:
                    message.initialMargin = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("accountId"))
                throw $util.ProtocolError("missing required 'accountId'", { instance: message });
            if (!message.hasOwnProperty("statementDate"))
                throw $util.ProtocolError("missing required 'statementDate'", { instance: message });
            if (!message.hasOwnProperty("currency"))
                throw $util.ProtocolError("missing required 'currency'", { instance: message });
            if (!message.hasOwnProperty("balance"))
                throw $util.ProtocolError("missing required 'balance'", { instance: message });
            if (!message.hasOwnProperty("totalValue"))
                throw $util.ProtocolError("missing required 'totalValue'", { instance: message });
            if (!message.hasOwnProperty("ote"))
                throw $util.ProtocolError("missing required 'ote'", { instance: message });
            if (!message.hasOwnProperty("upl"))
                throw $util.ProtocolError("missing required 'upl'", { instance: message });
            if (!message.hasOwnProperty("mvo"))
                throw $util.ProtocolError("missing required 'mvo'", { instance: message });
            if (!message.hasOwnProperty("cashExcess"))
                throw $util.ProtocolError("missing required 'cashExcess'", { instance: message });
            if (!message.hasOwnProperty("collateral"))
                throw $util.ProtocolError("missing required 'collateral'", { instance: message });
            if (!message.hasOwnProperty("initialMargin"))
                throw $util.ProtocolError("missing required 'initialMargin'", { instance: message });
            return message;
        };

        Balance.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Balance.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.accountId))
                return "accountId: integer expected";
            if (!$util.isInteger(message.statementDate) && !(message.statementDate && $util.isInteger(message.statementDate.low) && $util.isInteger(message.statementDate.high)))
                return "statementDate: integer|Long expected";
            if (!$util.isString(message.currency))
                return "currency: string expected";
            if (typeof message.balance !== "number")
                return "balance: number expected";
            if (typeof message.totalValue !== "number")
                return "totalValue: number expected";
            if (typeof message.ote !== "number")
                return "ote: number expected";
            if (typeof message.upl !== "number")
                return "upl: number expected";
            if (typeof message.mvo !== "number")
                return "mvo: number expected";
            if (typeof message.cashExcess !== "number")
                return "cashExcess: number expected";
            if (typeof message.collateral !== "number")
                return "collateral: number expected";
            if (typeof message.initialMargin !== "number")
                return "initialMargin: number expected";
            return null;
        };

        Balance.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.Balance)
                return object;
            let message = new $root.WebAPI.Balance();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.accountId != null)
                message.accountId = object.accountId | 0;
            if (object.statementDate != null)
                if ($util.Long)
                    (message.statementDate = $util.Long.fromValue(object.statementDate)).unsigned = false;
                else if (typeof object.statementDate === "string")
                    message.statementDate = parseInt(object.statementDate, 10);
                else if (typeof object.statementDate === "number")
                    message.statementDate = object.statementDate;
                else if (typeof object.statementDate === "object")
                    message.statementDate = new $util.LongBits(object.statementDate.low >>> 0, object.statementDate.high >>> 0).toNumber();
            if (object.currency != null)
                message.currency = String(object.currency);
            if (object.balance != null)
                message.balance = Number(object.balance);
            if (object.totalValue != null)
                message.totalValue = Number(object.totalValue);
            if (object.ote != null)
                message.ote = Number(object.ote);
            if (object.upl != null)
                message.upl = Number(object.upl);
            if (object.mvo != null)
                message.mvo = Number(object.mvo);
            if (object.cashExcess != null)
                message.cashExcess = Number(object.cashExcess);
            if (object.collateral != null)
                message.collateral = Number(object.collateral);
            if (object.initialMargin != null)
                message.initialMargin = Number(object.initialMargin);
            return message;
        };

        Balance.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.accountId = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.statementDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.statementDate = options.longs === String ? "0" : 0;
                object.currency = "";
                object.balance = 0;
                object.totalValue = 0;
                object.ote = 0;
                object.upl = 0;
                object.mvo = 0;
                object.cashExcess = 0;
                object.collateral = 0;
                object.initialMargin = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.statementDate != null && message.hasOwnProperty("statementDate"))
                if (typeof message.statementDate === "number")
                    object.statementDate = options.longs === String ? String(message.statementDate) : message.statementDate;
                else
                    object.statementDate = options.longs === String ? $util.Long.prototype.toString.call(message.statementDate) : options.longs === Number ? new $util.LongBits(message.statementDate.low >>> 0, message.statementDate.high >>> 0).toNumber() : message.statementDate;
            if (message.currency != null && message.hasOwnProperty("currency"))
                object.currency = message.currency;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            if (message.totalValue != null && message.hasOwnProperty("totalValue"))
                object.totalValue = options.json && !isFinite(message.totalValue) ? String(message.totalValue) : message.totalValue;
            if (message.ote != null && message.hasOwnProperty("ote"))
                object.ote = options.json && !isFinite(message.ote) ? String(message.ote) : message.ote;
            if (message.upl != null && message.hasOwnProperty("upl"))
                object.upl = options.json && !isFinite(message.upl) ? String(message.upl) : message.upl;
            if (message.mvo != null && message.hasOwnProperty("mvo"))
                object.mvo = options.json && !isFinite(message.mvo) ? String(message.mvo) : message.mvo;
            if (message.cashExcess != null && message.hasOwnProperty("cashExcess"))
                object.cashExcess = options.json && !isFinite(message.cashExcess) ? String(message.cashExcess) : message.cashExcess;
            if (message.collateral != null && message.hasOwnProperty("collateral"))
                object.collateral = options.json && !isFinite(message.collateral) ? String(message.collateral) : message.collateral;
            if (message.initialMargin != null && message.hasOwnProperty("initialMargin"))
                object.initialMargin = options.json && !isFinite(message.initialMargin) ? String(message.initialMargin) : message.initialMargin;
            return object;
        };

        Balance.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Balance;
    })();

    WebAPI.CurrencyRatesRequest = (function() {

        function CurrencyRatesRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CurrencyRatesRequest.create = function create(properties) {
            return new CurrencyRatesRequest(properties);
        };

        CurrencyRatesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        CurrencyRatesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CurrencyRatesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.CurrencyRatesRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        CurrencyRatesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CurrencyRatesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        CurrencyRatesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.CurrencyRatesRequest)
                return object;
            return new $root.WebAPI.CurrencyRatesRequest();
        };

        CurrencyRatesRequest.toObject = function toObject() {
            return {};
        };

        CurrencyRatesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CurrencyRatesRequest;
    })();

    WebAPI.CurrencyRatesReport = (function() {

        function CurrencyRatesReport(properties) {
            this.brokerageCurrencyRates = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CurrencyRatesReport.prototype.brokerageCurrencyRates = $util.emptyArray;

        CurrencyRatesReport.create = function create(properties) {
            return new CurrencyRatesReport(properties);
        };

        CurrencyRatesReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.brokerageCurrencyRates != null && message.brokerageCurrencyRates.length)
                for (let i = 0; i < message.brokerageCurrencyRates.length; ++i)
                    $root.WebAPI.BrokerageCurrencyRates.encode(message.brokerageCurrencyRates[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        CurrencyRatesReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CurrencyRatesReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.CurrencyRatesReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.brokerageCurrencyRates && message.brokerageCurrencyRates.length))
                        message.brokerageCurrencyRates = [];
                    message.brokerageCurrencyRates.push($root.WebAPI.BrokerageCurrencyRates.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        CurrencyRatesReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CurrencyRatesReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.brokerageCurrencyRates != null && message.hasOwnProperty("brokerageCurrencyRates")) {
                if (!Array.isArray(message.brokerageCurrencyRates))
                    return "brokerageCurrencyRates: array expected";
                for (let i = 0; i < message.brokerageCurrencyRates.length; ++i) {
                    let error = $root.WebAPI.BrokerageCurrencyRates.verify(message.brokerageCurrencyRates[i]);
                    if (error)
                        return "brokerageCurrencyRates." + error;
                }
            }
            return null;
        };

        CurrencyRatesReport.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.CurrencyRatesReport)
                return object;
            let message = new $root.WebAPI.CurrencyRatesReport();
            if (object.brokerageCurrencyRates) {
                if (!Array.isArray(object.brokerageCurrencyRates))
                    throw TypeError(".WebAPI.CurrencyRatesReport.brokerageCurrencyRates: array expected");
                message.brokerageCurrencyRates = [];
                for (let i = 0; i < object.brokerageCurrencyRates.length; ++i) {
                    if (typeof object.brokerageCurrencyRates[i] !== "object")
                        throw TypeError(".WebAPI.CurrencyRatesReport.brokerageCurrencyRates: object expected");
                    message.brokerageCurrencyRates[i] = $root.WebAPI.BrokerageCurrencyRates.fromObject(object.brokerageCurrencyRates[i]);
                }
            }
            return message;
        };

        CurrencyRatesReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.brokerageCurrencyRates = [];
            if (message.brokerageCurrencyRates && message.brokerageCurrencyRates.length) {
                object.brokerageCurrencyRates = [];
                for (let j = 0; j < message.brokerageCurrencyRates.length; ++j)
                    object.brokerageCurrencyRates[j] = $root.WebAPI.BrokerageCurrencyRates.toObject(message.brokerageCurrencyRates[j], options);
            }
            return object;
        };

        CurrencyRatesReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CurrencyRatesReport;
    })();

    WebAPI.BrokerageCurrencyRates = (function() {

        function BrokerageCurrencyRates(properties) {
            this.currencyRate = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrokerageCurrencyRates.prototype.brokerageId = 0;
        BrokerageCurrencyRates.prototype.masterCurrency = "";
        BrokerageCurrencyRates.prototype.statementDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BrokerageCurrencyRates.prototype.currencyRate = $util.emptyArray;

        BrokerageCurrencyRates.create = function create(properties) {
            return new BrokerageCurrencyRates(properties);
        };

        BrokerageCurrencyRates.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.brokerageId);
            writer.uint32(18).string(message.masterCurrency);
            writer.uint32(24).sint64(message.statementDate);
            if (message.currencyRate != null && message.currencyRate.length)
                for (let i = 0; i < message.currencyRate.length; ++i)
                    $root.WebAPI.CurrencyRate.encode(message.currencyRate[i], writer.uint32(34).fork()).ldelim();
            return writer;
        };

        BrokerageCurrencyRates.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrokerageCurrencyRates.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.BrokerageCurrencyRates();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.brokerageId = reader.uint32();
                    break;
                case 2:
                    message.masterCurrency = reader.string();
                    break;
                case 3:
                    message.statementDate = reader.sint64();
                    break;
                case 4:
                    if (!(message.currencyRate && message.currencyRate.length))
                        message.currencyRate = [];
                    message.currencyRate.push($root.WebAPI.CurrencyRate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("brokerageId"))
                throw $util.ProtocolError("missing required 'brokerageId'", { instance: message });
            if (!message.hasOwnProperty("masterCurrency"))
                throw $util.ProtocolError("missing required 'masterCurrency'", { instance: message });
            if (!message.hasOwnProperty("statementDate"))
                throw $util.ProtocolError("missing required 'statementDate'", { instance: message });
            return message;
        };

        BrokerageCurrencyRates.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrokerageCurrencyRates.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.brokerageId))
                return "brokerageId: integer expected";
            if (!$util.isString(message.masterCurrency))
                return "masterCurrency: string expected";
            if (!$util.isInteger(message.statementDate) && !(message.statementDate && $util.isInteger(message.statementDate.low) && $util.isInteger(message.statementDate.high)))
                return "statementDate: integer|Long expected";
            if (message.currencyRate != null && message.hasOwnProperty("currencyRate")) {
                if (!Array.isArray(message.currencyRate))
                    return "currencyRate: array expected";
                for (let i = 0; i < message.currencyRate.length; ++i) {
                    let error = $root.WebAPI.CurrencyRate.verify(message.currencyRate[i]);
                    if (error)
                        return "currencyRate." + error;
                }
            }
            return null;
        };

        BrokerageCurrencyRates.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.BrokerageCurrencyRates)
                return object;
            let message = new $root.WebAPI.BrokerageCurrencyRates();
            if (object.brokerageId != null)
                message.brokerageId = object.brokerageId >>> 0;
            if (object.masterCurrency != null)
                message.masterCurrency = String(object.masterCurrency);
            if (object.statementDate != null)
                if ($util.Long)
                    (message.statementDate = $util.Long.fromValue(object.statementDate)).unsigned = false;
                else if (typeof object.statementDate === "string")
                    message.statementDate = parseInt(object.statementDate, 10);
                else if (typeof object.statementDate === "number")
                    message.statementDate = object.statementDate;
                else if (typeof object.statementDate === "object")
                    message.statementDate = new $util.LongBits(object.statementDate.low >>> 0, object.statementDate.high >>> 0).toNumber();
            if (object.currencyRate) {
                if (!Array.isArray(object.currencyRate))
                    throw TypeError(".WebAPI.BrokerageCurrencyRates.currencyRate: array expected");
                message.currencyRate = [];
                for (let i = 0; i < object.currencyRate.length; ++i) {
                    if (typeof object.currencyRate[i] !== "object")
                        throw TypeError(".WebAPI.BrokerageCurrencyRates.currencyRate: object expected");
                    message.currencyRate[i] = $root.WebAPI.CurrencyRate.fromObject(object.currencyRate[i]);
                }
            }
            return message;
        };

        BrokerageCurrencyRates.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.currencyRate = [];
            if (options.defaults) {
                object.brokerageId = 0;
                object.masterCurrency = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.statementDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.statementDate = options.longs === String ? "0" : 0;
            }
            if (message.brokerageId != null && message.hasOwnProperty("brokerageId"))
                object.brokerageId = message.brokerageId;
            if (message.masterCurrency != null && message.hasOwnProperty("masterCurrency"))
                object.masterCurrency = message.masterCurrency;
            if (message.statementDate != null && message.hasOwnProperty("statementDate"))
                if (typeof message.statementDate === "number")
                    object.statementDate = options.longs === String ? String(message.statementDate) : message.statementDate;
                else
                    object.statementDate = options.longs === String ? $util.Long.prototype.toString.call(message.statementDate) : options.longs === Number ? new $util.LongBits(message.statementDate.low >>> 0, message.statementDate.high >>> 0).toNumber() : message.statementDate;
            if (message.currencyRate && message.currencyRate.length) {
                object.currencyRate = [];
                for (let j = 0; j < message.currencyRate.length; ++j)
                    object.currencyRate[j] = $root.WebAPI.CurrencyRate.toObject(message.currencyRate[j], options);
            }
            return object;
        };

        BrokerageCurrencyRates.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrokerageCurrencyRates;
    })();

    WebAPI.CurrencyRate = (function() {

        function CurrencyRate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CurrencyRate.prototype.currency = "";
        CurrencyRate.prototype.rate = 0;

        CurrencyRate.create = function create(properties) {
            return new CurrencyRate(properties);
        };

        CurrencyRate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(18).string(message.currency);
            writer.uint32(25).double(message.rate);
            return writer;
        };

        CurrencyRate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CurrencyRate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.CurrencyRate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.currency = reader.string();
                    break;
                case 3:
                    message.rate = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("currency"))
                throw $util.ProtocolError("missing required 'currency'", { instance: message });
            if (!message.hasOwnProperty("rate"))
                throw $util.ProtocolError("missing required 'rate'", { instance: message });
            return message;
        };

        CurrencyRate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CurrencyRate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.currency))
                return "currency: string expected";
            if (typeof message.rate !== "number")
                return "rate: number expected";
            return null;
        };

        CurrencyRate.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.CurrencyRate)
                return object;
            let message = new $root.WebAPI.CurrencyRate();
            if (object.currency != null)
                message.currency = String(object.currency);
            if (object.rate != null)
                message.rate = Number(object.rate);
            return message;
        };

        CurrencyRate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.currency = "";
                object.rate = 0;
            }
            if (message.currency != null && message.hasOwnProperty("currency"))
                object.currency = message.currency;
            if (message.rate != null && message.hasOwnProperty("rate"))
                object.rate = options.json && !isFinite(message.rate) ? String(message.rate) : message.rate;
            return object;
        };

        CurrencyRate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CurrencyRate;
    })();

    WebAPI.SessionInformationRequest = (function() {

        function SessionInformationRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SessionInformationRequest.prototype.sessionInfoId = 0;
        SessionInformationRequest.prototype.fromUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SessionInformationRequest.prototype.toUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SessionInformationRequest.create = function create(properties) {
            return new SessionInformationRequest(properties);
        };

        SessionInformationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).sint32(message.sessionInfoId);
            if (message.fromUtcTime != null && message.hasOwnProperty("fromUtcTime"))
                writer.uint32(16).sint64(message.fromUtcTime);
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                writer.uint32(24).sint64(message.toUtcTime);
            return writer;
        };

        SessionInformationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SessionInformationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.SessionInformationRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionInfoId = reader.sint32();
                    break;
                case 2:
                    message.fromUtcTime = reader.sint64();
                    break;
                case 3:
                    message.toUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sessionInfoId"))
                throw $util.ProtocolError("missing required 'sessionInfoId'", { instance: message });
            return message;
        };

        SessionInformationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SessionInformationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.sessionInfoId))
                return "sessionInfoId: integer expected";
            if (message.fromUtcTime != null && message.hasOwnProperty("fromUtcTime"))
                if (!$util.isInteger(message.fromUtcTime) && !(message.fromUtcTime && $util.isInteger(message.fromUtcTime.low) && $util.isInteger(message.fromUtcTime.high)))
                    return "fromUtcTime: integer|Long expected";
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                if (!$util.isInteger(message.toUtcTime) && !(message.toUtcTime && $util.isInteger(message.toUtcTime.low) && $util.isInteger(message.toUtcTime.high)))
                    return "toUtcTime: integer|Long expected";
            return null;
        };

        SessionInformationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.SessionInformationRequest)
                return object;
            let message = new $root.WebAPI.SessionInformationRequest();
            if (object.sessionInfoId != null)
                message.sessionInfoId = object.sessionInfoId | 0;
            if (object.fromUtcTime != null)
                if ($util.Long)
                    (message.fromUtcTime = $util.Long.fromValue(object.fromUtcTime)).unsigned = false;
                else if (typeof object.fromUtcTime === "string")
                    message.fromUtcTime = parseInt(object.fromUtcTime, 10);
                else if (typeof object.fromUtcTime === "number")
                    message.fromUtcTime = object.fromUtcTime;
                else if (typeof object.fromUtcTime === "object")
                    message.fromUtcTime = new $util.LongBits(object.fromUtcTime.low >>> 0, object.fromUtcTime.high >>> 0).toNumber();
            if (object.toUtcTime != null)
                if ($util.Long)
                    (message.toUtcTime = $util.Long.fromValue(object.toUtcTime)).unsigned = false;
                else if (typeof object.toUtcTime === "string")
                    message.toUtcTime = parseInt(object.toUtcTime, 10);
                else if (typeof object.toUtcTime === "number")
                    message.toUtcTime = object.toUtcTime;
                else if (typeof object.toUtcTime === "object")
                    message.toUtcTime = new $util.LongBits(object.toUtcTime.low >>> 0, object.toUtcTime.high >>> 0).toNumber();
            return message;
        };

        SessionInformationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sessionInfoId = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.fromUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fromUtcTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.toUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.toUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.sessionInfoId != null && message.hasOwnProperty("sessionInfoId"))
                object.sessionInfoId = message.sessionInfoId;
            if (message.fromUtcTime != null && message.hasOwnProperty("fromUtcTime"))
                if (typeof message.fromUtcTime === "number")
                    object.fromUtcTime = options.longs === String ? String(message.fromUtcTime) : message.fromUtcTime;
                else
                    object.fromUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.fromUtcTime) : options.longs === Number ? new $util.LongBits(message.fromUtcTime.low >>> 0, message.fromUtcTime.high >>> 0).toNumber() : message.fromUtcTime;
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                if (typeof message.toUtcTime === "number")
                    object.toUtcTime = options.longs === String ? String(message.toUtcTime) : message.toUtcTime;
                else
                    object.toUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.toUtcTime) : options.longs === Number ? new $util.LongBits(message.toUtcTime.low >>> 0, message.toUtcTime.high >>> 0).toNumber() : message.toUtcTime;
            return object;
        };

        SessionInformationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SessionInformationRequest;
    })();

    WebAPI.SessionInformationReport = (function() {

        function SessionInformationReport(properties) {
            this.sessionSegment = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SessionInformationReport.prototype.sessionInfoId = 0;
        SessionInformationReport.prototype.sessionSegment = $util.emptyArray;

        SessionInformationReport.create = function create(properties) {
            return new SessionInformationReport(properties);
        };

        SessionInformationReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).sint32(message.sessionInfoId);
            if (message.sessionSegment != null && message.sessionSegment.length)
                for (let i = 0; i < message.sessionSegment.length; ++i)
                    $root.WebAPI.SessionSegment.encode(message.sessionSegment[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };

        SessionInformationReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SessionInformationReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.SessionInformationReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionInfoId = reader.sint32();
                    break;
                case 2:
                    if (!(message.sessionSegment && message.sessionSegment.length))
                        message.sessionSegment = [];
                    message.sessionSegment.push($root.WebAPI.SessionSegment.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sessionInfoId"))
                throw $util.ProtocolError("missing required 'sessionInfoId'", { instance: message });
            return message;
        };

        SessionInformationReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SessionInformationReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.sessionInfoId))
                return "sessionInfoId: integer expected";
            if (message.sessionSegment != null && message.hasOwnProperty("sessionSegment")) {
                if (!Array.isArray(message.sessionSegment))
                    return "sessionSegment: array expected";
                for (let i = 0; i < message.sessionSegment.length; ++i) {
                    let error = $root.WebAPI.SessionSegment.verify(message.sessionSegment[i]);
                    if (error)
                        return "sessionSegment." + error;
                }
            }
            return null;
        };

        SessionInformationReport.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.SessionInformationReport)
                return object;
            let message = new $root.WebAPI.SessionInformationReport();
            if (object.sessionInfoId != null)
                message.sessionInfoId = object.sessionInfoId | 0;
            if (object.sessionSegment) {
                if (!Array.isArray(object.sessionSegment))
                    throw TypeError(".WebAPI.SessionInformationReport.sessionSegment: array expected");
                message.sessionSegment = [];
                for (let i = 0; i < object.sessionSegment.length; ++i) {
                    if (typeof object.sessionSegment[i] !== "object")
                        throw TypeError(".WebAPI.SessionInformationReport.sessionSegment: object expected");
                    message.sessionSegment[i] = $root.WebAPI.SessionSegment.fromObject(object.sessionSegment[i]);
                }
            }
            return message;
        };

        SessionInformationReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.sessionSegment = [];
            if (options.defaults)
                object.sessionInfoId = 0;
            if (message.sessionInfoId != null && message.hasOwnProperty("sessionInfoId"))
                object.sessionInfoId = message.sessionInfoId;
            if (message.sessionSegment && message.sessionSegment.length) {
                object.sessionSegment = [];
                for (let j = 0; j < message.sessionSegment.length; ++j)
                    object.sessionSegment[j] = $root.WebAPI.SessionSegment.toObject(message.sessionSegment[j], options);
            }
            return object;
        };

        SessionInformationReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SessionInformationReport;
    })();

    WebAPI.SessionSegment = (function() {

        function SessionSegment(properties) {
            this.sessionSchedule = [];
            this.tradingDay = [];
            this.dailyHoliday = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SessionSegment.prototype.sessionSegmentId = 0;
        SessionSegment.prototype.deleted = false;
        SessionSegment.prototype.fromUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SessionSegment.prototype.toUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SessionSegment.prototype.sessionSchedule = $util.emptyArray;
        SessionSegment.prototype.tradingDay = $util.emptyArray;
        SessionSegment.prototype.dailyHoliday = $util.emptyArray;

        SessionSegment.create = function create(properties) {
            return new SessionSegment(properties);
        };

        SessionSegment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).sint32(message.sessionSegmentId);
            if (message.deleted != null && message.hasOwnProperty("deleted"))
                writer.uint32(16).bool(message.deleted);
            if (message.fromUtcTime != null && message.hasOwnProperty("fromUtcTime"))
                writer.uint32(24).sint64(message.fromUtcTime);
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                writer.uint32(32).sint64(message.toUtcTime);
            if (message.sessionSchedule != null && message.sessionSchedule.length)
                for (let i = 0; i < message.sessionSchedule.length; ++i)
                    $root.WebAPI.SessionSchedule.encode(message.sessionSchedule[i], writer.uint32(42).fork()).ldelim();
            if (message.tradingDay != null && message.tradingDay.length)
                for (let i = 0; i < message.tradingDay.length; ++i)
                    $root.WebAPI.TradingDay.encode(message.tradingDay[i], writer.uint32(50).fork()).ldelim();
            if (message.dailyHoliday != null && message.dailyHoliday.length)
                for (let i = 0; i < message.dailyHoliday.length; ++i)
                    $root.WebAPI.SessionHoliday.encode(message.dailyHoliday[i], writer.uint32(58).fork()).ldelim();
            return writer;
        };

        SessionSegment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SessionSegment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.SessionSegment();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionSegmentId = reader.sint32();
                    break;
                case 2:
                    message.deleted = reader.bool();
                    break;
                case 3:
                    message.fromUtcTime = reader.sint64();
                    break;
                case 4:
                    message.toUtcTime = reader.sint64();
                    break;
                case 5:
                    if (!(message.sessionSchedule && message.sessionSchedule.length))
                        message.sessionSchedule = [];
                    message.sessionSchedule.push($root.WebAPI.SessionSchedule.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.tradingDay && message.tradingDay.length))
                        message.tradingDay = [];
                    message.tradingDay.push($root.WebAPI.TradingDay.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.dailyHoliday && message.dailyHoliday.length))
                        message.dailyHoliday = [];
                    message.dailyHoliday.push($root.WebAPI.SessionHoliday.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sessionSegmentId"))
                throw $util.ProtocolError("missing required 'sessionSegmentId'", { instance: message });
            return message;
        };

        SessionSegment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SessionSegment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.sessionSegmentId))
                return "sessionSegmentId: integer expected";
            if (message.deleted != null && message.hasOwnProperty("deleted"))
                if (typeof message.deleted !== "boolean")
                    return "deleted: boolean expected";
            if (message.fromUtcTime != null && message.hasOwnProperty("fromUtcTime"))
                if (!$util.isInteger(message.fromUtcTime) && !(message.fromUtcTime && $util.isInteger(message.fromUtcTime.low) && $util.isInteger(message.fromUtcTime.high)))
                    return "fromUtcTime: integer|Long expected";
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                if (!$util.isInteger(message.toUtcTime) && !(message.toUtcTime && $util.isInteger(message.toUtcTime.low) && $util.isInteger(message.toUtcTime.high)))
                    return "toUtcTime: integer|Long expected";
            if (message.sessionSchedule != null && message.hasOwnProperty("sessionSchedule")) {
                if (!Array.isArray(message.sessionSchedule))
                    return "sessionSchedule: array expected";
                for (let i = 0; i < message.sessionSchedule.length; ++i) {
                    let error = $root.WebAPI.SessionSchedule.verify(message.sessionSchedule[i]);
                    if (error)
                        return "sessionSchedule." + error;
                }
            }
            if (message.tradingDay != null && message.hasOwnProperty("tradingDay")) {
                if (!Array.isArray(message.tradingDay))
                    return "tradingDay: array expected";
                for (let i = 0; i < message.tradingDay.length; ++i) {
                    let error = $root.WebAPI.TradingDay.verify(message.tradingDay[i]);
                    if (error)
                        return "tradingDay." + error;
                }
            }
            if (message.dailyHoliday != null && message.hasOwnProperty("dailyHoliday")) {
                if (!Array.isArray(message.dailyHoliday))
                    return "dailyHoliday: array expected";
                for (let i = 0; i < message.dailyHoliday.length; ++i) {
                    let error = $root.WebAPI.SessionHoliday.verify(message.dailyHoliday[i]);
                    if (error)
                        return "dailyHoliday." + error;
                }
            }
            return null;
        };

        SessionSegment.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.SessionSegment)
                return object;
            let message = new $root.WebAPI.SessionSegment();
            if (object.sessionSegmentId != null)
                message.sessionSegmentId = object.sessionSegmentId | 0;
            if (object.deleted != null)
                message.deleted = Boolean(object.deleted);
            if (object.fromUtcTime != null)
                if ($util.Long)
                    (message.fromUtcTime = $util.Long.fromValue(object.fromUtcTime)).unsigned = false;
                else if (typeof object.fromUtcTime === "string")
                    message.fromUtcTime = parseInt(object.fromUtcTime, 10);
                else if (typeof object.fromUtcTime === "number")
                    message.fromUtcTime = object.fromUtcTime;
                else if (typeof object.fromUtcTime === "object")
                    message.fromUtcTime = new $util.LongBits(object.fromUtcTime.low >>> 0, object.fromUtcTime.high >>> 0).toNumber();
            if (object.toUtcTime != null)
                if ($util.Long)
                    (message.toUtcTime = $util.Long.fromValue(object.toUtcTime)).unsigned = false;
                else if (typeof object.toUtcTime === "string")
                    message.toUtcTime = parseInt(object.toUtcTime, 10);
                else if (typeof object.toUtcTime === "number")
                    message.toUtcTime = object.toUtcTime;
                else if (typeof object.toUtcTime === "object")
                    message.toUtcTime = new $util.LongBits(object.toUtcTime.low >>> 0, object.toUtcTime.high >>> 0).toNumber();
            if (object.sessionSchedule) {
                if (!Array.isArray(object.sessionSchedule))
                    throw TypeError(".WebAPI.SessionSegment.sessionSchedule: array expected");
                message.sessionSchedule = [];
                for (let i = 0; i < object.sessionSchedule.length; ++i) {
                    if (typeof object.sessionSchedule[i] !== "object")
                        throw TypeError(".WebAPI.SessionSegment.sessionSchedule: object expected");
                    message.sessionSchedule[i] = $root.WebAPI.SessionSchedule.fromObject(object.sessionSchedule[i]);
                }
            }
            if (object.tradingDay) {
                if (!Array.isArray(object.tradingDay))
                    throw TypeError(".WebAPI.SessionSegment.tradingDay: array expected");
                message.tradingDay = [];
                for (let i = 0; i < object.tradingDay.length; ++i) {
                    if (typeof object.tradingDay[i] !== "object")
                        throw TypeError(".WebAPI.SessionSegment.tradingDay: object expected");
                    message.tradingDay[i] = $root.WebAPI.TradingDay.fromObject(object.tradingDay[i]);
                }
            }
            if (object.dailyHoliday) {
                if (!Array.isArray(object.dailyHoliday))
                    throw TypeError(".WebAPI.SessionSegment.dailyHoliday: array expected");
                message.dailyHoliday = [];
                for (let i = 0; i < object.dailyHoliday.length; ++i) {
                    if (typeof object.dailyHoliday[i] !== "object")
                        throw TypeError(".WebAPI.SessionSegment.dailyHoliday: object expected");
                    message.dailyHoliday[i] = $root.WebAPI.SessionHoliday.fromObject(object.dailyHoliday[i]);
                }
            }
            return message;
        };

        SessionSegment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.sessionSchedule = [];
                object.tradingDay = [];
                object.dailyHoliday = [];
            }
            if (options.defaults) {
                object.sessionSegmentId = 0;
                object.deleted = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.fromUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fromUtcTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.toUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.toUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.sessionSegmentId != null && message.hasOwnProperty("sessionSegmentId"))
                object.sessionSegmentId = message.sessionSegmentId;
            if (message.deleted != null && message.hasOwnProperty("deleted"))
                object.deleted = message.deleted;
            if (message.fromUtcTime != null && message.hasOwnProperty("fromUtcTime"))
                if (typeof message.fromUtcTime === "number")
                    object.fromUtcTime = options.longs === String ? String(message.fromUtcTime) : message.fromUtcTime;
                else
                    object.fromUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.fromUtcTime) : options.longs === Number ? new $util.LongBits(message.fromUtcTime.low >>> 0, message.fromUtcTime.high >>> 0).toNumber() : message.fromUtcTime;
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                if (typeof message.toUtcTime === "number")
                    object.toUtcTime = options.longs === String ? String(message.toUtcTime) : message.toUtcTime;
                else
                    object.toUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.toUtcTime) : options.longs === Number ? new $util.LongBits(message.toUtcTime.low >>> 0, message.toUtcTime.high >>> 0).toNumber() : message.toUtcTime;
            if (message.sessionSchedule && message.sessionSchedule.length) {
                object.sessionSchedule = [];
                for (let j = 0; j < message.sessionSchedule.length; ++j)
                    object.sessionSchedule[j] = $root.WebAPI.SessionSchedule.toObject(message.sessionSchedule[j], options);
            }
            if (message.tradingDay && message.tradingDay.length) {
                object.tradingDay = [];
                for (let j = 0; j < message.tradingDay.length; ++j)
                    object.tradingDay[j] = $root.WebAPI.TradingDay.toObject(message.tradingDay[j], options);
            }
            if (message.dailyHoliday && message.dailyHoliday.length) {
                object.dailyHoliday = [];
                for (let j = 0; j < message.dailyHoliday.length; ++j)
                    object.dailyHoliday[j] = $root.WebAPI.SessionHoliday.toObject(message.dailyHoliday[j], options);
            }
            return object;
        };

        SessionSegment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SessionSegment;
    })();

    WebAPI.SessionSchedule = (function() {

        function SessionSchedule(properties) {
            this.sessionDay = [];
            this.sessionHoliday = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SessionSchedule.prototype.name = "";
        SessionSchedule.prototype.sessionDay = $util.emptyArray;
        SessionSchedule.prototype.sessionHoliday = $util.emptyArray;
        SessionSchedule.prototype.isPrimary = false;

        SessionSchedule.create = function create(properties) {
            return new SessionSchedule(properties);
        };

        SessionSchedule.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.name);
            if (message.sessionDay != null && message.sessionDay.length)
                for (let i = 0; i < message.sessionDay.length; ++i)
                    $root.WebAPI.SessionDay.encode(message.sessionDay[i], writer.uint32(18).fork()).ldelim();
            if (message.sessionHoliday != null && message.sessionHoliday.length)
                for (let i = 0; i < message.sessionHoliday.length; ++i)
                    $root.WebAPI.SessionHoliday.encode(message.sessionHoliday[i], writer.uint32(26).fork()).ldelim();
            if (message.isPrimary != null && message.hasOwnProperty("isPrimary"))
                writer.uint32(32).bool(message.isPrimary);
            return writer;
        };

        SessionSchedule.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SessionSchedule.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.SessionSchedule();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.sessionDay && message.sessionDay.length))
                        message.sessionDay = [];
                    message.sessionDay.push($root.WebAPI.SessionDay.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.sessionHoliday && message.sessionHoliday.length))
                        message.sessionHoliday = [];
                    message.sessionHoliday.push($root.WebAPI.SessionHoliday.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.isPrimary = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        SessionSchedule.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SessionSchedule.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.sessionDay != null && message.hasOwnProperty("sessionDay")) {
                if (!Array.isArray(message.sessionDay))
                    return "sessionDay: array expected";
                for (let i = 0; i < message.sessionDay.length; ++i) {
                    let error = $root.WebAPI.SessionDay.verify(message.sessionDay[i]);
                    if (error)
                        return "sessionDay." + error;
                }
            }
            if (message.sessionHoliday != null && message.hasOwnProperty("sessionHoliday")) {
                if (!Array.isArray(message.sessionHoliday))
                    return "sessionHoliday: array expected";
                for (let i = 0; i < message.sessionHoliday.length; ++i) {
                    let error = $root.WebAPI.SessionHoliday.verify(message.sessionHoliday[i]);
                    if (error)
                        return "sessionHoliday." + error;
                }
            }
            if (message.isPrimary != null && message.hasOwnProperty("isPrimary"))
                if (typeof message.isPrimary !== "boolean")
                    return "isPrimary: boolean expected";
            return null;
        };

        SessionSchedule.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.SessionSchedule)
                return object;
            let message = new $root.WebAPI.SessionSchedule();
            if (object.name != null)
                message.name = String(object.name);
            if (object.sessionDay) {
                if (!Array.isArray(object.sessionDay))
                    throw TypeError(".WebAPI.SessionSchedule.sessionDay: array expected");
                message.sessionDay = [];
                for (let i = 0; i < object.sessionDay.length; ++i) {
                    if (typeof object.sessionDay[i] !== "object")
                        throw TypeError(".WebAPI.SessionSchedule.sessionDay: object expected");
                    message.sessionDay[i] = $root.WebAPI.SessionDay.fromObject(object.sessionDay[i]);
                }
            }
            if (object.sessionHoliday) {
                if (!Array.isArray(object.sessionHoliday))
                    throw TypeError(".WebAPI.SessionSchedule.sessionHoliday: array expected");
                message.sessionHoliday = [];
                for (let i = 0; i < object.sessionHoliday.length; ++i) {
                    if (typeof object.sessionHoliday[i] !== "object")
                        throw TypeError(".WebAPI.SessionSchedule.sessionHoliday: object expected");
                    message.sessionHoliday[i] = $root.WebAPI.SessionHoliday.fromObject(object.sessionHoliday[i]);
                }
            }
            if (object.isPrimary != null)
                message.isPrimary = Boolean(object.isPrimary);
            return message;
        };

        SessionSchedule.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.sessionDay = [];
                object.sessionHoliday = [];
            }
            if (options.defaults) {
                object.name = "";
                object.isPrimary = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.sessionDay && message.sessionDay.length) {
                object.sessionDay = [];
                for (let j = 0; j < message.sessionDay.length; ++j)
                    object.sessionDay[j] = $root.WebAPI.SessionDay.toObject(message.sessionDay[j], options);
            }
            if (message.sessionHoliday && message.sessionHoliday.length) {
                object.sessionHoliday = [];
                for (let j = 0; j < message.sessionHoliday.length; ++j)
                    object.sessionHoliday[j] = $root.WebAPI.SessionHoliday.toObject(message.sessionHoliday[j], options);
            }
            if (message.isPrimary != null && message.hasOwnProperty("isPrimary"))
                object.isPrimary = message.isPrimary;
            return object;
        };

        SessionSchedule.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SessionSchedule;
    })();

    WebAPI.DayOfWeek = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Sunday"] = 0;
        values[valuesById[1] = "Monday"] = 1;
        values[valuesById[2] = "Tuesday"] = 2;
        values[valuesById[3] = "Wednesday"] = 3;
        values[valuesById[4] = "Thursday"] = 4;
        values[valuesById[5] = "Friday"] = 5;
        values[valuesById[6] = "Saturday"] = 6;
        return values;
    })();

    WebAPI.TradingDay = (function() {

        function TradingDay(properties) {
            this.dayOfWeek = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TradingDay.prototype.dayOfWeek = $util.emptyArray;
        TradingDay.prototype.startOffset = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        TradingDay.create = function create(properties) {
            return new TradingDay(properties);
        };

        TradingDay.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dayOfWeek != null && message.dayOfWeek.length)
                for (let i = 0; i < message.dayOfWeek.length; ++i)
                    writer.uint32(8).int32(message.dayOfWeek[i]);
            if (message.startOffset != null && message.hasOwnProperty("startOffset"))
                writer.uint32(16).sint64(message.startOffset);
            return writer;
        };

        TradingDay.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TradingDay.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TradingDay();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.dayOfWeek && message.dayOfWeek.length))
                        message.dayOfWeek = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dayOfWeek.push(reader.int32());
                    } else
                        message.dayOfWeek.push(reader.int32());
                    break;
                case 2:
                    message.startOffset = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TradingDay.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TradingDay.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dayOfWeek != null && message.hasOwnProperty("dayOfWeek")) {
                if (!Array.isArray(message.dayOfWeek))
                    return "dayOfWeek: array expected";
                for (let i = 0; i < message.dayOfWeek.length; ++i)
                    switch (message.dayOfWeek[i]) {
                    default:
                        return "dayOfWeek: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
            }
            if (message.startOffset != null && message.hasOwnProperty("startOffset"))
                if (!$util.isInteger(message.startOffset) && !(message.startOffset && $util.isInteger(message.startOffset.low) && $util.isInteger(message.startOffset.high)))
                    return "startOffset: integer|Long expected";
            return null;
        };

        TradingDay.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TradingDay)
                return object;
            let message = new $root.WebAPI.TradingDay();
            if (object.dayOfWeek) {
                if (!Array.isArray(object.dayOfWeek))
                    throw TypeError(".WebAPI.TradingDay.dayOfWeek: array expected");
                message.dayOfWeek = [];
                for (let i = 0; i < object.dayOfWeek.length; ++i)
                    switch (object.dayOfWeek[i]) {
                    default:
                    case "Sunday":
                    case 0:
                        message.dayOfWeek[i] = 0;
                        break;
                    case "Monday":
                    case 1:
                        message.dayOfWeek[i] = 1;
                        break;
                    case "Tuesday":
                    case 2:
                        message.dayOfWeek[i] = 2;
                        break;
                    case "Wednesday":
                    case 3:
                        message.dayOfWeek[i] = 3;
                        break;
                    case "Thursday":
                    case 4:
                        message.dayOfWeek[i] = 4;
                        break;
                    case "Friday":
                    case 5:
                        message.dayOfWeek[i] = 5;
                        break;
                    case "Saturday":
                    case 6:
                        message.dayOfWeek[i] = 6;
                        break;
                    }
            }
            if (object.startOffset != null)
                if ($util.Long)
                    (message.startOffset = $util.Long.fromValue(object.startOffset)).unsigned = false;
                else if (typeof object.startOffset === "string")
                    message.startOffset = parseInt(object.startOffset, 10);
                else if (typeof object.startOffset === "number")
                    message.startOffset = object.startOffset;
                else if (typeof object.startOffset === "object")
                    message.startOffset = new $util.LongBits(object.startOffset.low >>> 0, object.startOffset.high >>> 0).toNumber();
            return message;
        };

        TradingDay.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.dayOfWeek = [];
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.startOffset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startOffset = options.longs === String ? "0" : 0;
            if (message.dayOfWeek && message.dayOfWeek.length) {
                object.dayOfWeek = [];
                for (let j = 0; j < message.dayOfWeek.length; ++j)
                    object.dayOfWeek[j] = options.enums === String ? $root.WebAPI.DayOfWeek[message.dayOfWeek[j]] : message.dayOfWeek[j];
            }
            if (message.startOffset != null && message.hasOwnProperty("startOffset"))
                if (typeof message.startOffset === "number")
                    object.startOffset = options.longs === String ? String(message.startOffset) : message.startOffset;
                else
                    object.startOffset = options.longs === String ? $util.Long.prototype.toString.call(message.startOffset) : options.longs === Number ? new $util.LongBits(message.startOffset.low >>> 0, message.startOffset.high >>> 0).toNumber() : message.startOffset;
            return object;
        };

        TradingDay.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TradingDay;
    })();

    WebAPI.SessionDay = (function() {

        function SessionDay(properties) {
            this.dayOfWeek = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SessionDay.prototype.dayOfWeek = $util.emptyArray;
        SessionDay.prototype.preOpenOffset = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SessionDay.prototype.openOffset = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SessionDay.prototype.closeOffset = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SessionDay.prototype.postCloseOffset = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SessionDay.create = function create(properties) {
            return new SessionDay(properties);
        };

        SessionDay.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dayOfWeek != null && message.dayOfWeek.length)
                for (let i = 0; i < message.dayOfWeek.length; ++i)
                    writer.uint32(8).int32(message.dayOfWeek[i]);
            if (message.preOpenOffset != null && message.hasOwnProperty("preOpenOffset"))
                writer.uint32(16).sint64(message.preOpenOffset);
            if (message.openOffset != null && message.hasOwnProperty("openOffset"))
                writer.uint32(24).sint64(message.openOffset);
            if (message.closeOffset != null && message.hasOwnProperty("closeOffset"))
                writer.uint32(32).sint64(message.closeOffset);
            if (message.postCloseOffset != null && message.hasOwnProperty("postCloseOffset"))
                writer.uint32(40).sint64(message.postCloseOffset);
            return writer;
        };

        SessionDay.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SessionDay.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.SessionDay();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.dayOfWeek && message.dayOfWeek.length))
                        message.dayOfWeek = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dayOfWeek.push(reader.int32());
                    } else
                        message.dayOfWeek.push(reader.int32());
                    break;
                case 2:
                    message.preOpenOffset = reader.sint64();
                    break;
                case 3:
                    message.openOffset = reader.sint64();
                    break;
                case 4:
                    message.closeOffset = reader.sint64();
                    break;
                case 5:
                    message.postCloseOffset = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SessionDay.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SessionDay.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dayOfWeek != null && message.hasOwnProperty("dayOfWeek")) {
                if (!Array.isArray(message.dayOfWeek))
                    return "dayOfWeek: array expected";
                for (let i = 0; i < message.dayOfWeek.length; ++i)
                    switch (message.dayOfWeek[i]) {
                    default:
                        return "dayOfWeek: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
            }
            if (message.preOpenOffset != null && message.hasOwnProperty("preOpenOffset"))
                if (!$util.isInteger(message.preOpenOffset) && !(message.preOpenOffset && $util.isInteger(message.preOpenOffset.low) && $util.isInteger(message.preOpenOffset.high)))
                    return "preOpenOffset: integer|Long expected";
            if (message.openOffset != null && message.hasOwnProperty("openOffset"))
                if (!$util.isInteger(message.openOffset) && !(message.openOffset && $util.isInteger(message.openOffset.low) && $util.isInteger(message.openOffset.high)))
                    return "openOffset: integer|Long expected";
            if (message.closeOffset != null && message.hasOwnProperty("closeOffset"))
                if (!$util.isInteger(message.closeOffset) && !(message.closeOffset && $util.isInteger(message.closeOffset.low) && $util.isInteger(message.closeOffset.high)))
                    return "closeOffset: integer|Long expected";
            if (message.postCloseOffset != null && message.hasOwnProperty("postCloseOffset"))
                if (!$util.isInteger(message.postCloseOffset) && !(message.postCloseOffset && $util.isInteger(message.postCloseOffset.low) && $util.isInteger(message.postCloseOffset.high)))
                    return "postCloseOffset: integer|Long expected";
            return null;
        };

        SessionDay.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.SessionDay)
                return object;
            let message = new $root.WebAPI.SessionDay();
            if (object.dayOfWeek) {
                if (!Array.isArray(object.dayOfWeek))
                    throw TypeError(".WebAPI.SessionDay.dayOfWeek: array expected");
                message.dayOfWeek = [];
                for (let i = 0; i < object.dayOfWeek.length; ++i)
                    switch (object.dayOfWeek[i]) {
                    default:
                    case "Sunday":
                    case 0:
                        message.dayOfWeek[i] = 0;
                        break;
                    case "Monday":
                    case 1:
                        message.dayOfWeek[i] = 1;
                        break;
                    case "Tuesday":
                    case 2:
                        message.dayOfWeek[i] = 2;
                        break;
                    case "Wednesday":
                    case 3:
                        message.dayOfWeek[i] = 3;
                        break;
                    case "Thursday":
                    case 4:
                        message.dayOfWeek[i] = 4;
                        break;
                    case "Friday":
                    case 5:
                        message.dayOfWeek[i] = 5;
                        break;
                    case "Saturday":
                    case 6:
                        message.dayOfWeek[i] = 6;
                        break;
                    }
            }
            if (object.preOpenOffset != null)
                if ($util.Long)
                    (message.preOpenOffset = $util.Long.fromValue(object.preOpenOffset)).unsigned = false;
                else if (typeof object.preOpenOffset === "string")
                    message.preOpenOffset = parseInt(object.preOpenOffset, 10);
                else if (typeof object.preOpenOffset === "number")
                    message.preOpenOffset = object.preOpenOffset;
                else if (typeof object.preOpenOffset === "object")
                    message.preOpenOffset = new $util.LongBits(object.preOpenOffset.low >>> 0, object.preOpenOffset.high >>> 0).toNumber();
            if (object.openOffset != null)
                if ($util.Long)
                    (message.openOffset = $util.Long.fromValue(object.openOffset)).unsigned = false;
                else if (typeof object.openOffset === "string")
                    message.openOffset = parseInt(object.openOffset, 10);
                else if (typeof object.openOffset === "number")
                    message.openOffset = object.openOffset;
                else if (typeof object.openOffset === "object")
                    message.openOffset = new $util.LongBits(object.openOffset.low >>> 0, object.openOffset.high >>> 0).toNumber();
            if (object.closeOffset != null)
                if ($util.Long)
                    (message.closeOffset = $util.Long.fromValue(object.closeOffset)).unsigned = false;
                else if (typeof object.closeOffset === "string")
                    message.closeOffset = parseInt(object.closeOffset, 10);
                else if (typeof object.closeOffset === "number")
                    message.closeOffset = object.closeOffset;
                else if (typeof object.closeOffset === "object")
                    message.closeOffset = new $util.LongBits(object.closeOffset.low >>> 0, object.closeOffset.high >>> 0).toNumber();
            if (object.postCloseOffset != null)
                if ($util.Long)
                    (message.postCloseOffset = $util.Long.fromValue(object.postCloseOffset)).unsigned = false;
                else if (typeof object.postCloseOffset === "string")
                    message.postCloseOffset = parseInt(object.postCloseOffset, 10);
                else if (typeof object.postCloseOffset === "number")
                    message.postCloseOffset = object.postCloseOffset;
                else if (typeof object.postCloseOffset === "object")
                    message.postCloseOffset = new $util.LongBits(object.postCloseOffset.low >>> 0, object.postCloseOffset.high >>> 0).toNumber();
            return message;
        };

        SessionDay.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.dayOfWeek = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.preOpenOffset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.preOpenOffset = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.openOffset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.openOffset = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.closeOffset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.closeOffset = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.postCloseOffset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.postCloseOffset = options.longs === String ? "0" : 0;
            }
            if (message.dayOfWeek && message.dayOfWeek.length) {
                object.dayOfWeek = [];
                for (let j = 0; j < message.dayOfWeek.length; ++j)
                    object.dayOfWeek[j] = options.enums === String ? $root.WebAPI.DayOfWeek[message.dayOfWeek[j]] : message.dayOfWeek[j];
            }
            if (message.preOpenOffset != null && message.hasOwnProperty("preOpenOffset"))
                if (typeof message.preOpenOffset === "number")
                    object.preOpenOffset = options.longs === String ? String(message.preOpenOffset) : message.preOpenOffset;
                else
                    object.preOpenOffset = options.longs === String ? $util.Long.prototype.toString.call(message.preOpenOffset) : options.longs === Number ? new $util.LongBits(message.preOpenOffset.low >>> 0, message.preOpenOffset.high >>> 0).toNumber() : message.preOpenOffset;
            if (message.openOffset != null && message.hasOwnProperty("openOffset"))
                if (typeof message.openOffset === "number")
                    object.openOffset = options.longs === String ? String(message.openOffset) : message.openOffset;
                else
                    object.openOffset = options.longs === String ? $util.Long.prototype.toString.call(message.openOffset) : options.longs === Number ? new $util.LongBits(message.openOffset.low >>> 0, message.openOffset.high >>> 0).toNumber() : message.openOffset;
            if (message.closeOffset != null && message.hasOwnProperty("closeOffset"))
                if (typeof message.closeOffset === "number")
                    object.closeOffset = options.longs === String ? String(message.closeOffset) : message.closeOffset;
                else
                    object.closeOffset = options.longs === String ? $util.Long.prototype.toString.call(message.closeOffset) : options.longs === Number ? new $util.LongBits(message.closeOffset.low >>> 0, message.closeOffset.high >>> 0).toNumber() : message.closeOffset;
            if (message.postCloseOffset != null && message.hasOwnProperty("postCloseOffset"))
                if (typeof message.postCloseOffset === "number")
                    object.postCloseOffset = options.longs === String ? String(message.postCloseOffset) : message.postCloseOffset;
                else
                    object.postCloseOffset = options.longs === String ? $util.Long.prototype.toString.call(message.postCloseOffset) : options.longs === Number ? new $util.LongBits(message.postCloseOffset.low >>> 0, message.postCloseOffset.high >>> 0).toNumber() : message.postCloseOffset;
            return object;
        };

        SessionDay.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SessionDay;
    })();

    WebAPI.SessionHoliday = (function() {

        function SessionHoliday(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SessionHoliday.prototype.holidayDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SessionHoliday.prototype.holidayName = "";

        SessionHoliday.create = function create(properties) {
            return new SessionHoliday(properties);
        };

        SessionHoliday.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).sint64(message.holidayDate);
            writer.uint32(18).string(message.holidayName);
            return writer;
        };

        SessionHoliday.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SessionHoliday.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.SessionHoliday();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.holidayDate = reader.sint64();
                    break;
                case 2:
                    message.holidayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("holidayDate"))
                throw $util.ProtocolError("missing required 'holidayDate'", { instance: message });
            if (!message.hasOwnProperty("holidayName"))
                throw $util.ProtocolError("missing required 'holidayName'", { instance: message });
            return message;
        };

        SessionHoliday.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SessionHoliday.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.holidayDate) && !(message.holidayDate && $util.isInteger(message.holidayDate.low) && $util.isInteger(message.holidayDate.high)))
                return "holidayDate: integer|Long expected";
            if (!$util.isString(message.holidayName))
                return "holidayName: string expected";
            return null;
        };

        SessionHoliday.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.SessionHoliday)
                return object;
            let message = new $root.WebAPI.SessionHoliday();
            if (object.holidayDate != null)
                if ($util.Long)
                    (message.holidayDate = $util.Long.fromValue(object.holidayDate)).unsigned = false;
                else if (typeof object.holidayDate === "string")
                    message.holidayDate = parseInt(object.holidayDate, 10);
                else if (typeof object.holidayDate === "number")
                    message.holidayDate = object.holidayDate;
                else if (typeof object.holidayDate === "object")
                    message.holidayDate = new $util.LongBits(object.holidayDate.low >>> 0, object.holidayDate.high >>> 0).toNumber();
            if (object.holidayName != null)
                message.holidayName = String(object.holidayName);
            return message;
        };

        SessionHoliday.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.holidayDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.holidayDate = options.longs === String ? "0" : 0;
                object.holidayName = "";
            }
            if (message.holidayDate != null && message.hasOwnProperty("holidayDate"))
                if (typeof message.holidayDate === "number")
                    object.holidayDate = options.longs === String ? String(message.holidayDate) : message.holidayDate;
                else
                    object.holidayDate = options.longs === String ? $util.Long.prototype.toString.call(message.holidayDate) : options.longs === Number ? new $util.LongBits(message.holidayDate.low >>> 0, message.holidayDate.high >>> 0).toNumber() : message.holidayDate;
            if (message.holidayName != null && message.hasOwnProperty("holidayName"))
                object.holidayName = message.holidayName;
            return object;
        };

        SessionHoliday.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SessionHoliday;
    })();

    WebAPI.TradeSubscription = (function() {

        function TradeSubscription(properties) {
            this.subscriptionScope = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TradeSubscription.prototype.id = 0;
        TradeSubscription.prototype.subscriptionScope = $util.emptyArray;
        TradeSubscription.prototype.publicationType = 0;
        TradeSubscription.prototype.accountId = 0;
        TradeSubscription.prototype.salesSeriesNumber = "";
        TradeSubscription.prototype.brokerageId = 0;
        TradeSubscription.prototype.subscribe = false;
        TradeSubscription.prototype.lastOrderUpdateUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TradeSubscription.prototype.skipOrdersSnapshot = false;
        TradeSubscription.prototype.confirmedPositionsOnly = false;
        TradeSubscription.prototype.matchingAlgorithm = 0;
        TradeSubscription.prototype.matchIntradayFirst = false;
        TradeSubscription.prototype.historicalMatchingAlgorithm = 0;

        TradeSubscription.create = function create(properties) {
            return new TradeSubscription(properties);
        };

        TradeSubscription.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.id);
            if (message.subscriptionScope != null && message.subscriptionScope.length)
                for (let i = 0; i < message.subscriptionScope.length; ++i)
                    writer.uint32(16).uint32(message.subscriptionScope[i]);
            if (message.publicationType != null && message.hasOwnProperty("publicationType"))
                writer.uint32(24).uint32(message.publicationType);
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                writer.uint32(32).uint32(message.accountId);
            if (message.salesSeriesNumber != null && message.hasOwnProperty("salesSeriesNumber"))
                writer.uint32(42).string(message.salesSeriesNumber);
            if (message.brokerageId != null && message.hasOwnProperty("brokerageId"))
                writer.uint32(48).uint32(message.brokerageId);
            writer.uint32(56).bool(message.subscribe);
            if (message.lastOrderUpdateUtcTime != null && message.hasOwnProperty("lastOrderUpdateUtcTime"))
                writer.uint32(64).sint64(message.lastOrderUpdateUtcTime);
            if (message.skipOrdersSnapshot != null && message.hasOwnProperty("skipOrdersSnapshot"))
                writer.uint32(72).bool(message.skipOrdersSnapshot);
            if (message.confirmedPositionsOnly != null && message.hasOwnProperty("confirmedPositionsOnly"))
                writer.uint32(80).bool(message.confirmedPositionsOnly);
            if (message.matchingAlgorithm != null && message.hasOwnProperty("matchingAlgorithm"))
                writer.uint32(88).uint32(message.matchingAlgorithm);
            if (message.matchIntradayFirst != null && message.hasOwnProperty("matchIntradayFirst"))
                writer.uint32(96).bool(message.matchIntradayFirst);
            if (message.historicalMatchingAlgorithm != null && message.hasOwnProperty("historicalMatchingAlgorithm"))
                writer.uint32(104).uint32(message.historicalMatchingAlgorithm);
            return writer;
        };

        TradeSubscription.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TradeSubscription.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TradeSubscription();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    if (!(message.subscriptionScope && message.subscriptionScope.length))
                        message.subscriptionScope = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.subscriptionScope.push(reader.uint32());
                    } else
                        message.subscriptionScope.push(reader.uint32());
                    break;
                case 3:
                    message.publicationType = reader.uint32();
                    break;
                case 4:
                    message.accountId = reader.uint32();
                    break;
                case 5:
                    message.salesSeriesNumber = reader.string();
                    break;
                case 6:
                    message.brokerageId = reader.uint32();
                    break;
                case 7:
                    message.subscribe = reader.bool();
                    break;
                case 8:
                    message.lastOrderUpdateUtcTime = reader.sint64();
                    break;
                case 9:
                    message.skipOrdersSnapshot = reader.bool();
                    break;
                case 10:
                    message.confirmedPositionsOnly = reader.bool();
                    break;
                case 11:
                    message.matchingAlgorithm = reader.uint32();
                    break;
                case 12:
                    message.matchIntradayFirst = reader.bool();
                    break;
                case 13:
                    message.historicalMatchingAlgorithm = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("subscribe"))
                throw $util.ProtocolError("missing required 'subscribe'", { instance: message });
            return message;
        };

        TradeSubscription.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TradeSubscription.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.subscriptionScope != null && message.hasOwnProperty("subscriptionScope")) {
                if (!Array.isArray(message.subscriptionScope))
                    return "subscriptionScope: array expected";
                for (let i = 0; i < message.subscriptionScope.length; ++i)
                    if (!$util.isInteger(message.subscriptionScope[i]))
                        return "subscriptionScope: integer[] expected";
            }
            if (message.publicationType != null && message.hasOwnProperty("publicationType"))
                if (!$util.isInteger(message.publicationType))
                    return "publicationType: integer expected";
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                if (!$util.isInteger(message.accountId))
                    return "accountId: integer expected";
            if (message.salesSeriesNumber != null && message.hasOwnProperty("salesSeriesNumber"))
                if (!$util.isString(message.salesSeriesNumber))
                    return "salesSeriesNumber: string expected";
            if (message.brokerageId != null && message.hasOwnProperty("brokerageId"))
                if (!$util.isInteger(message.brokerageId))
                    return "brokerageId: integer expected";
            if (typeof message.subscribe !== "boolean")
                return "subscribe: boolean expected";
            if (message.lastOrderUpdateUtcTime != null && message.hasOwnProperty("lastOrderUpdateUtcTime"))
                if (!$util.isInteger(message.lastOrderUpdateUtcTime) && !(message.lastOrderUpdateUtcTime && $util.isInteger(message.lastOrderUpdateUtcTime.low) && $util.isInteger(message.lastOrderUpdateUtcTime.high)))
                    return "lastOrderUpdateUtcTime: integer|Long expected";
            if (message.skipOrdersSnapshot != null && message.hasOwnProperty("skipOrdersSnapshot"))
                if (typeof message.skipOrdersSnapshot !== "boolean")
                    return "skipOrdersSnapshot: boolean expected";
            if (message.confirmedPositionsOnly != null && message.hasOwnProperty("confirmedPositionsOnly"))
                if (typeof message.confirmedPositionsOnly !== "boolean")
                    return "confirmedPositionsOnly: boolean expected";
            if (message.matchingAlgorithm != null && message.hasOwnProperty("matchingAlgorithm"))
                if (!$util.isInteger(message.matchingAlgorithm))
                    return "matchingAlgorithm: integer expected";
            if (message.matchIntradayFirst != null && message.hasOwnProperty("matchIntradayFirst"))
                if (typeof message.matchIntradayFirst !== "boolean")
                    return "matchIntradayFirst: boolean expected";
            if (message.historicalMatchingAlgorithm != null && message.hasOwnProperty("historicalMatchingAlgorithm"))
                if (!$util.isInteger(message.historicalMatchingAlgorithm))
                    return "historicalMatchingAlgorithm: integer expected";
            return null;
        };

        TradeSubscription.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TradeSubscription)
                return object;
            let message = new $root.WebAPI.TradeSubscription();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.subscriptionScope) {
                if (!Array.isArray(object.subscriptionScope))
                    throw TypeError(".WebAPI.TradeSubscription.subscriptionScope: array expected");
                message.subscriptionScope = [];
                for (let i = 0; i < object.subscriptionScope.length; ++i)
                    message.subscriptionScope[i] = object.subscriptionScope[i] >>> 0;
            }
            if (object.publicationType != null)
                message.publicationType = object.publicationType >>> 0;
            if (object.accountId != null)
                message.accountId = object.accountId >>> 0;
            if (object.salesSeriesNumber != null)
                message.salesSeriesNumber = String(object.salesSeriesNumber);
            if (object.brokerageId != null)
                message.brokerageId = object.brokerageId >>> 0;
            if (object.subscribe != null)
                message.subscribe = Boolean(object.subscribe);
            if (object.lastOrderUpdateUtcTime != null)
                if ($util.Long)
                    (message.lastOrderUpdateUtcTime = $util.Long.fromValue(object.lastOrderUpdateUtcTime)).unsigned = false;
                else if (typeof object.lastOrderUpdateUtcTime === "string")
                    message.lastOrderUpdateUtcTime = parseInt(object.lastOrderUpdateUtcTime, 10);
                else if (typeof object.lastOrderUpdateUtcTime === "number")
                    message.lastOrderUpdateUtcTime = object.lastOrderUpdateUtcTime;
                else if (typeof object.lastOrderUpdateUtcTime === "object")
                    message.lastOrderUpdateUtcTime = new $util.LongBits(object.lastOrderUpdateUtcTime.low >>> 0, object.lastOrderUpdateUtcTime.high >>> 0).toNumber();
            if (object.skipOrdersSnapshot != null)
                message.skipOrdersSnapshot = Boolean(object.skipOrdersSnapshot);
            if (object.confirmedPositionsOnly != null)
                message.confirmedPositionsOnly = Boolean(object.confirmedPositionsOnly);
            if (object.matchingAlgorithm != null)
                message.matchingAlgorithm = object.matchingAlgorithm >>> 0;
            if (object.matchIntradayFirst != null)
                message.matchIntradayFirst = Boolean(object.matchIntradayFirst);
            if (object.historicalMatchingAlgorithm != null)
                message.historicalMatchingAlgorithm = object.historicalMatchingAlgorithm >>> 0;
            return message;
        };

        TradeSubscription.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.subscriptionScope = [];
            if (options.defaults) {
                object.id = 0;
                object.publicationType = 0;
                object.accountId = 0;
                object.salesSeriesNumber = "";
                object.brokerageId = 0;
                object.subscribe = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lastOrderUpdateUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastOrderUpdateUtcTime = options.longs === String ? "0" : 0;
                object.skipOrdersSnapshot = false;
                object.confirmedPositionsOnly = false;
                object.matchingAlgorithm = 0;
                object.matchIntradayFirst = false;
                object.historicalMatchingAlgorithm = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.subscriptionScope && message.subscriptionScope.length) {
                object.subscriptionScope = [];
                for (let j = 0; j < message.subscriptionScope.length; ++j)
                    object.subscriptionScope[j] = message.subscriptionScope[j];
            }
            if (message.publicationType != null && message.hasOwnProperty("publicationType"))
                object.publicationType = message.publicationType;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.salesSeriesNumber != null && message.hasOwnProperty("salesSeriesNumber"))
                object.salesSeriesNumber = message.salesSeriesNumber;
            if (message.brokerageId != null && message.hasOwnProperty("brokerageId"))
                object.brokerageId = message.brokerageId;
            if (message.subscribe != null && message.hasOwnProperty("subscribe"))
                object.subscribe = message.subscribe;
            if (message.lastOrderUpdateUtcTime != null && message.hasOwnProperty("lastOrderUpdateUtcTime"))
                if (typeof message.lastOrderUpdateUtcTime === "number")
                    object.lastOrderUpdateUtcTime = options.longs === String ? String(message.lastOrderUpdateUtcTime) : message.lastOrderUpdateUtcTime;
                else
                    object.lastOrderUpdateUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastOrderUpdateUtcTime) : options.longs === Number ? new $util.LongBits(message.lastOrderUpdateUtcTime.low >>> 0, message.lastOrderUpdateUtcTime.high >>> 0).toNumber() : message.lastOrderUpdateUtcTime;
            if (message.skipOrdersSnapshot != null && message.hasOwnProperty("skipOrdersSnapshot"))
                object.skipOrdersSnapshot = message.skipOrdersSnapshot;
            if (message.confirmedPositionsOnly != null && message.hasOwnProperty("confirmedPositionsOnly"))
                object.confirmedPositionsOnly = message.confirmedPositionsOnly;
            if (message.matchingAlgorithm != null && message.hasOwnProperty("matchingAlgorithm"))
                object.matchingAlgorithm = message.matchingAlgorithm;
            if (message.matchIntradayFirst != null && message.hasOwnProperty("matchIntradayFirst"))
                object.matchIntradayFirst = message.matchIntradayFirst;
            if (message.historicalMatchingAlgorithm != null && message.hasOwnProperty("historicalMatchingAlgorithm"))
                object.historicalMatchingAlgorithm = message.historicalMatchingAlgorithm;
            return object;
        };

        TradeSubscription.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TradeSubscription.SubscriptionScope = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "ORDERS"] = 1;
            values[valuesById[2] = "POSITIONS"] = 2;
            values[valuesById[3] = "COLLATERAL"] = 3;
            return values;
        })();

        TradeSubscription.PublicationType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "ACCOUNT"] = 1;
            values[valuesById[2] = "SALES_SERIES"] = 2;
            values[valuesById[3] = "BROKERAGE"] = 3;
            values[valuesById[4] = "ALL_AUTHORIZED"] = 4;
            return values;
        })();

        TradeSubscription.MatchingAlgorithm = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "FIFO"] = 1;
            values[valuesById[2] = "HBHS"] = 2;
            values[valuesById[3] = "LIFO"] = 3;
            return values;
        })();

        return TradeSubscription;
    })();

    WebAPI.TradeSubscriptionStatus = (function() {

        function TradeSubscriptionStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TradeSubscriptionStatus.prototype.id = 0;
        TradeSubscriptionStatus.prototype.statusCode = 0;
        TradeSubscriptionStatus.prototype.textMessage = "";

        TradeSubscriptionStatus.create = function create(properties) {
            return new TradeSubscriptionStatus(properties);
        };

        TradeSubscriptionStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.id);
            writer.uint32(16).uint32(message.statusCode);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(26).string(message.textMessage);
            return writer;
        };

        TradeSubscriptionStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TradeSubscriptionStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TradeSubscriptionStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.statusCode = reader.uint32();
                    break;
                case 3:
                    message.textMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("statusCode"))
                throw $util.ProtocolError("missing required 'statusCode'", { instance: message });
            return message;
        };

        TradeSubscriptionStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TradeSubscriptionStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.statusCode))
                return "statusCode: integer expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            return null;
        };

        TradeSubscriptionStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TradeSubscriptionStatus)
                return object;
            let message = new $root.WebAPI.TradeSubscriptionStatus();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.statusCode != null)
                message.statusCode = object.statusCode >>> 0;
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            return message;
        };

        TradeSubscriptionStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.statusCode = 0;
                object.textMessage = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            return object;
        };

        TradeSubscriptionStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TradeSubscriptionStatus.StatusCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[1] = "DISCONNECTED"] = 1;
            values[valuesById[101] = "FAILURE"] = 101;
            return values;
        })();

        return TradeSubscriptionStatus;
    })();

    WebAPI.TradeSnapshotCompletion = (function() {

        function TradeSnapshotCompletion(properties) {
            this.subscriptionScope = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TradeSnapshotCompletion.prototype.subscriptionId = 0;
        TradeSnapshotCompletion.prototype.subscriptionScope = $util.emptyArray;

        TradeSnapshotCompletion.create = function create(properties) {
            return new TradeSnapshotCompletion(properties);
        };

        TradeSnapshotCompletion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.subscriptionId);
            if (message.subscriptionScope != null && message.subscriptionScope.length)
                for (let i = 0; i < message.subscriptionScope.length; ++i)
                    writer.uint32(16).uint32(message.subscriptionScope[i]);
            return writer;
        };

        TradeSnapshotCompletion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TradeSnapshotCompletion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TradeSnapshotCompletion();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.subscriptionId = reader.uint32();
                    break;
                case 2:
                    if (!(message.subscriptionScope && message.subscriptionScope.length))
                        message.subscriptionScope = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.subscriptionScope.push(reader.uint32());
                    } else
                        message.subscriptionScope.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("subscriptionId"))
                throw $util.ProtocolError("missing required 'subscriptionId'", { instance: message });
            return message;
        };

        TradeSnapshotCompletion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TradeSnapshotCompletion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.subscriptionId))
                return "subscriptionId: integer expected";
            if (message.subscriptionScope != null && message.hasOwnProperty("subscriptionScope")) {
                if (!Array.isArray(message.subscriptionScope))
                    return "subscriptionScope: array expected";
                for (let i = 0; i < message.subscriptionScope.length; ++i)
                    if (!$util.isInteger(message.subscriptionScope[i]))
                        return "subscriptionScope: integer[] expected";
            }
            return null;
        };

        TradeSnapshotCompletion.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TradeSnapshotCompletion)
                return object;
            let message = new $root.WebAPI.TradeSnapshotCompletion();
            if (object.subscriptionId != null)
                message.subscriptionId = object.subscriptionId >>> 0;
            if (object.subscriptionScope) {
                if (!Array.isArray(object.subscriptionScope))
                    throw TypeError(".WebAPI.TradeSnapshotCompletion.subscriptionScope: array expected");
                message.subscriptionScope = [];
                for (let i = 0; i < object.subscriptionScope.length; ++i)
                    message.subscriptionScope[i] = object.subscriptionScope[i] >>> 0;
            }
            return message;
        };

        TradeSnapshotCompletion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.subscriptionScope = [];
            if (options.defaults)
                object.subscriptionId = 0;
            if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                object.subscriptionId = message.subscriptionId;
            if (message.subscriptionScope && message.subscriptionScope.length) {
                object.subscriptionScope = [];
                for (let j = 0; j < message.subscriptionScope.length; ++j)
                    object.subscriptionScope[j] = message.subscriptionScope[j];
            }
            return object;
        };

        TradeSnapshotCompletion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TradeSnapshotCompletion;
    })();

    WebAPI.OrderRequest = (function() {

        function OrderRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        OrderRequest.prototype.requestId = 0;
        OrderRequest.prototype.newOrder = null;
        OrderRequest.prototype.modifyOrder = null;
        OrderRequest.prototype.cancelOrder = null;
        OrderRequest.prototype.activateOrder = null;
        OrderRequest.prototype.modifyUserAttributes = null;
        OrderRequest.prototype.onBehalfOfUser = "";
        OrderRequest.prototype.newCompoundOrder = null;
        OrderRequest.prototype.clientRegulatoryAlgorithmId = 0;

        OrderRequest.create = function create(properties) {
            return new OrderRequest(properties);
        };

        OrderRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            if (message.newOrder != null && message.hasOwnProperty("newOrder"))
                $root.WebAPI.NewOrder.encode(message.newOrder, writer.uint32(18).fork()).ldelim();
            if (message.modifyOrder != null && message.hasOwnProperty("modifyOrder"))
                $root.WebAPI.ModifyOrder.encode(message.modifyOrder, writer.uint32(26).fork()).ldelim();
            if (message.cancelOrder != null && message.hasOwnProperty("cancelOrder"))
                $root.WebAPI.CancelOrder.encode(message.cancelOrder, writer.uint32(34).fork()).ldelim();
            if (message.activateOrder != null && message.hasOwnProperty("activateOrder"))
                $root.WebAPI.ActivateOrder.encode(message.activateOrder, writer.uint32(42).fork()).ldelim();
            if (message.modifyUserAttributes != null && message.hasOwnProperty("modifyUserAttributes"))
                $root.WebAPI.ModifyUserAttributes.encode(message.modifyUserAttributes, writer.uint32(50).fork()).ldelim();
            if (message.onBehalfOfUser != null && message.hasOwnProperty("onBehalfOfUser"))
                writer.uint32(58).string(message.onBehalfOfUser);
            if (message.newCompoundOrder != null && message.hasOwnProperty("newCompoundOrder"))
                $root.WebAPI.NewCompoundOrder.encode(message.newCompoundOrder, writer.uint32(66).fork()).ldelim();
            if (message.clientRegulatoryAlgorithmId != null && message.hasOwnProperty("clientRegulatoryAlgorithmId"))
                writer.uint32(72).uint32(message.clientRegulatoryAlgorithmId);
            return writer;
        };

        OrderRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        OrderRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.OrderRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.newOrder = $root.WebAPI.NewOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.modifyOrder = $root.WebAPI.ModifyOrder.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cancelOrder = $root.WebAPI.CancelOrder.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.activateOrder = $root.WebAPI.ActivateOrder.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.modifyUserAttributes = $root.WebAPI.ModifyUserAttributes.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.onBehalfOfUser = reader.string();
                    break;
                case 8:
                    message.newCompoundOrder = $root.WebAPI.NewCompoundOrder.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.clientRegulatoryAlgorithmId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            return message;
        };

        OrderRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        OrderRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (message.newOrder != null && message.hasOwnProperty("newOrder")) {
                let error = $root.WebAPI.NewOrder.verify(message.newOrder);
                if (error)
                    return "newOrder." + error;
            }
            if (message.modifyOrder != null && message.hasOwnProperty("modifyOrder")) {
                let error = $root.WebAPI.ModifyOrder.verify(message.modifyOrder);
                if (error)
                    return "modifyOrder." + error;
            }
            if (message.cancelOrder != null && message.hasOwnProperty("cancelOrder")) {
                let error = $root.WebAPI.CancelOrder.verify(message.cancelOrder);
                if (error)
                    return "cancelOrder." + error;
            }
            if (message.activateOrder != null && message.hasOwnProperty("activateOrder")) {
                let error = $root.WebAPI.ActivateOrder.verify(message.activateOrder);
                if (error)
                    return "activateOrder." + error;
            }
            if (message.modifyUserAttributes != null && message.hasOwnProperty("modifyUserAttributes")) {
                let error = $root.WebAPI.ModifyUserAttributes.verify(message.modifyUserAttributes);
                if (error)
                    return "modifyUserAttributes." + error;
            }
            if (message.onBehalfOfUser != null && message.hasOwnProperty("onBehalfOfUser"))
                if (!$util.isString(message.onBehalfOfUser))
                    return "onBehalfOfUser: string expected";
            if (message.newCompoundOrder != null && message.hasOwnProperty("newCompoundOrder")) {
                let error = $root.WebAPI.NewCompoundOrder.verify(message.newCompoundOrder);
                if (error)
                    return "newCompoundOrder." + error;
            }
            if (message.clientRegulatoryAlgorithmId != null && message.hasOwnProperty("clientRegulatoryAlgorithmId"))
                if (!$util.isInteger(message.clientRegulatoryAlgorithmId))
                    return "clientRegulatoryAlgorithmId: integer expected";
            return null;
        };

        OrderRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.OrderRequest)
                return object;
            let message = new $root.WebAPI.OrderRequest();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.newOrder != null) {
                if (typeof object.newOrder !== "object")
                    throw TypeError(".WebAPI.OrderRequest.newOrder: object expected");
                message.newOrder = $root.WebAPI.NewOrder.fromObject(object.newOrder);
            }
            if (object.modifyOrder != null) {
                if (typeof object.modifyOrder !== "object")
                    throw TypeError(".WebAPI.OrderRequest.modifyOrder: object expected");
                message.modifyOrder = $root.WebAPI.ModifyOrder.fromObject(object.modifyOrder);
            }
            if (object.cancelOrder != null) {
                if (typeof object.cancelOrder !== "object")
                    throw TypeError(".WebAPI.OrderRequest.cancelOrder: object expected");
                message.cancelOrder = $root.WebAPI.CancelOrder.fromObject(object.cancelOrder);
            }
            if (object.activateOrder != null) {
                if (typeof object.activateOrder !== "object")
                    throw TypeError(".WebAPI.OrderRequest.activateOrder: object expected");
                message.activateOrder = $root.WebAPI.ActivateOrder.fromObject(object.activateOrder);
            }
            if (object.modifyUserAttributes != null) {
                if (typeof object.modifyUserAttributes !== "object")
                    throw TypeError(".WebAPI.OrderRequest.modifyUserAttributes: object expected");
                message.modifyUserAttributes = $root.WebAPI.ModifyUserAttributes.fromObject(object.modifyUserAttributes);
            }
            if (object.onBehalfOfUser != null)
                message.onBehalfOfUser = String(object.onBehalfOfUser);
            if (object.newCompoundOrder != null) {
                if (typeof object.newCompoundOrder !== "object")
                    throw TypeError(".WebAPI.OrderRequest.newCompoundOrder: object expected");
                message.newCompoundOrder = $root.WebAPI.NewCompoundOrder.fromObject(object.newCompoundOrder);
            }
            if (object.clientRegulatoryAlgorithmId != null)
                message.clientRegulatoryAlgorithmId = object.clientRegulatoryAlgorithmId >>> 0;
            return message;
        };

        OrderRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.requestId = 0;
                object.newOrder = null;
                object.modifyOrder = null;
                object.cancelOrder = null;
                object.activateOrder = null;
                object.modifyUserAttributes = null;
                object.onBehalfOfUser = "";
                object.newCompoundOrder = null;
                object.clientRegulatoryAlgorithmId = 0;
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.newOrder != null && message.hasOwnProperty("newOrder"))
                object.newOrder = $root.WebAPI.NewOrder.toObject(message.newOrder, options);
            if (message.modifyOrder != null && message.hasOwnProperty("modifyOrder"))
                object.modifyOrder = $root.WebAPI.ModifyOrder.toObject(message.modifyOrder, options);
            if (message.cancelOrder != null && message.hasOwnProperty("cancelOrder"))
                object.cancelOrder = $root.WebAPI.CancelOrder.toObject(message.cancelOrder, options);
            if (message.activateOrder != null && message.hasOwnProperty("activateOrder"))
                object.activateOrder = $root.WebAPI.ActivateOrder.toObject(message.activateOrder, options);
            if (message.modifyUserAttributes != null && message.hasOwnProperty("modifyUserAttributes"))
                object.modifyUserAttributes = $root.WebAPI.ModifyUserAttributes.toObject(message.modifyUserAttributes, options);
            if (message.onBehalfOfUser != null && message.hasOwnProperty("onBehalfOfUser"))
                object.onBehalfOfUser = message.onBehalfOfUser;
            if (message.newCompoundOrder != null && message.hasOwnProperty("newCompoundOrder"))
                object.newCompoundOrder = $root.WebAPI.NewCompoundOrder.toObject(message.newCompoundOrder, options);
            if (message.clientRegulatoryAlgorithmId != null && message.hasOwnProperty("clientRegulatoryAlgorithmId"))
                object.clientRegulatoryAlgorithmId = message.clientRegulatoryAlgorithmId;
            return object;
        };

        OrderRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OrderRequest;
    })();

    WebAPI.OrderRequestReject = (function() {

        function OrderRequestReject(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        OrderRequestReject.prototype.requestId = 0;
        OrderRequestReject.prototype.rejectCode = 0;
        OrderRequestReject.prototype.textMessage = "";

        OrderRequestReject.create = function create(properties) {
            return new OrderRequestReject(properties);
        };

        OrderRequestReject.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            writer.uint32(16).uint32(message.rejectCode);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(26).string(message.textMessage);
            return writer;
        };

        OrderRequestReject.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        OrderRequestReject.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.OrderRequestReject();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.rejectCode = reader.uint32();
                    break;
                case 3:
                    message.textMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            if (!message.hasOwnProperty("rejectCode"))
                throw $util.ProtocolError("missing required 'rejectCode'", { instance: message });
            return message;
        };

        OrderRequestReject.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        OrderRequestReject.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (!$util.isInteger(message.rejectCode))
                return "rejectCode: integer expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            return null;
        };

        OrderRequestReject.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.OrderRequestReject)
                return object;
            let message = new $root.WebAPI.OrderRequestReject();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.rejectCode != null)
                message.rejectCode = object.rejectCode >>> 0;
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            return message;
        };

        OrderRequestReject.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.requestId = 0;
                object.rejectCode = 0;
                object.textMessage = "";
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.rejectCode != null && message.hasOwnProperty("rejectCode"))
                object.rejectCode = message.rejectCode;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            return object;
        };

        OrderRequestReject.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OrderRequestReject;
    })();

    WebAPI.NewOrder = (function() {

        function NewOrder(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        NewOrder.prototype.order = null;
        NewOrder.prototype.suspend = false;

        NewOrder.create = function create(properties) {
            return new NewOrder(properties);
        };

        NewOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.WebAPI.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
            if (message.suspend != null && message.hasOwnProperty("suspend"))
                writer.uint32(16).bool(message.suspend);
            return writer;
        };

        NewOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        NewOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.NewOrder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.order = $root.WebAPI.Order.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.suspend = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("order"))
                throw $util.ProtocolError("missing required 'order'", { instance: message });
            return message;
        };

        NewOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        NewOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                let error = $root.WebAPI.Order.verify(message.order);
                if (error)
                    return "order." + error;
            }
            if (message.suspend != null && message.hasOwnProperty("suspend"))
                if (typeof message.suspend !== "boolean")
                    return "suspend: boolean expected";
            return null;
        };

        NewOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.NewOrder)
                return object;
            let message = new $root.WebAPI.NewOrder();
            if (object.order != null) {
                if (typeof object.order !== "object")
                    throw TypeError(".WebAPI.NewOrder.order: object expected");
                message.order = $root.WebAPI.Order.fromObject(object.order);
            }
            if (object.suspend != null)
                message.suspend = Boolean(object.suspend);
            return message;
        };

        NewOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.order = null;
                object.suspend = false;
            }
            if (message.order != null && message.hasOwnProperty("order"))
                object.order = $root.WebAPI.Order.toObject(message.order, options);
            if (message.suspend != null && message.hasOwnProperty("suspend"))
                object.suspend = message.suspend;
            return object;
        };

        NewOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewOrder;
    })();

    WebAPI.Order = (function() {

        function Order(properties) {
            this.execInstruction = [];
            this.userAttribute = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Order.prototype.accountId = 0;
        Order.prototype.whenUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Order.prototype.contractId = 0;
        Order.prototype.clOrderId = "";
        Order.prototype.orderType = 0;
        Order.prototype.execInstruction = $util.emptyArray;
        Order.prototype.duration = 0;
        Order.prototype.goodThruDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Order.prototype.side = 0;
        Order.prototype.limitPrice = 0;
        Order.prototype.stopPrice = 0;
        Order.prototype.qty = 0;
        Order.prototype.visibleQty = 0;
        Order.prototype.minVisibleQty = 0;
        Order.prototype.isManual = false;
        Order.prototype.isClose = false;
        Order.prototype.isAggressive = false;
        Order.prototype.trailOffset = 0;
        Order.prototype.trailingPeg = 0;
        Order.prototype.triggerQty = 0;
        Order.prototype.activationUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Order.prototype.suspensionUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Order.prototype.userAttribute = $util.emptyArray;
        Order.prototype.goodThruUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        Order.create = function create(properties) {
            return new Order(properties);
        };

        Order.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).sint32(message.accountId);
            writer.uint32(16).sint64(message.whenUtcTime);
            writer.uint32(24).uint32(message.contractId);
            writer.uint32(34).string(message.clOrderId);
            writer.uint32(40).uint32(message.orderType);
            if (message.execInstruction != null && message.execInstruction.length)
                for (let i = 0; i < message.execInstruction.length; ++i)
                    writer.uint32(48).uint32(message.execInstruction[i]);
            writer.uint32(56).uint32(message.duration);
            if (message.goodThruDate != null && message.hasOwnProperty("goodThruDate"))
                writer.uint32(64).sint64(message.goodThruDate);
            writer.uint32(72).uint32(message.side);
            if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
                writer.uint32(80).sint32(message.limitPrice);
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                writer.uint32(88).sint32(message.stopPrice);
            writer.uint32(96).uint32(message.qty);
            if (message.visibleQty != null && message.hasOwnProperty("visibleQty"))
                writer.uint32(104).uint32(message.visibleQty);
            if (message.minVisibleQty != null && message.hasOwnProperty("minVisibleQty"))
                writer.uint32(112).uint32(message.minVisibleQty);
            writer.uint32(120).bool(message.isManual);
            if (message.isClose != null && message.hasOwnProperty("isClose"))
                writer.uint32(128).bool(message.isClose);
            if (message.isAggressive != null && message.hasOwnProperty("isAggressive"))
                writer.uint32(136).bool(message.isAggressive);
            if (message.trailOffset != null && message.hasOwnProperty("trailOffset"))
                writer.uint32(144).sint32(message.trailOffset);
            if (message.trailingPeg != null && message.hasOwnProperty("trailingPeg"))
                writer.uint32(152).uint32(message.trailingPeg);
            if (message.triggerQty != null && message.hasOwnProperty("triggerQty"))
                writer.uint32(160).uint32(message.triggerQty);
            if (message.activationUtcTime != null && message.hasOwnProperty("activationUtcTime"))
                writer.uint32(168).sint64(message.activationUtcTime);
            if (message.suspensionUtcTime != null && message.hasOwnProperty("suspensionUtcTime"))
                writer.uint32(176).sint64(message.suspensionUtcTime);
            if (message.userAttribute != null && message.userAttribute.length)
                for (let i = 0; i < message.userAttribute.length; ++i)
                    $root.WebAPI.UserAttribute.encode(message.userAttribute[i], writer.uint32(186).fork()).ldelim();
            if (message.goodThruUtcTime != null && message.hasOwnProperty("goodThruUtcTime"))
                writer.uint32(192).sint64(message.goodThruUtcTime);
            return writer;
        };

        Order.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Order.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.Order();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.sint32();
                    break;
                case 2:
                    message.whenUtcTime = reader.sint64();
                    break;
                case 3:
                    message.contractId = reader.uint32();
                    break;
                case 4:
                    message.clOrderId = reader.string();
                    break;
                case 5:
                    message.orderType = reader.uint32();
                    break;
                case 6:
                    if (!(message.execInstruction && message.execInstruction.length))
                        message.execInstruction = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.execInstruction.push(reader.uint32());
                    } else
                        message.execInstruction.push(reader.uint32());
                    break;
                case 7:
                    message.duration = reader.uint32();
                    break;
                case 8:
                    message.goodThruDate = reader.sint64();
                    break;
                case 9:
                    message.side = reader.uint32();
                    break;
                case 10:
                    message.limitPrice = reader.sint32();
                    break;
                case 11:
                    message.stopPrice = reader.sint32();
                    break;
                case 12:
                    message.qty = reader.uint32();
                    break;
                case 13:
                    message.visibleQty = reader.uint32();
                    break;
                case 14:
                    message.minVisibleQty = reader.uint32();
                    break;
                case 15:
                    message.isManual = reader.bool();
                    break;
                case 16:
                    message.isClose = reader.bool();
                    break;
                case 17:
                    message.isAggressive = reader.bool();
                    break;
                case 18:
                    message.trailOffset = reader.sint32();
                    break;
                case 19:
                    message.trailingPeg = reader.uint32();
                    break;
                case 20:
                    message.triggerQty = reader.uint32();
                    break;
                case 21:
                    message.activationUtcTime = reader.sint64();
                    break;
                case 22:
                    message.suspensionUtcTime = reader.sint64();
                    break;
                case 23:
                    if (!(message.userAttribute && message.userAttribute.length))
                        message.userAttribute = [];
                    message.userAttribute.push($root.WebAPI.UserAttribute.decode(reader, reader.uint32()));
                    break;
                case 24:
                    message.goodThruUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("accountId"))
                throw $util.ProtocolError("missing required 'accountId'", { instance: message });
            if (!message.hasOwnProperty("whenUtcTime"))
                throw $util.ProtocolError("missing required 'whenUtcTime'", { instance: message });
            if (!message.hasOwnProperty("contractId"))
                throw $util.ProtocolError("missing required 'contractId'", { instance: message });
            if (!message.hasOwnProperty("clOrderId"))
                throw $util.ProtocolError("missing required 'clOrderId'", { instance: message });
            if (!message.hasOwnProperty("orderType"))
                throw $util.ProtocolError("missing required 'orderType'", { instance: message });
            if (!message.hasOwnProperty("duration"))
                throw $util.ProtocolError("missing required 'duration'", { instance: message });
            if (!message.hasOwnProperty("side"))
                throw $util.ProtocolError("missing required 'side'", { instance: message });
            if (!message.hasOwnProperty("qty"))
                throw $util.ProtocolError("missing required 'qty'", { instance: message });
            if (!message.hasOwnProperty("isManual"))
                throw $util.ProtocolError("missing required 'isManual'", { instance: message });
            return message;
        };

        Order.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Order.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.accountId))
                return "accountId: integer expected";
            if (!$util.isInteger(message.whenUtcTime) && !(message.whenUtcTime && $util.isInteger(message.whenUtcTime.low) && $util.isInteger(message.whenUtcTime.high)))
                return "whenUtcTime: integer|Long expected";
            if (!$util.isInteger(message.contractId))
                return "contractId: integer expected";
            if (!$util.isString(message.clOrderId))
                return "clOrderId: string expected";
            if (!$util.isInteger(message.orderType))
                return "orderType: integer expected";
            if (message.execInstruction != null && message.hasOwnProperty("execInstruction")) {
                if (!Array.isArray(message.execInstruction))
                    return "execInstruction: array expected";
                for (let i = 0; i < message.execInstruction.length; ++i)
                    if (!$util.isInteger(message.execInstruction[i]))
                        return "execInstruction: integer[] expected";
            }
            if (!$util.isInteger(message.duration))
                return "duration: integer expected";
            if (message.goodThruDate != null && message.hasOwnProperty("goodThruDate"))
                if (!$util.isInteger(message.goodThruDate) && !(message.goodThruDate && $util.isInteger(message.goodThruDate.low) && $util.isInteger(message.goodThruDate.high)))
                    return "goodThruDate: integer|Long expected";
            if (!$util.isInteger(message.side))
                return "side: integer expected";
            if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
                if (!$util.isInteger(message.limitPrice))
                    return "limitPrice: integer expected";
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                if (!$util.isInteger(message.stopPrice))
                    return "stopPrice: integer expected";
            if (!$util.isInteger(message.qty))
                return "qty: integer expected";
            if (message.visibleQty != null && message.hasOwnProperty("visibleQty"))
                if (!$util.isInteger(message.visibleQty))
                    return "visibleQty: integer expected";
            if (message.minVisibleQty != null && message.hasOwnProperty("minVisibleQty"))
                if (!$util.isInteger(message.minVisibleQty))
                    return "minVisibleQty: integer expected";
            if (typeof message.isManual !== "boolean")
                return "isManual: boolean expected";
            if (message.isClose != null && message.hasOwnProperty("isClose"))
                if (typeof message.isClose !== "boolean")
                    return "isClose: boolean expected";
            if (message.isAggressive != null && message.hasOwnProperty("isAggressive"))
                if (typeof message.isAggressive !== "boolean")
                    return "isAggressive: boolean expected";
            if (message.trailOffset != null && message.hasOwnProperty("trailOffset"))
                if (!$util.isInteger(message.trailOffset))
                    return "trailOffset: integer expected";
            if (message.trailingPeg != null && message.hasOwnProperty("trailingPeg"))
                if (!$util.isInteger(message.trailingPeg))
                    return "trailingPeg: integer expected";
            if (message.triggerQty != null && message.hasOwnProperty("triggerQty"))
                if (!$util.isInteger(message.triggerQty))
                    return "triggerQty: integer expected";
            if (message.activationUtcTime != null && message.hasOwnProperty("activationUtcTime"))
                if (!$util.isInteger(message.activationUtcTime) && !(message.activationUtcTime && $util.isInteger(message.activationUtcTime.low) && $util.isInteger(message.activationUtcTime.high)))
                    return "activationUtcTime: integer|Long expected";
            if (message.suspensionUtcTime != null && message.hasOwnProperty("suspensionUtcTime"))
                if (!$util.isInteger(message.suspensionUtcTime) && !(message.suspensionUtcTime && $util.isInteger(message.suspensionUtcTime.low) && $util.isInteger(message.suspensionUtcTime.high)))
                    return "suspensionUtcTime: integer|Long expected";
            if (message.userAttribute != null && message.hasOwnProperty("userAttribute")) {
                if (!Array.isArray(message.userAttribute))
                    return "userAttribute: array expected";
                for (let i = 0; i < message.userAttribute.length; ++i) {
                    let error = $root.WebAPI.UserAttribute.verify(message.userAttribute[i]);
                    if (error)
                        return "userAttribute." + error;
                }
            }
            if (message.goodThruUtcTime != null && message.hasOwnProperty("goodThruUtcTime"))
                if (!$util.isInteger(message.goodThruUtcTime) && !(message.goodThruUtcTime && $util.isInteger(message.goodThruUtcTime.low) && $util.isInteger(message.goodThruUtcTime.high)))
                    return "goodThruUtcTime: integer|Long expected";
            return null;
        };

        Order.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.Order)
                return object;
            let message = new $root.WebAPI.Order();
            if (object.accountId != null)
                message.accountId = object.accountId | 0;
            if (object.whenUtcTime != null)
                if ($util.Long)
                    (message.whenUtcTime = $util.Long.fromValue(object.whenUtcTime)).unsigned = false;
                else if (typeof object.whenUtcTime === "string")
                    message.whenUtcTime = parseInt(object.whenUtcTime, 10);
                else if (typeof object.whenUtcTime === "number")
                    message.whenUtcTime = object.whenUtcTime;
                else if (typeof object.whenUtcTime === "object")
                    message.whenUtcTime = new $util.LongBits(object.whenUtcTime.low >>> 0, object.whenUtcTime.high >>> 0).toNumber();
            if (object.contractId != null)
                message.contractId = object.contractId >>> 0;
            if (object.clOrderId != null)
                message.clOrderId = String(object.clOrderId);
            if (object.orderType != null)
                message.orderType = object.orderType >>> 0;
            if (object.execInstruction) {
                if (!Array.isArray(object.execInstruction))
                    throw TypeError(".WebAPI.Order.execInstruction: array expected");
                message.execInstruction = [];
                for (let i = 0; i < object.execInstruction.length; ++i)
                    message.execInstruction[i] = object.execInstruction[i] >>> 0;
            }
            if (object.duration != null)
                message.duration = object.duration >>> 0;
            if (object.goodThruDate != null)
                if ($util.Long)
                    (message.goodThruDate = $util.Long.fromValue(object.goodThruDate)).unsigned = false;
                else if (typeof object.goodThruDate === "string")
                    message.goodThruDate = parseInt(object.goodThruDate, 10);
                else if (typeof object.goodThruDate === "number")
                    message.goodThruDate = object.goodThruDate;
                else if (typeof object.goodThruDate === "object")
                    message.goodThruDate = new $util.LongBits(object.goodThruDate.low >>> 0, object.goodThruDate.high >>> 0).toNumber();
            if (object.side != null)
                message.side = object.side >>> 0;
            if (object.limitPrice != null)
                message.limitPrice = object.limitPrice | 0;
            if (object.stopPrice != null)
                message.stopPrice = object.stopPrice | 0;
            if (object.qty != null)
                message.qty = object.qty >>> 0;
            if (object.visibleQty != null)
                message.visibleQty = object.visibleQty >>> 0;
            if (object.minVisibleQty != null)
                message.minVisibleQty = object.minVisibleQty >>> 0;
            if (object.isManual != null)
                message.isManual = Boolean(object.isManual);
            if (object.isClose != null)
                message.isClose = Boolean(object.isClose);
            if (object.isAggressive != null)
                message.isAggressive = Boolean(object.isAggressive);
            if (object.trailOffset != null)
                message.trailOffset = object.trailOffset | 0;
            if (object.trailingPeg != null)
                message.trailingPeg = object.trailingPeg >>> 0;
            if (object.triggerQty != null)
                message.triggerQty = object.triggerQty >>> 0;
            if (object.activationUtcTime != null)
                if ($util.Long)
                    (message.activationUtcTime = $util.Long.fromValue(object.activationUtcTime)).unsigned = false;
                else if (typeof object.activationUtcTime === "string")
                    message.activationUtcTime = parseInt(object.activationUtcTime, 10);
                else if (typeof object.activationUtcTime === "number")
                    message.activationUtcTime = object.activationUtcTime;
                else if (typeof object.activationUtcTime === "object")
                    message.activationUtcTime = new $util.LongBits(object.activationUtcTime.low >>> 0, object.activationUtcTime.high >>> 0).toNumber();
            if (object.suspensionUtcTime != null)
                if ($util.Long)
                    (message.suspensionUtcTime = $util.Long.fromValue(object.suspensionUtcTime)).unsigned = false;
                else if (typeof object.suspensionUtcTime === "string")
                    message.suspensionUtcTime = parseInt(object.suspensionUtcTime, 10);
                else if (typeof object.suspensionUtcTime === "number")
                    message.suspensionUtcTime = object.suspensionUtcTime;
                else if (typeof object.suspensionUtcTime === "object")
                    message.suspensionUtcTime = new $util.LongBits(object.suspensionUtcTime.low >>> 0, object.suspensionUtcTime.high >>> 0).toNumber();
            if (object.userAttribute) {
                if (!Array.isArray(object.userAttribute))
                    throw TypeError(".WebAPI.Order.userAttribute: array expected");
                message.userAttribute = [];
                for (let i = 0; i < object.userAttribute.length; ++i) {
                    if (typeof object.userAttribute[i] !== "object")
                        throw TypeError(".WebAPI.Order.userAttribute: object expected");
                    message.userAttribute[i] = $root.WebAPI.UserAttribute.fromObject(object.userAttribute[i]);
                }
            }
            if (object.goodThruUtcTime != null)
                if ($util.Long)
                    (message.goodThruUtcTime = $util.Long.fromValue(object.goodThruUtcTime)).unsigned = false;
                else if (typeof object.goodThruUtcTime === "string")
                    message.goodThruUtcTime = parseInt(object.goodThruUtcTime, 10);
                else if (typeof object.goodThruUtcTime === "number")
                    message.goodThruUtcTime = object.goodThruUtcTime;
                else if (typeof object.goodThruUtcTime === "object")
                    message.goodThruUtcTime = new $util.LongBits(object.goodThruUtcTime.low >>> 0, object.goodThruUtcTime.high >>> 0).toNumber();
            return message;
        };

        Order.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.execInstruction = [];
                object.userAttribute = [];
            }
            if (options.defaults) {
                object.accountId = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.whenUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.whenUtcTime = options.longs === String ? "0" : 0;
                object.contractId = 0;
                object.clOrderId = "";
                object.orderType = 0;
                object.duration = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.goodThruDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.goodThruDate = options.longs === String ? "0" : 0;
                object.side = 0;
                object.limitPrice = 0;
                object.stopPrice = 0;
                object.qty = 0;
                object.visibleQty = 0;
                object.minVisibleQty = 0;
                object.isManual = false;
                object.isClose = false;
                object.isAggressive = false;
                object.trailOffset = 0;
                object.trailingPeg = 0;
                object.triggerQty = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.activationUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.activationUtcTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.suspensionUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.suspensionUtcTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.goodThruUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.goodThruUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.whenUtcTime != null && message.hasOwnProperty("whenUtcTime"))
                if (typeof message.whenUtcTime === "number")
                    object.whenUtcTime = options.longs === String ? String(message.whenUtcTime) : message.whenUtcTime;
                else
                    object.whenUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.whenUtcTime) : options.longs === Number ? new $util.LongBits(message.whenUtcTime.low >>> 0, message.whenUtcTime.high >>> 0).toNumber() : message.whenUtcTime;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = message.contractId;
            if (message.clOrderId != null && message.hasOwnProperty("clOrderId"))
                object.clOrderId = message.clOrderId;
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                object.orderType = message.orderType;
            if (message.execInstruction && message.execInstruction.length) {
                object.execInstruction = [];
                for (let j = 0; j < message.execInstruction.length; ++j)
                    object.execInstruction[j] = message.execInstruction[j];
            }
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.goodThruDate != null && message.hasOwnProperty("goodThruDate"))
                if (typeof message.goodThruDate === "number")
                    object.goodThruDate = options.longs === String ? String(message.goodThruDate) : message.goodThruDate;
                else
                    object.goodThruDate = options.longs === String ? $util.Long.prototype.toString.call(message.goodThruDate) : options.longs === Number ? new $util.LongBits(message.goodThruDate.low >>> 0, message.goodThruDate.high >>> 0).toNumber() : message.goodThruDate;
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = message.side;
            if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
                object.limitPrice = message.limitPrice;
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                object.stopPrice = message.stopPrice;
            if (message.qty != null && message.hasOwnProperty("qty"))
                object.qty = message.qty;
            if (message.visibleQty != null && message.hasOwnProperty("visibleQty"))
                object.visibleQty = message.visibleQty;
            if (message.minVisibleQty != null && message.hasOwnProperty("minVisibleQty"))
                object.minVisibleQty = message.minVisibleQty;
            if (message.isManual != null && message.hasOwnProperty("isManual"))
                object.isManual = message.isManual;
            if (message.isClose != null && message.hasOwnProperty("isClose"))
                object.isClose = message.isClose;
            if (message.isAggressive != null && message.hasOwnProperty("isAggressive"))
                object.isAggressive = message.isAggressive;
            if (message.trailOffset != null && message.hasOwnProperty("trailOffset"))
                object.trailOffset = message.trailOffset;
            if (message.trailingPeg != null && message.hasOwnProperty("trailingPeg"))
                object.trailingPeg = message.trailingPeg;
            if (message.triggerQty != null && message.hasOwnProperty("triggerQty"))
                object.triggerQty = message.triggerQty;
            if (message.activationUtcTime != null && message.hasOwnProperty("activationUtcTime"))
                if (typeof message.activationUtcTime === "number")
                    object.activationUtcTime = options.longs === String ? String(message.activationUtcTime) : message.activationUtcTime;
                else
                    object.activationUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.activationUtcTime) : options.longs === Number ? new $util.LongBits(message.activationUtcTime.low >>> 0, message.activationUtcTime.high >>> 0).toNumber() : message.activationUtcTime;
            if (message.suspensionUtcTime != null && message.hasOwnProperty("suspensionUtcTime"))
                if (typeof message.suspensionUtcTime === "number")
                    object.suspensionUtcTime = options.longs === String ? String(message.suspensionUtcTime) : message.suspensionUtcTime;
                else
                    object.suspensionUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.suspensionUtcTime) : options.longs === Number ? new $util.LongBits(message.suspensionUtcTime.low >>> 0, message.suspensionUtcTime.high >>> 0).toNumber() : message.suspensionUtcTime;
            if (message.userAttribute && message.userAttribute.length) {
                object.userAttribute = [];
                for (let j = 0; j < message.userAttribute.length; ++j)
                    object.userAttribute[j] = $root.WebAPI.UserAttribute.toObject(message.userAttribute[j], options);
            }
            if (message.goodThruUtcTime != null && message.hasOwnProperty("goodThruUtcTime"))
                if (typeof message.goodThruUtcTime === "number")
                    object.goodThruUtcTime = options.longs === String ? String(message.goodThruUtcTime) : message.goodThruUtcTime;
                else
                    object.goodThruUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.goodThruUtcTime) : options.longs === Number ? new $util.LongBits(message.goodThruUtcTime.low >>> 0, message.goodThruUtcTime.high >>> 0).toNumber() : message.goodThruUtcTime;
            return object;
        };

        Order.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Order.Side = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "BUY"] = 1;
            values[valuesById[2] = "SELL"] = 2;
            return values;
        })();

        Order.OrderType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "MKT"] = 1;
            values[valuesById[2] = "LMT"] = 2;
            values[valuesById[3] = "STP"] = 3;
            values[valuesById[4] = "STL"] = 4;
            return values;
        })();

        Order.ExecInstruction = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "AON"] = 1;
            values[valuesById[2] = "ICEBERG"] = 2;
            values[valuesById[3] = "QT"] = 3;
            values[valuesById[4] = "TRAIL"] = 4;
            values[valuesById[5] = "FUNARI"] = 5;
            values[valuesById[6] = "MIT"] = 6;
            values[valuesById[7] = "MLM"] = 7;
            return values;
        })();

        Order.Duration = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "DAY"] = 1;
            values[valuesById[2] = "GTC"] = 2;
            values[valuesById[3] = "GTD"] = 3;
            values[valuesById[4] = "GTT"] = 4;
            values[valuesById[5] = "FAK"] = 5;
            values[valuesById[6] = "FOK"] = 6;
            values[valuesById[7] = "ATO"] = 7;
            values[valuesById[8] = "ATC"] = 8;
            return values;
        })();

        Order.TrailingPeg = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "BESTBID"] = 1;
            values[valuesById[2] = "BESTASK"] = 2;
            values[valuesById[3] = "LASTTRADE"] = 3;
            return values;
        })();

        return Order;
    })();

    WebAPI.UserAttribute = (function() {

        function UserAttribute(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        UserAttribute.prototype.name = "";
        UserAttribute.prototype.value = "";
        UserAttribute.prototype["delete"] = false;

        UserAttribute.create = function create(properties) {
            return new UserAttribute(properties);
        };

        UserAttribute.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.name);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(18).string(message.value);
            if (message["delete"] != null && message.hasOwnProperty("delete"))
                writer.uint32(24).bool(message["delete"]);
            return writer;
        };

        UserAttribute.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        UserAttribute.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.UserAttribute();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message["delete"] = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        UserAttribute.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        UserAttribute.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message["delete"] != null && message.hasOwnProperty("delete"))
                if (typeof message["delete"] !== "boolean")
                    return "delete: boolean expected";
            return null;
        };

        UserAttribute.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.UserAttribute)
                return object;
            let message = new $root.WebAPI.UserAttribute();
            if (object.name != null)
                message.name = String(object.name);
            if (object.value != null)
                message.value = String(object.value);
            if (object["delete"] != null)
                message["delete"] = Boolean(object["delete"]);
            return message;
        };

        UserAttribute.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.value = "";
                object["delete"] = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message["delete"] != null && message.hasOwnProperty("delete"))
                object["delete"] = message["delete"];
            return object;
        };

        UserAttribute.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserAttribute;
    })();

    WebAPI.ModifyOrder = (function() {

        function ModifyOrder(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ModifyOrder.prototype.orderId = "";
        ModifyOrder.prototype.accountId = 0;
        ModifyOrder.prototype.origClOrderId = "";
        ModifyOrder.prototype.clOrderId = "";
        ModifyOrder.prototype.whenUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ModifyOrder.prototype.qty = 0;
        ModifyOrder.prototype.visibleQty = 0;
        ModifyOrder.prototype.minVisibleQty = 0;
        ModifyOrder.prototype.limitPrice = 0;
        ModifyOrder.prototype.stopPrice = 0;
        ModifyOrder.prototype.activationUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ModifyOrder.prototype.removeActivationTime = false;
        ModifyOrder.prototype.suspensionUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ModifyOrder.prototype.removeSuspensionUtcTime = false;
        ModifyOrder.prototype.duration = 0;
        ModifyOrder.prototype.goodThruDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ModifyOrder.prototype.goodThruUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ModifyOrder.create = function create(properties) {
            return new ModifyOrder(properties);
        };

        ModifyOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.orderId);
            writer.uint32(16).sint32(message.accountId);
            writer.uint32(26).string(message.origClOrderId);
            writer.uint32(34).string(message.clOrderId);
            writer.uint32(40).sint64(message.whenUtcTime);
            if (message.qty != null && message.hasOwnProperty("qty"))
                writer.uint32(48).uint32(message.qty);
            if (message.visibleQty != null && message.hasOwnProperty("visibleQty"))
                writer.uint32(56).uint32(message.visibleQty);
            if (message.minVisibleQty != null && message.hasOwnProperty("minVisibleQty"))
                writer.uint32(64).uint32(message.minVisibleQty);
            if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
                writer.uint32(72).sint32(message.limitPrice);
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                writer.uint32(80).sint32(message.stopPrice);
            if (message.activationUtcTime != null && message.hasOwnProperty("activationUtcTime"))
                writer.uint32(88).sint64(message.activationUtcTime);
            if (message.removeActivationTime != null && message.hasOwnProperty("removeActivationTime"))
                writer.uint32(96).bool(message.removeActivationTime);
            if (message.suspensionUtcTime != null && message.hasOwnProperty("suspensionUtcTime"))
                writer.uint32(104).sint64(message.suspensionUtcTime);
            if (message.removeSuspensionUtcTime != null && message.hasOwnProperty("removeSuspensionUtcTime"))
                writer.uint32(112).bool(message.removeSuspensionUtcTime);
            if (message.duration != null && message.hasOwnProperty("duration"))
                writer.uint32(120).uint32(message.duration);
            if (message.goodThruDate != null && message.hasOwnProperty("goodThruDate"))
                writer.uint32(128).sint64(message.goodThruDate);
            if (message.goodThruUtcTime != null && message.hasOwnProperty("goodThruUtcTime"))
                writer.uint32(136).sint64(message.goodThruUtcTime);
            return writer;
        };

        ModifyOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ModifyOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ModifyOrder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.accountId = reader.sint32();
                    break;
                case 3:
                    message.origClOrderId = reader.string();
                    break;
                case 4:
                    message.clOrderId = reader.string();
                    break;
                case 5:
                    message.whenUtcTime = reader.sint64();
                    break;
                case 6:
                    message.qty = reader.uint32();
                    break;
                case 7:
                    message.visibleQty = reader.uint32();
                    break;
                case 8:
                    message.minVisibleQty = reader.uint32();
                    break;
                case 9:
                    message.limitPrice = reader.sint32();
                    break;
                case 10:
                    message.stopPrice = reader.sint32();
                    break;
                case 11:
                    message.activationUtcTime = reader.sint64();
                    break;
                case 12:
                    message.removeActivationTime = reader.bool();
                    break;
                case 13:
                    message.suspensionUtcTime = reader.sint64();
                    break;
                case 14:
                    message.removeSuspensionUtcTime = reader.bool();
                    break;
                case 15:
                    message.duration = reader.uint32();
                    break;
                case 16:
                    message.goodThruDate = reader.sint64();
                    break;
                case 17:
                    message.goodThruUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("orderId"))
                throw $util.ProtocolError("missing required 'orderId'", { instance: message });
            if (!message.hasOwnProperty("accountId"))
                throw $util.ProtocolError("missing required 'accountId'", { instance: message });
            if (!message.hasOwnProperty("origClOrderId"))
                throw $util.ProtocolError("missing required 'origClOrderId'", { instance: message });
            if (!message.hasOwnProperty("clOrderId"))
                throw $util.ProtocolError("missing required 'clOrderId'", { instance: message });
            if (!message.hasOwnProperty("whenUtcTime"))
                throw $util.ProtocolError("missing required 'whenUtcTime'", { instance: message });
            return message;
        };

        ModifyOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ModifyOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.orderId))
                return "orderId: string expected";
            if (!$util.isInteger(message.accountId))
                return "accountId: integer expected";
            if (!$util.isString(message.origClOrderId))
                return "origClOrderId: string expected";
            if (!$util.isString(message.clOrderId))
                return "clOrderId: string expected";
            if (!$util.isInteger(message.whenUtcTime) && !(message.whenUtcTime && $util.isInteger(message.whenUtcTime.low) && $util.isInteger(message.whenUtcTime.high)))
                return "whenUtcTime: integer|Long expected";
            if (message.qty != null && message.hasOwnProperty("qty"))
                if (!$util.isInteger(message.qty))
                    return "qty: integer expected";
            if (message.visibleQty != null && message.hasOwnProperty("visibleQty"))
                if (!$util.isInteger(message.visibleQty))
                    return "visibleQty: integer expected";
            if (message.minVisibleQty != null && message.hasOwnProperty("minVisibleQty"))
                if (!$util.isInteger(message.minVisibleQty))
                    return "minVisibleQty: integer expected";
            if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
                if (!$util.isInteger(message.limitPrice))
                    return "limitPrice: integer expected";
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                if (!$util.isInteger(message.stopPrice))
                    return "stopPrice: integer expected";
            if (message.activationUtcTime != null && message.hasOwnProperty("activationUtcTime"))
                if (!$util.isInteger(message.activationUtcTime) && !(message.activationUtcTime && $util.isInteger(message.activationUtcTime.low) && $util.isInteger(message.activationUtcTime.high)))
                    return "activationUtcTime: integer|Long expected";
            if (message.removeActivationTime != null && message.hasOwnProperty("removeActivationTime"))
                if (typeof message.removeActivationTime !== "boolean")
                    return "removeActivationTime: boolean expected";
            if (message.suspensionUtcTime != null && message.hasOwnProperty("suspensionUtcTime"))
                if (!$util.isInteger(message.suspensionUtcTime) && !(message.suspensionUtcTime && $util.isInteger(message.suspensionUtcTime.low) && $util.isInteger(message.suspensionUtcTime.high)))
                    return "suspensionUtcTime: integer|Long expected";
            if (message.removeSuspensionUtcTime != null && message.hasOwnProperty("removeSuspensionUtcTime"))
                if (typeof message.removeSuspensionUtcTime !== "boolean")
                    return "removeSuspensionUtcTime: boolean expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            if (message.goodThruDate != null && message.hasOwnProperty("goodThruDate"))
                if (!$util.isInteger(message.goodThruDate) && !(message.goodThruDate && $util.isInteger(message.goodThruDate.low) && $util.isInteger(message.goodThruDate.high)))
                    return "goodThruDate: integer|Long expected";
            if (message.goodThruUtcTime != null && message.hasOwnProperty("goodThruUtcTime"))
                if (!$util.isInteger(message.goodThruUtcTime) && !(message.goodThruUtcTime && $util.isInteger(message.goodThruUtcTime.low) && $util.isInteger(message.goodThruUtcTime.high)))
                    return "goodThruUtcTime: integer|Long expected";
            return null;
        };

        ModifyOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ModifyOrder)
                return object;
            let message = new $root.WebAPI.ModifyOrder();
            if (object.orderId != null)
                message.orderId = String(object.orderId);
            if (object.accountId != null)
                message.accountId = object.accountId | 0;
            if (object.origClOrderId != null)
                message.origClOrderId = String(object.origClOrderId);
            if (object.clOrderId != null)
                message.clOrderId = String(object.clOrderId);
            if (object.whenUtcTime != null)
                if ($util.Long)
                    (message.whenUtcTime = $util.Long.fromValue(object.whenUtcTime)).unsigned = false;
                else if (typeof object.whenUtcTime === "string")
                    message.whenUtcTime = parseInt(object.whenUtcTime, 10);
                else if (typeof object.whenUtcTime === "number")
                    message.whenUtcTime = object.whenUtcTime;
                else if (typeof object.whenUtcTime === "object")
                    message.whenUtcTime = new $util.LongBits(object.whenUtcTime.low >>> 0, object.whenUtcTime.high >>> 0).toNumber();
            if (object.qty != null)
                message.qty = object.qty >>> 0;
            if (object.visibleQty != null)
                message.visibleQty = object.visibleQty >>> 0;
            if (object.minVisibleQty != null)
                message.minVisibleQty = object.minVisibleQty >>> 0;
            if (object.limitPrice != null)
                message.limitPrice = object.limitPrice | 0;
            if (object.stopPrice != null)
                message.stopPrice = object.stopPrice | 0;
            if (object.activationUtcTime != null)
                if ($util.Long)
                    (message.activationUtcTime = $util.Long.fromValue(object.activationUtcTime)).unsigned = false;
                else if (typeof object.activationUtcTime === "string")
                    message.activationUtcTime = parseInt(object.activationUtcTime, 10);
                else if (typeof object.activationUtcTime === "number")
                    message.activationUtcTime = object.activationUtcTime;
                else if (typeof object.activationUtcTime === "object")
                    message.activationUtcTime = new $util.LongBits(object.activationUtcTime.low >>> 0, object.activationUtcTime.high >>> 0).toNumber();
            if (object.removeActivationTime != null)
                message.removeActivationTime = Boolean(object.removeActivationTime);
            if (object.suspensionUtcTime != null)
                if ($util.Long)
                    (message.suspensionUtcTime = $util.Long.fromValue(object.suspensionUtcTime)).unsigned = false;
                else if (typeof object.suspensionUtcTime === "string")
                    message.suspensionUtcTime = parseInt(object.suspensionUtcTime, 10);
                else if (typeof object.suspensionUtcTime === "number")
                    message.suspensionUtcTime = object.suspensionUtcTime;
                else if (typeof object.suspensionUtcTime === "object")
                    message.suspensionUtcTime = new $util.LongBits(object.suspensionUtcTime.low >>> 0, object.suspensionUtcTime.high >>> 0).toNumber();
            if (object.removeSuspensionUtcTime != null)
                message.removeSuspensionUtcTime = Boolean(object.removeSuspensionUtcTime);
            if (object.duration != null)
                message.duration = object.duration >>> 0;
            if (object.goodThruDate != null)
                if ($util.Long)
                    (message.goodThruDate = $util.Long.fromValue(object.goodThruDate)).unsigned = false;
                else if (typeof object.goodThruDate === "string")
                    message.goodThruDate = parseInt(object.goodThruDate, 10);
                else if (typeof object.goodThruDate === "number")
                    message.goodThruDate = object.goodThruDate;
                else if (typeof object.goodThruDate === "object")
                    message.goodThruDate = new $util.LongBits(object.goodThruDate.low >>> 0, object.goodThruDate.high >>> 0).toNumber();
            if (object.goodThruUtcTime != null)
                if ($util.Long)
                    (message.goodThruUtcTime = $util.Long.fromValue(object.goodThruUtcTime)).unsigned = false;
                else if (typeof object.goodThruUtcTime === "string")
                    message.goodThruUtcTime = parseInt(object.goodThruUtcTime, 10);
                else if (typeof object.goodThruUtcTime === "number")
                    message.goodThruUtcTime = object.goodThruUtcTime;
                else if (typeof object.goodThruUtcTime === "object")
                    message.goodThruUtcTime = new $util.LongBits(object.goodThruUtcTime.low >>> 0, object.goodThruUtcTime.high >>> 0).toNumber();
            return message;
        };

        ModifyOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.orderId = "";
                object.accountId = 0;
                object.origClOrderId = "";
                object.clOrderId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.whenUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.whenUtcTime = options.longs === String ? "0" : 0;
                object.qty = 0;
                object.visibleQty = 0;
                object.minVisibleQty = 0;
                object.limitPrice = 0;
                object.stopPrice = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.activationUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.activationUtcTime = options.longs === String ? "0" : 0;
                object.removeActivationTime = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.suspensionUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.suspensionUtcTime = options.longs === String ? "0" : 0;
                object.removeSuspensionUtcTime = false;
                object.duration = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.goodThruDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.goodThruDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.goodThruUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.goodThruUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                object.orderId = message.orderId;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.origClOrderId != null && message.hasOwnProperty("origClOrderId"))
                object.origClOrderId = message.origClOrderId;
            if (message.clOrderId != null && message.hasOwnProperty("clOrderId"))
                object.clOrderId = message.clOrderId;
            if (message.whenUtcTime != null && message.hasOwnProperty("whenUtcTime"))
                if (typeof message.whenUtcTime === "number")
                    object.whenUtcTime = options.longs === String ? String(message.whenUtcTime) : message.whenUtcTime;
                else
                    object.whenUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.whenUtcTime) : options.longs === Number ? new $util.LongBits(message.whenUtcTime.low >>> 0, message.whenUtcTime.high >>> 0).toNumber() : message.whenUtcTime;
            if (message.qty != null && message.hasOwnProperty("qty"))
                object.qty = message.qty;
            if (message.visibleQty != null && message.hasOwnProperty("visibleQty"))
                object.visibleQty = message.visibleQty;
            if (message.minVisibleQty != null && message.hasOwnProperty("minVisibleQty"))
                object.minVisibleQty = message.minVisibleQty;
            if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
                object.limitPrice = message.limitPrice;
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                object.stopPrice = message.stopPrice;
            if (message.activationUtcTime != null && message.hasOwnProperty("activationUtcTime"))
                if (typeof message.activationUtcTime === "number")
                    object.activationUtcTime = options.longs === String ? String(message.activationUtcTime) : message.activationUtcTime;
                else
                    object.activationUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.activationUtcTime) : options.longs === Number ? new $util.LongBits(message.activationUtcTime.low >>> 0, message.activationUtcTime.high >>> 0).toNumber() : message.activationUtcTime;
            if (message.removeActivationTime != null && message.hasOwnProperty("removeActivationTime"))
                object.removeActivationTime = message.removeActivationTime;
            if (message.suspensionUtcTime != null && message.hasOwnProperty("suspensionUtcTime"))
                if (typeof message.suspensionUtcTime === "number")
                    object.suspensionUtcTime = options.longs === String ? String(message.suspensionUtcTime) : message.suspensionUtcTime;
                else
                    object.suspensionUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.suspensionUtcTime) : options.longs === Number ? new $util.LongBits(message.suspensionUtcTime.low >>> 0, message.suspensionUtcTime.high >>> 0).toNumber() : message.suspensionUtcTime;
            if (message.removeSuspensionUtcTime != null && message.hasOwnProperty("removeSuspensionUtcTime"))
                object.removeSuspensionUtcTime = message.removeSuspensionUtcTime;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.goodThruDate != null && message.hasOwnProperty("goodThruDate"))
                if (typeof message.goodThruDate === "number")
                    object.goodThruDate = options.longs === String ? String(message.goodThruDate) : message.goodThruDate;
                else
                    object.goodThruDate = options.longs === String ? $util.Long.prototype.toString.call(message.goodThruDate) : options.longs === Number ? new $util.LongBits(message.goodThruDate.low >>> 0, message.goodThruDate.high >>> 0).toNumber() : message.goodThruDate;
            if (message.goodThruUtcTime != null && message.hasOwnProperty("goodThruUtcTime"))
                if (typeof message.goodThruUtcTime === "number")
                    object.goodThruUtcTime = options.longs === String ? String(message.goodThruUtcTime) : message.goodThruUtcTime;
                else
                    object.goodThruUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.goodThruUtcTime) : options.longs === Number ? new $util.LongBits(message.goodThruUtcTime.low >>> 0, message.goodThruUtcTime.high >>> 0).toNumber() : message.goodThruUtcTime;
            return object;
        };

        ModifyOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModifyOrder;
    })();

    WebAPI.CancelOrder = (function() {

        function CancelOrder(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CancelOrder.prototype.orderId = "";
        CancelOrder.prototype.accountId = 0;
        CancelOrder.prototype.origClOrderId = "";
        CancelOrder.prototype.clOrderId = "";
        CancelOrder.prototype.whenUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CancelOrder.create = function create(properties) {
            return new CancelOrder(properties);
        };

        CancelOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.orderId);
            writer.uint32(16).sint32(message.accountId);
            writer.uint32(26).string(message.origClOrderId);
            writer.uint32(34).string(message.clOrderId);
            writer.uint32(40).sint64(message.whenUtcTime);
            return writer;
        };

        CancelOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CancelOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.CancelOrder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.accountId = reader.sint32();
                    break;
                case 3:
                    message.origClOrderId = reader.string();
                    break;
                case 4:
                    message.clOrderId = reader.string();
                    break;
                case 5:
                    message.whenUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("orderId"))
                throw $util.ProtocolError("missing required 'orderId'", { instance: message });
            if (!message.hasOwnProperty("accountId"))
                throw $util.ProtocolError("missing required 'accountId'", { instance: message });
            if (!message.hasOwnProperty("origClOrderId"))
                throw $util.ProtocolError("missing required 'origClOrderId'", { instance: message });
            if (!message.hasOwnProperty("clOrderId"))
                throw $util.ProtocolError("missing required 'clOrderId'", { instance: message });
            if (!message.hasOwnProperty("whenUtcTime"))
                throw $util.ProtocolError("missing required 'whenUtcTime'", { instance: message });
            return message;
        };

        CancelOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CancelOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.orderId))
                return "orderId: string expected";
            if (!$util.isInteger(message.accountId))
                return "accountId: integer expected";
            if (!$util.isString(message.origClOrderId))
                return "origClOrderId: string expected";
            if (!$util.isString(message.clOrderId))
                return "clOrderId: string expected";
            if (!$util.isInteger(message.whenUtcTime) && !(message.whenUtcTime && $util.isInteger(message.whenUtcTime.low) && $util.isInteger(message.whenUtcTime.high)))
                return "whenUtcTime: integer|Long expected";
            return null;
        };

        CancelOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.CancelOrder)
                return object;
            let message = new $root.WebAPI.CancelOrder();
            if (object.orderId != null)
                message.orderId = String(object.orderId);
            if (object.accountId != null)
                message.accountId = object.accountId | 0;
            if (object.origClOrderId != null)
                message.origClOrderId = String(object.origClOrderId);
            if (object.clOrderId != null)
                message.clOrderId = String(object.clOrderId);
            if (object.whenUtcTime != null)
                if ($util.Long)
                    (message.whenUtcTime = $util.Long.fromValue(object.whenUtcTime)).unsigned = false;
                else if (typeof object.whenUtcTime === "string")
                    message.whenUtcTime = parseInt(object.whenUtcTime, 10);
                else if (typeof object.whenUtcTime === "number")
                    message.whenUtcTime = object.whenUtcTime;
                else if (typeof object.whenUtcTime === "object")
                    message.whenUtcTime = new $util.LongBits(object.whenUtcTime.low >>> 0, object.whenUtcTime.high >>> 0).toNumber();
            return message;
        };

        CancelOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.orderId = "";
                object.accountId = 0;
                object.origClOrderId = "";
                object.clOrderId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.whenUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.whenUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                object.orderId = message.orderId;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.origClOrderId != null && message.hasOwnProperty("origClOrderId"))
                object.origClOrderId = message.origClOrderId;
            if (message.clOrderId != null && message.hasOwnProperty("clOrderId"))
                object.clOrderId = message.clOrderId;
            if (message.whenUtcTime != null && message.hasOwnProperty("whenUtcTime"))
                if (typeof message.whenUtcTime === "number")
                    object.whenUtcTime = options.longs === String ? String(message.whenUtcTime) : message.whenUtcTime;
                else
                    object.whenUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.whenUtcTime) : options.longs === Number ? new $util.LongBits(message.whenUtcTime.low >>> 0, message.whenUtcTime.high >>> 0).toNumber() : message.whenUtcTime;
            return object;
        };

        CancelOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelOrder;
    })();

    WebAPI.ActivateOrder = (function() {

        function ActivateOrder(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ActivateOrder.prototype.orderId = "";
        ActivateOrder.prototype.accountId = 0;
        ActivateOrder.prototype.origClOrderId = "";
        ActivateOrder.prototype.clOrderId = "";
        ActivateOrder.prototype.whenUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ActivateOrder.create = function create(properties) {
            return new ActivateOrder(properties);
        };

        ActivateOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.orderId);
            writer.uint32(16).sint32(message.accountId);
            writer.uint32(26).string(message.origClOrderId);
            writer.uint32(34).string(message.clOrderId);
            writer.uint32(40).sint64(message.whenUtcTime);
            return writer;
        };

        ActivateOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ActivateOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ActivateOrder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.accountId = reader.sint32();
                    break;
                case 3:
                    message.origClOrderId = reader.string();
                    break;
                case 4:
                    message.clOrderId = reader.string();
                    break;
                case 5:
                    message.whenUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("orderId"))
                throw $util.ProtocolError("missing required 'orderId'", { instance: message });
            if (!message.hasOwnProperty("accountId"))
                throw $util.ProtocolError("missing required 'accountId'", { instance: message });
            if (!message.hasOwnProperty("origClOrderId"))
                throw $util.ProtocolError("missing required 'origClOrderId'", { instance: message });
            if (!message.hasOwnProperty("clOrderId"))
                throw $util.ProtocolError("missing required 'clOrderId'", { instance: message });
            if (!message.hasOwnProperty("whenUtcTime"))
                throw $util.ProtocolError("missing required 'whenUtcTime'", { instance: message });
            return message;
        };

        ActivateOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ActivateOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.orderId))
                return "orderId: string expected";
            if (!$util.isInteger(message.accountId))
                return "accountId: integer expected";
            if (!$util.isString(message.origClOrderId))
                return "origClOrderId: string expected";
            if (!$util.isString(message.clOrderId))
                return "clOrderId: string expected";
            if (!$util.isInteger(message.whenUtcTime) && !(message.whenUtcTime && $util.isInteger(message.whenUtcTime.low) && $util.isInteger(message.whenUtcTime.high)))
                return "whenUtcTime: integer|Long expected";
            return null;
        };

        ActivateOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ActivateOrder)
                return object;
            let message = new $root.WebAPI.ActivateOrder();
            if (object.orderId != null)
                message.orderId = String(object.orderId);
            if (object.accountId != null)
                message.accountId = object.accountId | 0;
            if (object.origClOrderId != null)
                message.origClOrderId = String(object.origClOrderId);
            if (object.clOrderId != null)
                message.clOrderId = String(object.clOrderId);
            if (object.whenUtcTime != null)
                if ($util.Long)
                    (message.whenUtcTime = $util.Long.fromValue(object.whenUtcTime)).unsigned = false;
                else if (typeof object.whenUtcTime === "string")
                    message.whenUtcTime = parseInt(object.whenUtcTime, 10);
                else if (typeof object.whenUtcTime === "number")
                    message.whenUtcTime = object.whenUtcTime;
                else if (typeof object.whenUtcTime === "object")
                    message.whenUtcTime = new $util.LongBits(object.whenUtcTime.low >>> 0, object.whenUtcTime.high >>> 0).toNumber();
            return message;
        };

        ActivateOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.orderId = "";
                object.accountId = 0;
                object.origClOrderId = "";
                object.clOrderId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.whenUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.whenUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                object.orderId = message.orderId;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.origClOrderId != null && message.hasOwnProperty("origClOrderId"))
                object.origClOrderId = message.origClOrderId;
            if (message.clOrderId != null && message.hasOwnProperty("clOrderId"))
                object.clOrderId = message.clOrderId;
            if (message.whenUtcTime != null && message.hasOwnProperty("whenUtcTime"))
                if (typeof message.whenUtcTime === "number")
                    object.whenUtcTime = options.longs === String ? String(message.whenUtcTime) : message.whenUtcTime;
                else
                    object.whenUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.whenUtcTime) : options.longs === Number ? new $util.LongBits(message.whenUtcTime.low >>> 0, message.whenUtcTime.high >>> 0).toNumber() : message.whenUtcTime;
            return object;
        };

        ActivateOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivateOrder;
    })();

    WebAPI.ModifyUserAttributes = (function() {

        function ModifyUserAttributes(properties) {
            this.userAttribute = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ModifyUserAttributes.prototype.chainOrderId = "";
        ModifyUserAttributes.prototype.accountId = 0;
        ModifyUserAttributes.prototype.userAttribute = $util.emptyArray;

        ModifyUserAttributes.create = function create(properties) {
            return new ModifyUserAttributes(properties);
        };

        ModifyUserAttributes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.chainOrderId);
            writer.uint32(16).sint32(message.accountId);
            if (message.userAttribute != null && message.userAttribute.length)
                for (let i = 0; i < message.userAttribute.length; ++i)
                    $root.WebAPI.UserAttribute.encode(message.userAttribute[i], writer.uint32(26).fork()).ldelim();
            return writer;
        };

        ModifyUserAttributes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ModifyUserAttributes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ModifyUserAttributes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chainOrderId = reader.string();
                    break;
                case 2:
                    message.accountId = reader.sint32();
                    break;
                case 3:
                    if (!(message.userAttribute && message.userAttribute.length))
                        message.userAttribute = [];
                    message.userAttribute.push($root.WebAPI.UserAttribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("chainOrderId"))
                throw $util.ProtocolError("missing required 'chainOrderId'", { instance: message });
            if (!message.hasOwnProperty("accountId"))
                throw $util.ProtocolError("missing required 'accountId'", { instance: message });
            return message;
        };

        ModifyUserAttributes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ModifyUserAttributes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.chainOrderId))
                return "chainOrderId: string expected";
            if (!$util.isInteger(message.accountId))
                return "accountId: integer expected";
            if (message.userAttribute != null && message.hasOwnProperty("userAttribute")) {
                if (!Array.isArray(message.userAttribute))
                    return "userAttribute: array expected";
                for (let i = 0; i < message.userAttribute.length; ++i) {
                    let error = $root.WebAPI.UserAttribute.verify(message.userAttribute[i]);
                    if (error)
                        return "userAttribute." + error;
                }
            }
            return null;
        };

        ModifyUserAttributes.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ModifyUserAttributes)
                return object;
            let message = new $root.WebAPI.ModifyUserAttributes();
            if (object.chainOrderId != null)
                message.chainOrderId = String(object.chainOrderId);
            if (object.accountId != null)
                message.accountId = object.accountId | 0;
            if (object.userAttribute) {
                if (!Array.isArray(object.userAttribute))
                    throw TypeError(".WebAPI.ModifyUserAttributes.userAttribute: array expected");
                message.userAttribute = [];
                for (let i = 0; i < object.userAttribute.length; ++i) {
                    if (typeof object.userAttribute[i] !== "object")
                        throw TypeError(".WebAPI.ModifyUserAttributes.userAttribute: object expected");
                    message.userAttribute[i] = $root.WebAPI.UserAttribute.fromObject(object.userAttribute[i]);
                }
            }
            return message;
        };

        ModifyUserAttributes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.userAttribute = [];
            if (options.defaults) {
                object.chainOrderId = "";
                object.accountId = 0;
            }
            if (message.chainOrderId != null && message.hasOwnProperty("chainOrderId"))
                object.chainOrderId = message.chainOrderId;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.userAttribute && message.userAttribute.length) {
                object.userAttribute = [];
                for (let j = 0; j < message.userAttribute.length; ++j)
                    object.userAttribute[j] = $root.WebAPI.UserAttribute.toObject(message.userAttribute[j], options);
            }
            return object;
        };

        ModifyUserAttributes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModifyUserAttributes;
    })();

    WebAPI.NewCompoundOrder = (function() {

        function NewCompoundOrder(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        NewCompoundOrder.prototype.compoundOrder = null;
        NewCompoundOrder.prototype.partialFillsHandling = true;

        NewCompoundOrder.create = function create(properties) {
            return new NewCompoundOrder(properties);
        };

        NewCompoundOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.WebAPI.CompoundOrder.encode(message.compoundOrder, writer.uint32(10).fork()).ldelim();
            if (message.partialFillsHandling != null && message.hasOwnProperty("partialFillsHandling"))
                writer.uint32(16).bool(message.partialFillsHandling);
            return writer;
        };

        NewCompoundOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        NewCompoundOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.NewCompoundOrder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.compoundOrder = $root.WebAPI.CompoundOrder.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.partialFillsHandling = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("compoundOrder"))
                throw $util.ProtocolError("missing required 'compoundOrder'", { instance: message });
            return message;
        };

        NewCompoundOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        NewCompoundOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                let error = $root.WebAPI.CompoundOrder.verify(message.compoundOrder);
                if (error)
                    return "compoundOrder." + error;
            }
            if (message.partialFillsHandling != null && message.hasOwnProperty("partialFillsHandling"))
                if (typeof message.partialFillsHandling !== "boolean")
                    return "partialFillsHandling: boolean expected";
            return null;
        };

        NewCompoundOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.NewCompoundOrder)
                return object;
            let message = new $root.WebAPI.NewCompoundOrder();
            if (object.compoundOrder != null) {
                if (typeof object.compoundOrder !== "object")
                    throw TypeError(".WebAPI.NewCompoundOrder.compoundOrder: object expected");
                message.compoundOrder = $root.WebAPI.CompoundOrder.fromObject(object.compoundOrder);
            }
            if (object.partialFillsHandling != null)
                message.partialFillsHandling = Boolean(object.partialFillsHandling);
            return message;
        };

        NewCompoundOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.compoundOrder = null;
                object.partialFillsHandling = true;
            }
            if (message.compoundOrder != null && message.hasOwnProperty("compoundOrder"))
                object.compoundOrder = $root.WebAPI.CompoundOrder.toObject(message.compoundOrder, options);
            if (message.partialFillsHandling != null && message.hasOwnProperty("partialFillsHandling"))
                object.partialFillsHandling = message.partialFillsHandling;
            return object;
        };

        NewCompoundOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewCompoundOrder;
    })();

    WebAPI.CompoundOrder = (function() {

        function CompoundOrder(properties) {
            this.compoundOrderEntry = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CompoundOrder.prototype.type = 0;
        CompoundOrder.prototype.clCompoundId = "";
        CompoundOrder.prototype.compoundOrderEntry = $util.emptyArray;

        CompoundOrder.create = function create(properties) {
            return new CompoundOrder(properties);
        };

        CompoundOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.type);
            writer.uint32(18).string(message.clCompoundId);
            if (message.compoundOrderEntry != null && message.compoundOrderEntry.length)
                for (let i = 0; i < message.compoundOrderEntry.length; ++i)
                    $root.WebAPI.CompoundOrderEntry.encode(message.compoundOrderEntry[i], writer.uint32(26).fork()).ldelim();
            return writer;
        };

        CompoundOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CompoundOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.CompoundOrder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.uint32();
                    break;
                case 2:
                    message.clCompoundId = reader.string();
                    break;
                case 3:
                    if (!(message.compoundOrderEntry && message.compoundOrderEntry.length))
                        message.compoundOrderEntry = [];
                    message.compoundOrderEntry.push($root.WebAPI.CompoundOrderEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("clCompoundId"))
                throw $util.ProtocolError("missing required 'clCompoundId'", { instance: message });
            return message;
        };

        CompoundOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CompoundOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.clCompoundId))
                return "clCompoundId: string expected";
            if (message.compoundOrderEntry != null && message.hasOwnProperty("compoundOrderEntry")) {
                if (!Array.isArray(message.compoundOrderEntry))
                    return "compoundOrderEntry: array expected";
                for (let i = 0; i < message.compoundOrderEntry.length; ++i) {
                    let error = $root.WebAPI.CompoundOrderEntry.verify(message.compoundOrderEntry[i]);
                    if (error)
                        return "compoundOrderEntry." + error;
                }
            }
            return null;
        };

        CompoundOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.CompoundOrder)
                return object;
            let message = new $root.WebAPI.CompoundOrder();
            if (object.type != null)
                message.type = object.type >>> 0;
            if (object.clCompoundId != null)
                message.clCompoundId = String(object.clCompoundId);
            if (object.compoundOrderEntry) {
                if (!Array.isArray(object.compoundOrderEntry))
                    throw TypeError(".WebAPI.CompoundOrder.compoundOrderEntry: array expected");
                message.compoundOrderEntry = [];
                for (let i = 0; i < object.compoundOrderEntry.length; ++i) {
                    if (typeof object.compoundOrderEntry[i] !== "object")
                        throw TypeError(".WebAPI.CompoundOrder.compoundOrderEntry: object expected");
                    message.compoundOrderEntry[i] = $root.WebAPI.CompoundOrderEntry.fromObject(object.compoundOrderEntry[i]);
                }
            }
            return message;
        };

        CompoundOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.compoundOrderEntry = [];
            if (options.defaults) {
                object.type = 0;
                object.clCompoundId = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.clCompoundId != null && message.hasOwnProperty("clCompoundId"))
                object.clCompoundId = message.clCompoundId;
            if (message.compoundOrderEntry && message.compoundOrderEntry.length) {
                object.compoundOrderEntry = [];
                for (let j = 0; j < message.compoundOrderEntry.length; ++j)
                    object.compoundOrderEntry[j] = $root.WebAPI.CompoundOrderEntry.toObject(message.compoundOrderEntry[j], options);
            }
            return object;
        };

        CompoundOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CompoundOrder.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "OPO"] = 1;
            values[valuesById[2] = "OCO"] = 2;
            return values;
        })();

        return CompoundOrder;
    })();

    WebAPI.CompoundOrderEntry = (function() {

        function CompoundOrderEntry(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CompoundOrderEntry.prototype.order = null;
        CompoundOrderEntry.prototype.compoundOrder = null;

        CompoundOrderEntry.create = function create(properties) {
            return new CompoundOrderEntry(properties);
        };

        CompoundOrderEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.order != null && message.hasOwnProperty("order"))
                $root.WebAPI.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
            if (message.compoundOrder != null && message.hasOwnProperty("compoundOrder"))
                $root.WebAPI.CompoundOrder.encode(message.compoundOrder, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        CompoundOrderEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CompoundOrderEntry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.CompoundOrderEntry();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.order = $root.WebAPI.Order.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.compoundOrder = $root.WebAPI.CompoundOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        CompoundOrderEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CompoundOrderEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.order != null && message.hasOwnProperty("order")) {
                let error = $root.WebAPI.Order.verify(message.order);
                if (error)
                    return "order." + error;
            }
            if (message.compoundOrder != null && message.hasOwnProperty("compoundOrder")) {
                let error = $root.WebAPI.CompoundOrder.verify(message.compoundOrder);
                if (error)
                    return "compoundOrder." + error;
            }
            return null;
        };

        CompoundOrderEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.CompoundOrderEntry)
                return object;
            let message = new $root.WebAPI.CompoundOrderEntry();
            if (object.order != null) {
                if (typeof object.order !== "object")
                    throw TypeError(".WebAPI.CompoundOrderEntry.order: object expected");
                message.order = $root.WebAPI.Order.fromObject(object.order);
            }
            if (object.compoundOrder != null) {
                if (typeof object.compoundOrder !== "object")
                    throw TypeError(".WebAPI.CompoundOrderEntry.compoundOrder: object expected");
                message.compoundOrder = $root.WebAPI.CompoundOrder.fromObject(object.compoundOrder);
            }
            return message;
        };

        CompoundOrderEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.order = null;
                object.compoundOrder = null;
            }
            if (message.order != null && message.hasOwnProperty("order"))
                object.order = $root.WebAPI.Order.toObject(message.order, options);
            if (message.compoundOrder != null && message.hasOwnProperty("compoundOrder"))
                object.compoundOrder = $root.WebAPI.CompoundOrder.toObject(message.compoundOrder, options);
            return object;
        };

        CompoundOrderEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CompoundOrderEntry;
    })();

    WebAPI.OrderStatus = (function() {

        function OrderStatus(properties) {
            this.subscriptionId = [];
            this.transactionStatus = [];
            this.contractMetadata = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        OrderStatus.prototype.subscriptionId = $util.emptyArray;
        OrderStatus.prototype.isSnapshot = false;
        OrderStatus.prototype.status = 0;
        OrderStatus.prototype.orderId = "";
        OrderStatus.prototype.chainOrderId = "";
        OrderStatus.prototype.execOrderId = "";
        OrderStatus.prototype.statusUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        OrderStatus.prototype.submissionUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        OrderStatus.prototype.fillQty = 0;
        OrderStatus.prototype.fillCnt = 0;
        OrderStatus.prototype.avgFillPrice = 0;
        OrderStatus.prototype.activeAtUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        OrderStatus.prototype.remainingQty = 0;
        OrderStatus.prototype.order = null;
        OrderStatus.prototype.transactionStatus = $util.emptyArray;
        OrderStatus.prototype.enteredByUser = "";
        OrderStatus.prototype.firstStatementDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        OrderStatus.prototype.lastStatementDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        OrderStatus.prototype.contractMetadata = $util.emptyArray;
        OrderStatus.prototype.accountId = 0;
        OrderStatus.prototype.compoundOrderStructure = null;

        OrderStatus.create = function create(properties) {
            return new OrderStatus(properties);
        };

        OrderStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subscriptionId != null && message.subscriptionId.length)
                for (let i = 0; i < message.subscriptionId.length; ++i)
                    writer.uint32(8).uint32(message.subscriptionId[i]);
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                writer.uint32(16).bool(message.isSnapshot);
            writer.uint32(24).uint32(message.status);
            writer.uint32(34).string(message.orderId);
            writer.uint32(42).string(message.chainOrderId);
            if (message.execOrderId != null && message.hasOwnProperty("execOrderId"))
                writer.uint32(50).string(message.execOrderId);
            writer.uint32(56).sint64(message.statusUtcTime);
            writer.uint32(64).sint64(message.submissionUtcTime);
            writer.uint32(72).uint32(message.fillQty);
            writer.uint32(80).uint32(message.fillCnt);
            writer.uint32(88).sint32(message.avgFillPrice);
            if (message.activeAtUtcTime != null && message.hasOwnProperty("activeAtUtcTime"))
                writer.uint32(96).sint64(message.activeAtUtcTime);
            writer.uint32(104).uint32(message.remainingQty);
            if (message.order != null && message.hasOwnProperty("order"))
                $root.WebAPI.Order.encode(message.order, writer.uint32(114).fork()).ldelim();
            if (message.transactionStatus != null && message.transactionStatus.length)
                for (let i = 0; i < message.transactionStatus.length; ++i)
                    $root.WebAPI.TransactionStatus.encode(message.transactionStatus[i], writer.uint32(122).fork()).ldelim();
            writer.uint32(130).string(message.enteredByUser);
            writer.uint32(136).sint64(message.firstStatementDate);
            if (message.lastStatementDate != null && message.hasOwnProperty("lastStatementDate"))
                writer.uint32(144).sint64(message.lastStatementDate);
            if (message.contractMetadata != null && message.contractMetadata.length)
                for (let i = 0; i < message.contractMetadata.length; ++i)
                    $root.WebAPI.ContractMetadata.encode(message.contractMetadata[i], writer.uint32(154).fork()).ldelim();
            writer.uint32(160).sint32(message.accountId);
            if (message.compoundOrderStructure != null && message.hasOwnProperty("compoundOrderStructure"))
                $root.WebAPI.CompoundOrderStructure.encode(message.compoundOrderStructure, writer.uint32(170).fork()).ldelim();
            return writer;
        };

        OrderStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        OrderStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.OrderStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.subscriptionId && message.subscriptionId.length))
                        message.subscriptionId = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.subscriptionId.push(reader.uint32());
                    } else
                        message.subscriptionId.push(reader.uint32());
                    break;
                case 2:
                    message.isSnapshot = reader.bool();
                    break;
                case 3:
                    message.status = reader.uint32();
                    break;
                case 4:
                    message.orderId = reader.string();
                    break;
                case 5:
                    message.chainOrderId = reader.string();
                    break;
                case 6:
                    message.execOrderId = reader.string();
                    break;
                case 7:
                    message.statusUtcTime = reader.sint64();
                    break;
                case 8:
                    message.submissionUtcTime = reader.sint64();
                    break;
                case 9:
                    message.fillQty = reader.uint32();
                    break;
                case 10:
                    message.fillCnt = reader.uint32();
                    break;
                case 11:
                    message.avgFillPrice = reader.sint32();
                    break;
                case 12:
                    message.activeAtUtcTime = reader.sint64();
                    break;
                case 13:
                    message.remainingQty = reader.uint32();
                    break;
                case 14:
                    message.order = $root.WebAPI.Order.decode(reader, reader.uint32());
                    break;
                case 15:
                    if (!(message.transactionStatus && message.transactionStatus.length))
                        message.transactionStatus = [];
                    message.transactionStatus.push($root.WebAPI.TransactionStatus.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.enteredByUser = reader.string();
                    break;
                case 17:
                    message.firstStatementDate = reader.sint64();
                    break;
                case 18:
                    message.lastStatementDate = reader.sint64();
                    break;
                case 19:
                    if (!(message.contractMetadata && message.contractMetadata.length))
                        message.contractMetadata = [];
                    message.contractMetadata.push($root.WebAPI.ContractMetadata.decode(reader, reader.uint32()));
                    break;
                case 20:
                    message.accountId = reader.sint32();
                    break;
                case 21:
                    message.compoundOrderStructure = $root.WebAPI.CompoundOrderStructure.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            if (!message.hasOwnProperty("orderId"))
                throw $util.ProtocolError("missing required 'orderId'", { instance: message });
            if (!message.hasOwnProperty("chainOrderId"))
                throw $util.ProtocolError("missing required 'chainOrderId'", { instance: message });
            if (!message.hasOwnProperty("statusUtcTime"))
                throw $util.ProtocolError("missing required 'statusUtcTime'", { instance: message });
            if (!message.hasOwnProperty("submissionUtcTime"))
                throw $util.ProtocolError("missing required 'submissionUtcTime'", { instance: message });
            if (!message.hasOwnProperty("fillQty"))
                throw $util.ProtocolError("missing required 'fillQty'", { instance: message });
            if (!message.hasOwnProperty("fillCnt"))
                throw $util.ProtocolError("missing required 'fillCnt'", { instance: message });
            if (!message.hasOwnProperty("avgFillPrice"))
                throw $util.ProtocolError("missing required 'avgFillPrice'", { instance: message });
            if (!message.hasOwnProperty("remainingQty"))
                throw $util.ProtocolError("missing required 'remainingQty'", { instance: message });
            if (!message.hasOwnProperty("enteredByUser"))
                throw $util.ProtocolError("missing required 'enteredByUser'", { instance: message });
            if (!message.hasOwnProperty("firstStatementDate"))
                throw $util.ProtocolError("missing required 'firstStatementDate'", { instance: message });
            if (!message.hasOwnProperty("accountId"))
                throw $util.ProtocolError("missing required 'accountId'", { instance: message });
            return message;
        };

        OrderStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        OrderStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId")) {
                if (!Array.isArray(message.subscriptionId))
                    return "subscriptionId: array expected";
                for (let i = 0; i < message.subscriptionId.length; ++i)
                    if (!$util.isInteger(message.subscriptionId[i]))
                        return "subscriptionId: integer[] expected";
            }
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                if (typeof message.isSnapshot !== "boolean")
                    return "isSnapshot: boolean expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (!$util.isString(message.orderId))
                return "orderId: string expected";
            if (!$util.isString(message.chainOrderId))
                return "chainOrderId: string expected";
            if (message.execOrderId != null && message.hasOwnProperty("execOrderId"))
                if (!$util.isString(message.execOrderId))
                    return "execOrderId: string expected";
            if (!$util.isInteger(message.statusUtcTime) && !(message.statusUtcTime && $util.isInteger(message.statusUtcTime.low) && $util.isInteger(message.statusUtcTime.high)))
                return "statusUtcTime: integer|Long expected";
            if (!$util.isInteger(message.submissionUtcTime) && !(message.submissionUtcTime && $util.isInteger(message.submissionUtcTime.low) && $util.isInteger(message.submissionUtcTime.high)))
                return "submissionUtcTime: integer|Long expected";
            if (!$util.isInteger(message.fillQty))
                return "fillQty: integer expected";
            if (!$util.isInteger(message.fillCnt))
                return "fillCnt: integer expected";
            if (!$util.isInteger(message.avgFillPrice))
                return "avgFillPrice: integer expected";
            if (message.activeAtUtcTime != null && message.hasOwnProperty("activeAtUtcTime"))
                if (!$util.isInteger(message.activeAtUtcTime) && !(message.activeAtUtcTime && $util.isInteger(message.activeAtUtcTime.low) && $util.isInteger(message.activeAtUtcTime.high)))
                    return "activeAtUtcTime: integer|Long expected";
            if (!$util.isInteger(message.remainingQty))
                return "remainingQty: integer expected";
            if (message.order != null && message.hasOwnProperty("order")) {
                let error = $root.WebAPI.Order.verify(message.order);
                if (error)
                    return "order." + error;
            }
            if (message.transactionStatus != null && message.hasOwnProperty("transactionStatus")) {
                if (!Array.isArray(message.transactionStatus))
                    return "transactionStatus: array expected";
                for (let i = 0; i < message.transactionStatus.length; ++i) {
                    let error = $root.WebAPI.TransactionStatus.verify(message.transactionStatus[i]);
                    if (error)
                        return "transactionStatus." + error;
                }
            }
            if (!$util.isString(message.enteredByUser))
                return "enteredByUser: string expected";
            if (!$util.isInteger(message.firstStatementDate) && !(message.firstStatementDate && $util.isInteger(message.firstStatementDate.low) && $util.isInteger(message.firstStatementDate.high)))
                return "firstStatementDate: integer|Long expected";
            if (message.lastStatementDate != null && message.hasOwnProperty("lastStatementDate"))
                if (!$util.isInteger(message.lastStatementDate) && !(message.lastStatementDate && $util.isInteger(message.lastStatementDate.low) && $util.isInteger(message.lastStatementDate.high)))
                    return "lastStatementDate: integer|Long expected";
            if (message.contractMetadata != null && message.hasOwnProperty("contractMetadata")) {
                if (!Array.isArray(message.contractMetadata))
                    return "contractMetadata: array expected";
                for (let i = 0; i < message.contractMetadata.length; ++i) {
                    let error = $root.WebAPI.ContractMetadata.verify(message.contractMetadata[i]);
                    if (error)
                        return "contractMetadata." + error;
                }
            }
            if (!$util.isInteger(message.accountId))
                return "accountId: integer expected";
            if (message.compoundOrderStructure != null && message.hasOwnProperty("compoundOrderStructure")) {
                let error = $root.WebAPI.CompoundOrderStructure.verify(message.compoundOrderStructure);
                if (error)
                    return "compoundOrderStructure." + error;
            }
            return null;
        };

        OrderStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.OrderStatus)
                return object;
            let message = new $root.WebAPI.OrderStatus();
            if (object.subscriptionId) {
                if (!Array.isArray(object.subscriptionId))
                    throw TypeError(".WebAPI.OrderStatus.subscriptionId: array expected");
                message.subscriptionId = [];
                for (let i = 0; i < object.subscriptionId.length; ++i)
                    message.subscriptionId[i] = object.subscriptionId[i] >>> 0;
            }
            if (object.isSnapshot != null)
                message.isSnapshot = Boolean(object.isSnapshot);
            if (object.status != null)
                message.status = object.status >>> 0;
            if (object.orderId != null)
                message.orderId = String(object.orderId);
            if (object.chainOrderId != null)
                message.chainOrderId = String(object.chainOrderId);
            if (object.execOrderId != null)
                message.execOrderId = String(object.execOrderId);
            if (object.statusUtcTime != null)
                if ($util.Long)
                    (message.statusUtcTime = $util.Long.fromValue(object.statusUtcTime)).unsigned = false;
                else if (typeof object.statusUtcTime === "string")
                    message.statusUtcTime = parseInt(object.statusUtcTime, 10);
                else if (typeof object.statusUtcTime === "number")
                    message.statusUtcTime = object.statusUtcTime;
                else if (typeof object.statusUtcTime === "object")
                    message.statusUtcTime = new $util.LongBits(object.statusUtcTime.low >>> 0, object.statusUtcTime.high >>> 0).toNumber();
            if (object.submissionUtcTime != null)
                if ($util.Long)
                    (message.submissionUtcTime = $util.Long.fromValue(object.submissionUtcTime)).unsigned = false;
                else if (typeof object.submissionUtcTime === "string")
                    message.submissionUtcTime = parseInt(object.submissionUtcTime, 10);
                else if (typeof object.submissionUtcTime === "number")
                    message.submissionUtcTime = object.submissionUtcTime;
                else if (typeof object.submissionUtcTime === "object")
                    message.submissionUtcTime = new $util.LongBits(object.submissionUtcTime.low >>> 0, object.submissionUtcTime.high >>> 0).toNumber();
            if (object.fillQty != null)
                message.fillQty = object.fillQty >>> 0;
            if (object.fillCnt != null)
                message.fillCnt = object.fillCnt >>> 0;
            if (object.avgFillPrice != null)
                message.avgFillPrice = object.avgFillPrice | 0;
            if (object.activeAtUtcTime != null)
                if ($util.Long)
                    (message.activeAtUtcTime = $util.Long.fromValue(object.activeAtUtcTime)).unsigned = false;
                else if (typeof object.activeAtUtcTime === "string")
                    message.activeAtUtcTime = parseInt(object.activeAtUtcTime, 10);
                else if (typeof object.activeAtUtcTime === "number")
                    message.activeAtUtcTime = object.activeAtUtcTime;
                else if (typeof object.activeAtUtcTime === "object")
                    message.activeAtUtcTime = new $util.LongBits(object.activeAtUtcTime.low >>> 0, object.activeAtUtcTime.high >>> 0).toNumber();
            if (object.remainingQty != null)
                message.remainingQty = object.remainingQty >>> 0;
            if (object.order != null) {
                if (typeof object.order !== "object")
                    throw TypeError(".WebAPI.OrderStatus.order: object expected");
                message.order = $root.WebAPI.Order.fromObject(object.order);
            }
            if (object.transactionStatus) {
                if (!Array.isArray(object.transactionStatus))
                    throw TypeError(".WebAPI.OrderStatus.transactionStatus: array expected");
                message.transactionStatus = [];
                for (let i = 0; i < object.transactionStatus.length; ++i) {
                    if (typeof object.transactionStatus[i] !== "object")
                        throw TypeError(".WebAPI.OrderStatus.transactionStatus: object expected");
                    message.transactionStatus[i] = $root.WebAPI.TransactionStatus.fromObject(object.transactionStatus[i]);
                }
            }
            if (object.enteredByUser != null)
                message.enteredByUser = String(object.enteredByUser);
            if (object.firstStatementDate != null)
                if ($util.Long)
                    (message.firstStatementDate = $util.Long.fromValue(object.firstStatementDate)).unsigned = false;
                else if (typeof object.firstStatementDate === "string")
                    message.firstStatementDate = parseInt(object.firstStatementDate, 10);
                else if (typeof object.firstStatementDate === "number")
                    message.firstStatementDate = object.firstStatementDate;
                else if (typeof object.firstStatementDate === "object")
                    message.firstStatementDate = new $util.LongBits(object.firstStatementDate.low >>> 0, object.firstStatementDate.high >>> 0).toNumber();
            if (object.lastStatementDate != null)
                if ($util.Long)
                    (message.lastStatementDate = $util.Long.fromValue(object.lastStatementDate)).unsigned = false;
                else if (typeof object.lastStatementDate === "string")
                    message.lastStatementDate = parseInt(object.lastStatementDate, 10);
                else if (typeof object.lastStatementDate === "number")
                    message.lastStatementDate = object.lastStatementDate;
                else if (typeof object.lastStatementDate === "object")
                    message.lastStatementDate = new $util.LongBits(object.lastStatementDate.low >>> 0, object.lastStatementDate.high >>> 0).toNumber();
            if (object.contractMetadata) {
                if (!Array.isArray(object.contractMetadata))
                    throw TypeError(".WebAPI.OrderStatus.contractMetadata: array expected");
                message.contractMetadata = [];
                for (let i = 0; i < object.contractMetadata.length; ++i) {
                    if (typeof object.contractMetadata[i] !== "object")
                        throw TypeError(".WebAPI.OrderStatus.contractMetadata: object expected");
                    message.contractMetadata[i] = $root.WebAPI.ContractMetadata.fromObject(object.contractMetadata[i]);
                }
            }
            if (object.accountId != null)
                message.accountId = object.accountId | 0;
            if (object.compoundOrderStructure != null) {
                if (typeof object.compoundOrderStructure !== "object")
                    throw TypeError(".WebAPI.OrderStatus.compoundOrderStructure: object expected");
                message.compoundOrderStructure = $root.WebAPI.CompoundOrderStructure.fromObject(object.compoundOrderStructure);
            }
            return message;
        };

        OrderStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.subscriptionId = [];
                object.transactionStatus = [];
                object.contractMetadata = [];
            }
            if (options.defaults) {
                object.isSnapshot = false;
                object.status = 0;
                object.orderId = "";
                object.chainOrderId = "";
                object.execOrderId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.statusUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.statusUtcTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.submissionUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.submissionUtcTime = options.longs === String ? "0" : 0;
                object.fillQty = 0;
                object.fillCnt = 0;
                object.avgFillPrice = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.activeAtUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.activeAtUtcTime = options.longs === String ? "0" : 0;
                object.remainingQty = 0;
                object.order = null;
                object.enteredByUser = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.firstStatementDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.firstStatementDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lastStatementDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastStatementDate = options.longs === String ? "0" : 0;
                object.accountId = 0;
                object.compoundOrderStructure = null;
            }
            if (message.subscriptionId && message.subscriptionId.length) {
                object.subscriptionId = [];
                for (let j = 0; j < message.subscriptionId.length; ++j)
                    object.subscriptionId[j] = message.subscriptionId[j];
            }
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                object.isSnapshot = message.isSnapshot;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                object.orderId = message.orderId;
            if (message.chainOrderId != null && message.hasOwnProperty("chainOrderId"))
                object.chainOrderId = message.chainOrderId;
            if (message.execOrderId != null && message.hasOwnProperty("execOrderId"))
                object.execOrderId = message.execOrderId;
            if (message.statusUtcTime != null && message.hasOwnProperty("statusUtcTime"))
                if (typeof message.statusUtcTime === "number")
                    object.statusUtcTime = options.longs === String ? String(message.statusUtcTime) : message.statusUtcTime;
                else
                    object.statusUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.statusUtcTime) : options.longs === Number ? new $util.LongBits(message.statusUtcTime.low >>> 0, message.statusUtcTime.high >>> 0).toNumber() : message.statusUtcTime;
            if (message.submissionUtcTime != null && message.hasOwnProperty("submissionUtcTime"))
                if (typeof message.submissionUtcTime === "number")
                    object.submissionUtcTime = options.longs === String ? String(message.submissionUtcTime) : message.submissionUtcTime;
                else
                    object.submissionUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.submissionUtcTime) : options.longs === Number ? new $util.LongBits(message.submissionUtcTime.low >>> 0, message.submissionUtcTime.high >>> 0).toNumber() : message.submissionUtcTime;
            if (message.fillQty != null && message.hasOwnProperty("fillQty"))
                object.fillQty = message.fillQty;
            if (message.fillCnt != null && message.hasOwnProperty("fillCnt"))
                object.fillCnt = message.fillCnt;
            if (message.avgFillPrice != null && message.hasOwnProperty("avgFillPrice"))
                object.avgFillPrice = message.avgFillPrice;
            if (message.activeAtUtcTime != null && message.hasOwnProperty("activeAtUtcTime"))
                if (typeof message.activeAtUtcTime === "number")
                    object.activeAtUtcTime = options.longs === String ? String(message.activeAtUtcTime) : message.activeAtUtcTime;
                else
                    object.activeAtUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.activeAtUtcTime) : options.longs === Number ? new $util.LongBits(message.activeAtUtcTime.low >>> 0, message.activeAtUtcTime.high >>> 0).toNumber() : message.activeAtUtcTime;
            if (message.remainingQty != null && message.hasOwnProperty("remainingQty"))
                object.remainingQty = message.remainingQty;
            if (message.order != null && message.hasOwnProperty("order"))
                object.order = $root.WebAPI.Order.toObject(message.order, options);
            if (message.transactionStatus && message.transactionStatus.length) {
                object.transactionStatus = [];
                for (let j = 0; j < message.transactionStatus.length; ++j)
                    object.transactionStatus[j] = $root.WebAPI.TransactionStatus.toObject(message.transactionStatus[j], options);
            }
            if (message.enteredByUser != null && message.hasOwnProperty("enteredByUser"))
                object.enteredByUser = message.enteredByUser;
            if (message.firstStatementDate != null && message.hasOwnProperty("firstStatementDate"))
                if (typeof message.firstStatementDate === "number")
                    object.firstStatementDate = options.longs === String ? String(message.firstStatementDate) : message.firstStatementDate;
                else
                    object.firstStatementDate = options.longs === String ? $util.Long.prototype.toString.call(message.firstStatementDate) : options.longs === Number ? new $util.LongBits(message.firstStatementDate.low >>> 0, message.firstStatementDate.high >>> 0).toNumber() : message.firstStatementDate;
            if (message.lastStatementDate != null && message.hasOwnProperty("lastStatementDate"))
                if (typeof message.lastStatementDate === "number")
                    object.lastStatementDate = options.longs === String ? String(message.lastStatementDate) : message.lastStatementDate;
                else
                    object.lastStatementDate = options.longs === String ? $util.Long.prototype.toString.call(message.lastStatementDate) : options.longs === Number ? new $util.LongBits(message.lastStatementDate.low >>> 0, message.lastStatementDate.high >>> 0).toNumber() : message.lastStatementDate;
            if (message.contractMetadata && message.contractMetadata.length) {
                object.contractMetadata = [];
                for (let j = 0; j < message.contractMetadata.length; ++j)
                    object.contractMetadata[j] = $root.WebAPI.ContractMetadata.toObject(message.contractMetadata[j], options);
            }
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.compoundOrderStructure != null && message.hasOwnProperty("compoundOrderStructure"))
                object.compoundOrderStructure = $root.WebAPI.CompoundOrderStructure.toObject(message.compoundOrderStructure, options);
            return object;
        };

        OrderStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        OrderStatus.Status = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "IN_TRANSIT"] = 1;
            values[valuesById[2] = "REJECTED"] = 2;
            values[valuesById[3] = "WORKING"] = 3;
            values[valuesById[4] = "EXPIRED"] = 4;
            values[valuesById[5] = "IN_CANCEL"] = 5;
            values[valuesById[6] = "IN_MODIFY"] = 6;
            values[valuesById[7] = "CANCELLED"] = 7;
            values[valuesById[8] = "FILLED"] = 8;
            values[valuesById[9] = "SUSPENDED"] = 9;
            values[valuesById[10] = "DISCONNECTED"] = 10;
            values[valuesById[11] = "ACTIVEAT"] = 11;
            return values;
        })();

        return OrderStatus;
    })();

    WebAPI.TransactionStatus = (function() {

        function TransactionStatus(properties) {
            this.trade = [];
            this.prevExecInstruction = [];
            this.execInstruction = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TransactionStatus.prototype.status = 0;
        TransactionStatus.prototype.transId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        TransactionStatus.prototype.transUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TransactionStatus.prototype.refTransId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        TransactionStatus.prototype.origClOrderId = "";
        TransactionStatus.prototype.clOrderId = "";
        TransactionStatus.prototype.fillQty = 0;
        TransactionStatus.prototype.fillPrice = 0;
        TransactionStatus.prototype.trade = $util.emptyArray;
        TransactionStatus.prototype.prevOrderQty = 0;
        TransactionStatus.prototype.orderQty = 0;
        TransactionStatus.prototype.prevLimitPrice = 0;
        TransactionStatus.prototype.limitPrice = 0;
        TransactionStatus.prototype.prevStopPrice = 0;
        TransactionStatus.prototype.stopPrice = 0;
        TransactionStatus.prototype.prevVisibleQty = 0;
        TransactionStatus.prototype.visibleQty = 0;
        TransactionStatus.prototype.prevMinVisibleQty = 0;
        TransactionStatus.prototype.minVisibleQty = 0;
        TransactionStatus.prototype.prevFillQty = 0;
        TransactionStatus.prototype.prevFillPrice = 0;
        TransactionStatus.prototype.prevOrderType = 0;
        TransactionStatus.prototype.orderType = 0;
        TransactionStatus.prototype.prevExecInstruction = $util.emptyArray;
        TransactionStatus.prototype.execInstruction = $util.emptyArray;
        TransactionStatus.prototype.prevDuration = 0;
        TransactionStatus.prototype.duration = 0;
        TransactionStatus.prototype.prevGoodThruDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TransactionStatus.prototype.goodThruDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TransactionStatus.prototype.rejectCode = 0;
        TransactionStatus.prototype.fillCounterparty = "";
        TransactionStatus.prototype.routeClOrderId = "";
        TransactionStatus.prototype.textMessage = "";
        TransactionStatus.prototype.prevGoodThruUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TransactionStatus.prototype.goodThruUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TransactionStatus.prototype.clientRegulatoryAlgorithmId = 0;
        TransactionStatus.prototype.effectiveRegulatoryAlgorithmId = 0;

        TransactionStatus.create = function create(properties) {
            return new TransactionStatus(properties);
        };

        TransactionStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.status);
            writer.uint32(16).uint64(message.transId);
            writer.uint32(24).sint64(message.transUtcTime);
            if (message.refTransId != null && message.hasOwnProperty("refTransId"))
                writer.uint32(32).uint64(message.refTransId);
            if (message.origClOrderId != null && message.hasOwnProperty("origClOrderId"))
                writer.uint32(42).string(message.origClOrderId);
            writer.uint32(50).string(message.clOrderId);
            if (message.fillQty != null && message.hasOwnProperty("fillQty"))
                writer.uint32(56).uint32(message.fillQty);
            if (message.fillPrice != null && message.hasOwnProperty("fillPrice"))
                writer.uint32(64).sint32(message.fillPrice);
            if (message.trade != null && message.trade.length)
                for (let i = 0; i < message.trade.length; ++i)
                    $root.WebAPI.Trade.encode(message.trade[i], writer.uint32(74).fork()).ldelim();
            if (message.prevOrderQty != null && message.hasOwnProperty("prevOrderQty"))
                writer.uint32(80).uint32(message.prevOrderQty);
            if (message.orderQty != null && message.hasOwnProperty("orderQty"))
                writer.uint32(88).uint32(message.orderQty);
            if (message.prevLimitPrice != null && message.hasOwnProperty("prevLimitPrice"))
                writer.uint32(96).sint32(message.prevLimitPrice);
            if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
                writer.uint32(104).sint32(message.limitPrice);
            if (message.prevStopPrice != null && message.hasOwnProperty("prevStopPrice"))
                writer.uint32(112).sint32(message.prevStopPrice);
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                writer.uint32(120).sint32(message.stopPrice);
            if (message.prevVisibleQty != null && message.hasOwnProperty("prevVisibleQty"))
                writer.uint32(128).uint32(message.prevVisibleQty);
            if (message.visibleQty != null && message.hasOwnProperty("visibleQty"))
                writer.uint32(136).uint32(message.visibleQty);
            if (message.prevMinVisibleQty != null && message.hasOwnProperty("prevMinVisibleQty"))
                writer.uint32(144).uint32(message.prevMinVisibleQty);
            if (message.minVisibleQty != null && message.hasOwnProperty("minVisibleQty"))
                writer.uint32(152).uint32(message.minVisibleQty);
            if (message.prevFillQty != null && message.hasOwnProperty("prevFillQty"))
                writer.uint32(160).uint32(message.prevFillQty);
            if (message.prevFillPrice != null && message.hasOwnProperty("prevFillPrice"))
                writer.uint32(168).sint32(message.prevFillPrice);
            if (message.prevOrderType != null && message.hasOwnProperty("prevOrderType"))
                writer.uint32(176).uint32(message.prevOrderType);
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                writer.uint32(184).uint32(message.orderType);
            if (message.prevExecInstruction != null && message.prevExecInstruction.length)
                for (let i = 0; i < message.prevExecInstruction.length; ++i)
                    writer.uint32(192).uint32(message.prevExecInstruction[i]);
            if (message.execInstruction != null && message.execInstruction.length)
                for (let i = 0; i < message.execInstruction.length; ++i)
                    writer.uint32(200).uint32(message.execInstruction[i]);
            if (message.prevDuration != null && message.hasOwnProperty("prevDuration"))
                writer.uint32(208).uint32(message.prevDuration);
            if (message.duration != null && message.hasOwnProperty("duration"))
                writer.uint32(216).uint32(message.duration);
            if (message.prevGoodThruDate != null && message.hasOwnProperty("prevGoodThruDate"))
                writer.uint32(224).sint64(message.prevGoodThruDate);
            if (message.goodThruDate != null && message.hasOwnProperty("goodThruDate"))
                writer.uint32(232).sint64(message.goodThruDate);
            if (message.rejectCode != null && message.hasOwnProperty("rejectCode"))
                writer.uint32(240).uint32(message.rejectCode);
            if (message.fillCounterparty != null && message.hasOwnProperty("fillCounterparty"))
                writer.uint32(250).string(message.fillCounterparty);
            if (message.routeClOrderId != null && message.hasOwnProperty("routeClOrderId"))
                writer.uint32(258).string(message.routeClOrderId);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(266).string(message.textMessage);
            if (message.prevGoodThruUtcTime != null && message.hasOwnProperty("prevGoodThruUtcTime"))
                writer.uint32(272).sint64(message.prevGoodThruUtcTime);
            if (message.goodThruUtcTime != null && message.hasOwnProperty("goodThruUtcTime"))
                writer.uint32(280).sint64(message.goodThruUtcTime);
            if (message.clientRegulatoryAlgorithmId != null && message.hasOwnProperty("clientRegulatoryAlgorithmId"))
                writer.uint32(288).uint32(message.clientRegulatoryAlgorithmId);
            if (message.effectiveRegulatoryAlgorithmId != null && message.hasOwnProperty("effectiveRegulatoryAlgorithmId"))
                writer.uint32(296).uint32(message.effectiveRegulatoryAlgorithmId);
            return writer;
        };

        TransactionStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TransactionStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TransactionStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.uint32();
                    break;
                case 2:
                    message.transId = reader.uint64();
                    break;
                case 3:
                    message.transUtcTime = reader.sint64();
                    break;
                case 4:
                    message.refTransId = reader.uint64();
                    break;
                case 5:
                    message.origClOrderId = reader.string();
                    break;
                case 6:
                    message.clOrderId = reader.string();
                    break;
                case 7:
                    message.fillQty = reader.uint32();
                    break;
                case 8:
                    message.fillPrice = reader.sint32();
                    break;
                case 9:
                    if (!(message.trade && message.trade.length))
                        message.trade = [];
                    message.trade.push($root.WebAPI.Trade.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.prevOrderQty = reader.uint32();
                    break;
                case 11:
                    message.orderQty = reader.uint32();
                    break;
                case 12:
                    message.prevLimitPrice = reader.sint32();
                    break;
                case 13:
                    message.limitPrice = reader.sint32();
                    break;
                case 14:
                    message.prevStopPrice = reader.sint32();
                    break;
                case 15:
                    message.stopPrice = reader.sint32();
                    break;
                case 16:
                    message.prevVisibleQty = reader.uint32();
                    break;
                case 17:
                    message.visibleQty = reader.uint32();
                    break;
                case 18:
                    message.prevMinVisibleQty = reader.uint32();
                    break;
                case 19:
                    message.minVisibleQty = reader.uint32();
                    break;
                case 20:
                    message.prevFillQty = reader.uint32();
                    break;
                case 21:
                    message.prevFillPrice = reader.sint32();
                    break;
                case 22:
                    message.prevOrderType = reader.uint32();
                    break;
                case 23:
                    message.orderType = reader.uint32();
                    break;
                case 24:
                    if (!(message.prevExecInstruction && message.prevExecInstruction.length))
                        message.prevExecInstruction = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.prevExecInstruction.push(reader.uint32());
                    } else
                        message.prevExecInstruction.push(reader.uint32());
                    break;
                case 25:
                    if (!(message.execInstruction && message.execInstruction.length))
                        message.execInstruction = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.execInstruction.push(reader.uint32());
                    } else
                        message.execInstruction.push(reader.uint32());
                    break;
                case 26:
                    message.prevDuration = reader.uint32();
                    break;
                case 27:
                    message.duration = reader.uint32();
                    break;
                case 28:
                    message.prevGoodThruDate = reader.sint64();
                    break;
                case 29:
                    message.goodThruDate = reader.sint64();
                    break;
                case 30:
                    message.rejectCode = reader.uint32();
                    break;
                case 31:
                    message.fillCounterparty = reader.string();
                    break;
                case 32:
                    message.routeClOrderId = reader.string();
                    break;
                case 33:
                    message.textMessage = reader.string();
                    break;
                case 34:
                    message.prevGoodThruUtcTime = reader.sint64();
                    break;
                case 35:
                    message.goodThruUtcTime = reader.sint64();
                    break;
                case 36:
                    message.clientRegulatoryAlgorithmId = reader.uint32();
                    break;
                case 37:
                    message.effectiveRegulatoryAlgorithmId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            if (!message.hasOwnProperty("transId"))
                throw $util.ProtocolError("missing required 'transId'", { instance: message });
            if (!message.hasOwnProperty("transUtcTime"))
                throw $util.ProtocolError("missing required 'transUtcTime'", { instance: message });
            if (!message.hasOwnProperty("clOrderId"))
                throw $util.ProtocolError("missing required 'clOrderId'", { instance: message });
            return message;
        };

        TransactionStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TransactionStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (!$util.isInteger(message.transId) && !(message.transId && $util.isInteger(message.transId.low) && $util.isInteger(message.transId.high)))
                return "transId: integer|Long expected";
            if (!$util.isInteger(message.transUtcTime) && !(message.transUtcTime && $util.isInteger(message.transUtcTime.low) && $util.isInteger(message.transUtcTime.high)))
                return "transUtcTime: integer|Long expected";
            if (message.refTransId != null && message.hasOwnProperty("refTransId"))
                if (!$util.isInteger(message.refTransId) && !(message.refTransId && $util.isInteger(message.refTransId.low) && $util.isInteger(message.refTransId.high)))
                    return "refTransId: integer|Long expected";
            if (message.origClOrderId != null && message.hasOwnProperty("origClOrderId"))
                if (!$util.isString(message.origClOrderId))
                    return "origClOrderId: string expected";
            if (!$util.isString(message.clOrderId))
                return "clOrderId: string expected";
            if (message.fillQty != null && message.hasOwnProperty("fillQty"))
                if (!$util.isInteger(message.fillQty))
                    return "fillQty: integer expected";
            if (message.fillPrice != null && message.hasOwnProperty("fillPrice"))
                if (!$util.isInteger(message.fillPrice))
                    return "fillPrice: integer expected";
            if (message.trade != null && message.hasOwnProperty("trade")) {
                if (!Array.isArray(message.trade))
                    return "trade: array expected";
                for (let i = 0; i < message.trade.length; ++i) {
                    let error = $root.WebAPI.Trade.verify(message.trade[i]);
                    if (error)
                        return "trade." + error;
                }
            }
            if (message.prevOrderQty != null && message.hasOwnProperty("prevOrderQty"))
                if (!$util.isInteger(message.prevOrderQty))
                    return "prevOrderQty: integer expected";
            if (message.orderQty != null && message.hasOwnProperty("orderQty"))
                if (!$util.isInteger(message.orderQty))
                    return "orderQty: integer expected";
            if (message.prevLimitPrice != null && message.hasOwnProperty("prevLimitPrice"))
                if (!$util.isInteger(message.prevLimitPrice))
                    return "prevLimitPrice: integer expected";
            if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
                if (!$util.isInteger(message.limitPrice))
                    return "limitPrice: integer expected";
            if (message.prevStopPrice != null && message.hasOwnProperty("prevStopPrice"))
                if (!$util.isInteger(message.prevStopPrice))
                    return "prevStopPrice: integer expected";
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                if (!$util.isInteger(message.stopPrice))
                    return "stopPrice: integer expected";
            if (message.prevVisibleQty != null && message.hasOwnProperty("prevVisibleQty"))
                if (!$util.isInteger(message.prevVisibleQty))
                    return "prevVisibleQty: integer expected";
            if (message.visibleQty != null && message.hasOwnProperty("visibleQty"))
                if (!$util.isInteger(message.visibleQty))
                    return "visibleQty: integer expected";
            if (message.prevMinVisibleQty != null && message.hasOwnProperty("prevMinVisibleQty"))
                if (!$util.isInteger(message.prevMinVisibleQty))
                    return "prevMinVisibleQty: integer expected";
            if (message.minVisibleQty != null && message.hasOwnProperty("minVisibleQty"))
                if (!$util.isInteger(message.minVisibleQty))
                    return "minVisibleQty: integer expected";
            if (message.prevFillQty != null && message.hasOwnProperty("prevFillQty"))
                if (!$util.isInteger(message.prevFillQty))
                    return "prevFillQty: integer expected";
            if (message.prevFillPrice != null && message.hasOwnProperty("prevFillPrice"))
                if (!$util.isInteger(message.prevFillPrice))
                    return "prevFillPrice: integer expected";
            if (message.prevOrderType != null && message.hasOwnProperty("prevOrderType"))
                if (!$util.isInteger(message.prevOrderType))
                    return "prevOrderType: integer expected";
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                if (!$util.isInteger(message.orderType))
                    return "orderType: integer expected";
            if (message.prevExecInstruction != null && message.hasOwnProperty("prevExecInstruction")) {
                if (!Array.isArray(message.prevExecInstruction))
                    return "prevExecInstruction: array expected";
                for (let i = 0; i < message.prevExecInstruction.length; ++i)
                    if (!$util.isInteger(message.prevExecInstruction[i]))
                        return "prevExecInstruction: integer[] expected";
            }
            if (message.execInstruction != null && message.hasOwnProperty("execInstruction")) {
                if (!Array.isArray(message.execInstruction))
                    return "execInstruction: array expected";
                for (let i = 0; i < message.execInstruction.length; ++i)
                    if (!$util.isInteger(message.execInstruction[i]))
                        return "execInstruction: integer[] expected";
            }
            if (message.prevDuration != null && message.hasOwnProperty("prevDuration"))
                if (!$util.isInteger(message.prevDuration))
                    return "prevDuration: integer expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            if (message.prevGoodThruDate != null && message.hasOwnProperty("prevGoodThruDate"))
                if (!$util.isInteger(message.prevGoodThruDate) && !(message.prevGoodThruDate && $util.isInteger(message.prevGoodThruDate.low) && $util.isInteger(message.prevGoodThruDate.high)))
                    return "prevGoodThruDate: integer|Long expected";
            if (message.goodThruDate != null && message.hasOwnProperty("goodThruDate"))
                if (!$util.isInteger(message.goodThruDate) && !(message.goodThruDate && $util.isInteger(message.goodThruDate.low) && $util.isInteger(message.goodThruDate.high)))
                    return "goodThruDate: integer|Long expected";
            if (message.rejectCode != null && message.hasOwnProperty("rejectCode"))
                if (!$util.isInteger(message.rejectCode))
                    return "rejectCode: integer expected";
            if (message.fillCounterparty != null && message.hasOwnProperty("fillCounterparty"))
                if (!$util.isString(message.fillCounterparty))
                    return "fillCounterparty: string expected";
            if (message.routeClOrderId != null && message.hasOwnProperty("routeClOrderId"))
                if (!$util.isString(message.routeClOrderId))
                    return "routeClOrderId: string expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            if (message.prevGoodThruUtcTime != null && message.hasOwnProperty("prevGoodThruUtcTime"))
                if (!$util.isInteger(message.prevGoodThruUtcTime) && !(message.prevGoodThruUtcTime && $util.isInteger(message.prevGoodThruUtcTime.low) && $util.isInteger(message.prevGoodThruUtcTime.high)))
                    return "prevGoodThruUtcTime: integer|Long expected";
            if (message.goodThruUtcTime != null && message.hasOwnProperty("goodThruUtcTime"))
                if (!$util.isInteger(message.goodThruUtcTime) && !(message.goodThruUtcTime && $util.isInteger(message.goodThruUtcTime.low) && $util.isInteger(message.goodThruUtcTime.high)))
                    return "goodThruUtcTime: integer|Long expected";
            if (message.clientRegulatoryAlgorithmId != null && message.hasOwnProperty("clientRegulatoryAlgorithmId"))
                if (!$util.isInteger(message.clientRegulatoryAlgorithmId))
                    return "clientRegulatoryAlgorithmId: integer expected";
            if (message.effectiveRegulatoryAlgorithmId != null && message.hasOwnProperty("effectiveRegulatoryAlgorithmId"))
                if (!$util.isInteger(message.effectiveRegulatoryAlgorithmId))
                    return "effectiveRegulatoryAlgorithmId: integer expected";
            return null;
        };

        TransactionStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TransactionStatus)
                return object;
            let message = new $root.WebAPI.TransactionStatus();
            if (object.status != null)
                message.status = object.status >>> 0;
            if (object.transId != null)
                if ($util.Long)
                    (message.transId = $util.Long.fromValue(object.transId)).unsigned = true;
                else if (typeof object.transId === "string")
                    message.transId = parseInt(object.transId, 10);
                else if (typeof object.transId === "number")
                    message.transId = object.transId;
                else if (typeof object.transId === "object")
                    message.transId = new $util.LongBits(object.transId.low >>> 0, object.transId.high >>> 0).toNumber(true);
            if (object.transUtcTime != null)
                if ($util.Long)
                    (message.transUtcTime = $util.Long.fromValue(object.transUtcTime)).unsigned = false;
                else if (typeof object.transUtcTime === "string")
                    message.transUtcTime = parseInt(object.transUtcTime, 10);
                else if (typeof object.transUtcTime === "number")
                    message.transUtcTime = object.transUtcTime;
                else if (typeof object.transUtcTime === "object")
                    message.transUtcTime = new $util.LongBits(object.transUtcTime.low >>> 0, object.transUtcTime.high >>> 0).toNumber();
            if (object.refTransId != null)
                if ($util.Long)
                    (message.refTransId = $util.Long.fromValue(object.refTransId)).unsigned = true;
                else if (typeof object.refTransId === "string")
                    message.refTransId = parseInt(object.refTransId, 10);
                else if (typeof object.refTransId === "number")
                    message.refTransId = object.refTransId;
                else if (typeof object.refTransId === "object")
                    message.refTransId = new $util.LongBits(object.refTransId.low >>> 0, object.refTransId.high >>> 0).toNumber(true);
            if (object.origClOrderId != null)
                message.origClOrderId = String(object.origClOrderId);
            if (object.clOrderId != null)
                message.clOrderId = String(object.clOrderId);
            if (object.fillQty != null)
                message.fillQty = object.fillQty >>> 0;
            if (object.fillPrice != null)
                message.fillPrice = object.fillPrice | 0;
            if (object.trade) {
                if (!Array.isArray(object.trade))
                    throw TypeError(".WebAPI.TransactionStatus.trade: array expected");
                message.trade = [];
                for (let i = 0; i < object.trade.length; ++i) {
                    if (typeof object.trade[i] !== "object")
                        throw TypeError(".WebAPI.TransactionStatus.trade: object expected");
                    message.trade[i] = $root.WebAPI.Trade.fromObject(object.trade[i]);
                }
            }
            if (object.prevOrderQty != null)
                message.prevOrderQty = object.prevOrderQty >>> 0;
            if (object.orderQty != null)
                message.orderQty = object.orderQty >>> 0;
            if (object.prevLimitPrice != null)
                message.prevLimitPrice = object.prevLimitPrice | 0;
            if (object.limitPrice != null)
                message.limitPrice = object.limitPrice | 0;
            if (object.prevStopPrice != null)
                message.prevStopPrice = object.prevStopPrice | 0;
            if (object.stopPrice != null)
                message.stopPrice = object.stopPrice | 0;
            if (object.prevVisibleQty != null)
                message.prevVisibleQty = object.prevVisibleQty >>> 0;
            if (object.visibleQty != null)
                message.visibleQty = object.visibleQty >>> 0;
            if (object.prevMinVisibleQty != null)
                message.prevMinVisibleQty = object.prevMinVisibleQty >>> 0;
            if (object.minVisibleQty != null)
                message.minVisibleQty = object.minVisibleQty >>> 0;
            if (object.prevFillQty != null)
                message.prevFillQty = object.prevFillQty >>> 0;
            if (object.prevFillPrice != null)
                message.prevFillPrice = object.prevFillPrice | 0;
            if (object.prevOrderType != null)
                message.prevOrderType = object.prevOrderType >>> 0;
            if (object.orderType != null)
                message.orderType = object.orderType >>> 0;
            if (object.prevExecInstruction) {
                if (!Array.isArray(object.prevExecInstruction))
                    throw TypeError(".WebAPI.TransactionStatus.prevExecInstruction: array expected");
                message.prevExecInstruction = [];
                for (let i = 0; i < object.prevExecInstruction.length; ++i)
                    message.prevExecInstruction[i] = object.prevExecInstruction[i] >>> 0;
            }
            if (object.execInstruction) {
                if (!Array.isArray(object.execInstruction))
                    throw TypeError(".WebAPI.TransactionStatus.execInstruction: array expected");
                message.execInstruction = [];
                for (let i = 0; i < object.execInstruction.length; ++i)
                    message.execInstruction[i] = object.execInstruction[i] >>> 0;
            }
            if (object.prevDuration != null)
                message.prevDuration = object.prevDuration >>> 0;
            if (object.duration != null)
                message.duration = object.duration >>> 0;
            if (object.prevGoodThruDate != null)
                if ($util.Long)
                    (message.prevGoodThruDate = $util.Long.fromValue(object.prevGoodThruDate)).unsigned = false;
                else if (typeof object.prevGoodThruDate === "string")
                    message.prevGoodThruDate = parseInt(object.prevGoodThruDate, 10);
                else if (typeof object.prevGoodThruDate === "number")
                    message.prevGoodThruDate = object.prevGoodThruDate;
                else if (typeof object.prevGoodThruDate === "object")
                    message.prevGoodThruDate = new $util.LongBits(object.prevGoodThruDate.low >>> 0, object.prevGoodThruDate.high >>> 0).toNumber();
            if (object.goodThruDate != null)
                if ($util.Long)
                    (message.goodThruDate = $util.Long.fromValue(object.goodThruDate)).unsigned = false;
                else if (typeof object.goodThruDate === "string")
                    message.goodThruDate = parseInt(object.goodThruDate, 10);
                else if (typeof object.goodThruDate === "number")
                    message.goodThruDate = object.goodThruDate;
                else if (typeof object.goodThruDate === "object")
                    message.goodThruDate = new $util.LongBits(object.goodThruDate.low >>> 0, object.goodThruDate.high >>> 0).toNumber();
            if (object.rejectCode != null)
                message.rejectCode = object.rejectCode >>> 0;
            if (object.fillCounterparty != null)
                message.fillCounterparty = String(object.fillCounterparty);
            if (object.routeClOrderId != null)
                message.routeClOrderId = String(object.routeClOrderId);
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            if (object.prevGoodThruUtcTime != null)
                if ($util.Long)
                    (message.prevGoodThruUtcTime = $util.Long.fromValue(object.prevGoodThruUtcTime)).unsigned = false;
                else if (typeof object.prevGoodThruUtcTime === "string")
                    message.prevGoodThruUtcTime = parseInt(object.prevGoodThruUtcTime, 10);
                else if (typeof object.prevGoodThruUtcTime === "number")
                    message.prevGoodThruUtcTime = object.prevGoodThruUtcTime;
                else if (typeof object.prevGoodThruUtcTime === "object")
                    message.prevGoodThruUtcTime = new $util.LongBits(object.prevGoodThruUtcTime.low >>> 0, object.prevGoodThruUtcTime.high >>> 0).toNumber();
            if (object.goodThruUtcTime != null)
                if ($util.Long)
                    (message.goodThruUtcTime = $util.Long.fromValue(object.goodThruUtcTime)).unsigned = false;
                else if (typeof object.goodThruUtcTime === "string")
                    message.goodThruUtcTime = parseInt(object.goodThruUtcTime, 10);
                else if (typeof object.goodThruUtcTime === "number")
                    message.goodThruUtcTime = object.goodThruUtcTime;
                else if (typeof object.goodThruUtcTime === "object")
                    message.goodThruUtcTime = new $util.LongBits(object.goodThruUtcTime.low >>> 0, object.goodThruUtcTime.high >>> 0).toNumber();
            if (object.clientRegulatoryAlgorithmId != null)
                message.clientRegulatoryAlgorithmId = object.clientRegulatoryAlgorithmId >>> 0;
            if (object.effectiveRegulatoryAlgorithmId != null)
                message.effectiveRegulatoryAlgorithmId = object.effectiveRegulatoryAlgorithmId >>> 0;
            return message;
        };

        TransactionStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.trade = [];
                object.prevExecInstruction = [];
                object.execInstruction = [];
            }
            if (options.defaults) {
                object.status = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.transId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.transId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.transUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.transUtcTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.refTransId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.refTransId = options.longs === String ? "0" : 0;
                object.origClOrderId = "";
                object.clOrderId = "";
                object.fillQty = 0;
                object.fillPrice = 0;
                object.prevOrderQty = 0;
                object.orderQty = 0;
                object.prevLimitPrice = 0;
                object.limitPrice = 0;
                object.prevStopPrice = 0;
                object.stopPrice = 0;
                object.prevVisibleQty = 0;
                object.visibleQty = 0;
                object.prevMinVisibleQty = 0;
                object.minVisibleQty = 0;
                object.prevFillQty = 0;
                object.prevFillPrice = 0;
                object.prevOrderType = 0;
                object.orderType = 0;
                object.prevDuration = 0;
                object.duration = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.prevGoodThruDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.prevGoodThruDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.goodThruDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.goodThruDate = options.longs === String ? "0" : 0;
                object.rejectCode = 0;
                object.fillCounterparty = "";
                object.routeClOrderId = "";
                object.textMessage = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.prevGoodThruUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.prevGoodThruUtcTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.goodThruUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.goodThruUtcTime = options.longs === String ? "0" : 0;
                object.clientRegulatoryAlgorithmId = 0;
                object.effectiveRegulatoryAlgorithmId = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.transId != null && message.hasOwnProperty("transId"))
                if (typeof message.transId === "number")
                    object.transId = options.longs === String ? String(message.transId) : message.transId;
                else
                    object.transId = options.longs === String ? $util.Long.prototype.toString.call(message.transId) : options.longs === Number ? new $util.LongBits(message.transId.low >>> 0, message.transId.high >>> 0).toNumber(true) : message.transId;
            if (message.transUtcTime != null && message.hasOwnProperty("transUtcTime"))
                if (typeof message.transUtcTime === "number")
                    object.transUtcTime = options.longs === String ? String(message.transUtcTime) : message.transUtcTime;
                else
                    object.transUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.transUtcTime) : options.longs === Number ? new $util.LongBits(message.transUtcTime.low >>> 0, message.transUtcTime.high >>> 0).toNumber() : message.transUtcTime;
            if (message.refTransId != null && message.hasOwnProperty("refTransId"))
                if (typeof message.refTransId === "number")
                    object.refTransId = options.longs === String ? String(message.refTransId) : message.refTransId;
                else
                    object.refTransId = options.longs === String ? $util.Long.prototype.toString.call(message.refTransId) : options.longs === Number ? new $util.LongBits(message.refTransId.low >>> 0, message.refTransId.high >>> 0).toNumber(true) : message.refTransId;
            if (message.origClOrderId != null && message.hasOwnProperty("origClOrderId"))
                object.origClOrderId = message.origClOrderId;
            if (message.clOrderId != null && message.hasOwnProperty("clOrderId"))
                object.clOrderId = message.clOrderId;
            if (message.fillQty != null && message.hasOwnProperty("fillQty"))
                object.fillQty = message.fillQty;
            if (message.fillPrice != null && message.hasOwnProperty("fillPrice"))
                object.fillPrice = message.fillPrice;
            if (message.trade && message.trade.length) {
                object.trade = [];
                for (let j = 0; j < message.trade.length; ++j)
                    object.trade[j] = $root.WebAPI.Trade.toObject(message.trade[j], options);
            }
            if (message.prevOrderQty != null && message.hasOwnProperty("prevOrderQty"))
                object.prevOrderQty = message.prevOrderQty;
            if (message.orderQty != null && message.hasOwnProperty("orderQty"))
                object.orderQty = message.orderQty;
            if (message.prevLimitPrice != null && message.hasOwnProperty("prevLimitPrice"))
                object.prevLimitPrice = message.prevLimitPrice;
            if (message.limitPrice != null && message.hasOwnProperty("limitPrice"))
                object.limitPrice = message.limitPrice;
            if (message.prevStopPrice != null && message.hasOwnProperty("prevStopPrice"))
                object.prevStopPrice = message.prevStopPrice;
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                object.stopPrice = message.stopPrice;
            if (message.prevVisibleQty != null && message.hasOwnProperty("prevVisibleQty"))
                object.prevVisibleQty = message.prevVisibleQty;
            if (message.visibleQty != null && message.hasOwnProperty("visibleQty"))
                object.visibleQty = message.visibleQty;
            if (message.prevMinVisibleQty != null && message.hasOwnProperty("prevMinVisibleQty"))
                object.prevMinVisibleQty = message.prevMinVisibleQty;
            if (message.minVisibleQty != null && message.hasOwnProperty("minVisibleQty"))
                object.minVisibleQty = message.minVisibleQty;
            if (message.prevFillQty != null && message.hasOwnProperty("prevFillQty"))
                object.prevFillQty = message.prevFillQty;
            if (message.prevFillPrice != null && message.hasOwnProperty("prevFillPrice"))
                object.prevFillPrice = message.prevFillPrice;
            if (message.prevOrderType != null && message.hasOwnProperty("prevOrderType"))
                object.prevOrderType = message.prevOrderType;
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                object.orderType = message.orderType;
            if (message.prevExecInstruction && message.prevExecInstruction.length) {
                object.prevExecInstruction = [];
                for (let j = 0; j < message.prevExecInstruction.length; ++j)
                    object.prevExecInstruction[j] = message.prevExecInstruction[j];
            }
            if (message.execInstruction && message.execInstruction.length) {
                object.execInstruction = [];
                for (let j = 0; j < message.execInstruction.length; ++j)
                    object.execInstruction[j] = message.execInstruction[j];
            }
            if (message.prevDuration != null && message.hasOwnProperty("prevDuration"))
                object.prevDuration = message.prevDuration;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.prevGoodThruDate != null && message.hasOwnProperty("prevGoodThruDate"))
                if (typeof message.prevGoodThruDate === "number")
                    object.prevGoodThruDate = options.longs === String ? String(message.prevGoodThruDate) : message.prevGoodThruDate;
                else
                    object.prevGoodThruDate = options.longs === String ? $util.Long.prototype.toString.call(message.prevGoodThruDate) : options.longs === Number ? new $util.LongBits(message.prevGoodThruDate.low >>> 0, message.prevGoodThruDate.high >>> 0).toNumber() : message.prevGoodThruDate;
            if (message.goodThruDate != null && message.hasOwnProperty("goodThruDate"))
                if (typeof message.goodThruDate === "number")
                    object.goodThruDate = options.longs === String ? String(message.goodThruDate) : message.goodThruDate;
                else
                    object.goodThruDate = options.longs === String ? $util.Long.prototype.toString.call(message.goodThruDate) : options.longs === Number ? new $util.LongBits(message.goodThruDate.low >>> 0, message.goodThruDate.high >>> 0).toNumber() : message.goodThruDate;
            if (message.rejectCode != null && message.hasOwnProperty("rejectCode"))
                object.rejectCode = message.rejectCode;
            if (message.fillCounterparty != null && message.hasOwnProperty("fillCounterparty"))
                object.fillCounterparty = message.fillCounterparty;
            if (message.routeClOrderId != null && message.hasOwnProperty("routeClOrderId"))
                object.routeClOrderId = message.routeClOrderId;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            if (message.prevGoodThruUtcTime != null && message.hasOwnProperty("prevGoodThruUtcTime"))
                if (typeof message.prevGoodThruUtcTime === "number")
                    object.prevGoodThruUtcTime = options.longs === String ? String(message.prevGoodThruUtcTime) : message.prevGoodThruUtcTime;
                else
                    object.prevGoodThruUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.prevGoodThruUtcTime) : options.longs === Number ? new $util.LongBits(message.prevGoodThruUtcTime.low >>> 0, message.prevGoodThruUtcTime.high >>> 0).toNumber() : message.prevGoodThruUtcTime;
            if (message.goodThruUtcTime != null && message.hasOwnProperty("goodThruUtcTime"))
                if (typeof message.goodThruUtcTime === "number")
                    object.goodThruUtcTime = options.longs === String ? String(message.goodThruUtcTime) : message.goodThruUtcTime;
                else
                    object.goodThruUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.goodThruUtcTime) : options.longs === Number ? new $util.LongBits(message.goodThruUtcTime.low >>> 0, message.goodThruUtcTime.high >>> 0).toNumber() : message.goodThruUtcTime;
            if (message.clientRegulatoryAlgorithmId != null && message.hasOwnProperty("clientRegulatoryAlgorithmId"))
                object.clientRegulatoryAlgorithmId = message.clientRegulatoryAlgorithmId;
            if (message.effectiveRegulatoryAlgorithmId != null && message.hasOwnProperty("effectiveRegulatoryAlgorithmId"))
                object.effectiveRegulatoryAlgorithmId = message.effectiveRegulatoryAlgorithmId;
            return object;
        };

        TransactionStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TransactionStatus.Status = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "IN_TRANSIT"] = 1;
            values[valuesById[2] = "REJECTED"] = 2;
            values[valuesById[3] = "ACK_PLACE"] = 3;
            values[valuesById[4] = "EXPIRED"] = 4;
            values[valuesById[5] = "IN_CANCEL"] = 5;
            values[valuesById[6] = "ACK_CANCEL"] = 6;
            values[valuesById[7] = "REJECT_CANCEL"] = 7;
            values[valuesById[8] = "IN_MODIFY"] = 8;
            values[valuesById[9] = "ACK_MODIFY"] = 9;
            values[valuesById[10] = "REJECT_MODIFY"] = 10;
            values[valuesById[11] = "FILL"] = 11;
            values[valuesById[12] = "SUSPEND"] = 12;
            values[valuesById[13] = "FILL_CORRECT"] = 13;
            values[valuesById[14] = "FILL_CANCEL"] = 14;
            values[valuesById[15] = "FILL_BUST"] = 15;
            values[valuesById[16] = "ACTIVEAT"] = 16;
            values[valuesById[17] = "DISCONNECT"] = 17;
            values[valuesById[18] = "SYNTHETIC_ACTIVATED"] = 18;
            values[valuesById[19] = "UPDATE"] = 19;
            return values;
        })();

        return TransactionStatus;
    })();

    WebAPI.Trade = (function() {

        function Trade(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Trade.prototype.tradeId = "";
        Trade.prototype.contractId = 0;
        Trade.prototype.statementDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Trade.prototype.tradeUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Trade.prototype.tradeDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Trade.prototype.price = 0;
        Trade.prototype.side = 0;
        Trade.prototype.qty = 0;
        Trade.prototype.tradeCounterparty = "";
        Trade.prototype.isAggressive = false;

        Trade.create = function create(properties) {
            return new Trade(properties);
        };

        Trade.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.tradeId);
            writer.uint32(16).uint32(message.contractId);
            writer.uint32(24).sint64(message.statementDate);
            writer.uint32(32).sint64(message.tradeUtcTime);
            writer.uint32(40).sint64(message.tradeDate);
            writer.uint32(48).sint32(message.price);
            writer.uint32(56).uint32(message.side);
            writer.uint32(64).uint32(message.qty);
            if (message.tradeCounterparty != null && message.hasOwnProperty("tradeCounterparty"))
                writer.uint32(74).string(message.tradeCounterparty);
            if (message.isAggressive != null && message.hasOwnProperty("isAggressive"))
                writer.uint32(80).bool(message.isAggressive);
            return writer;
        };

        Trade.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Trade.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.Trade();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tradeId = reader.string();
                    break;
                case 2:
                    message.contractId = reader.uint32();
                    break;
                case 3:
                    message.statementDate = reader.sint64();
                    break;
                case 4:
                    message.tradeUtcTime = reader.sint64();
                    break;
                case 5:
                    message.tradeDate = reader.sint64();
                    break;
                case 6:
                    message.price = reader.sint32();
                    break;
                case 7:
                    message.side = reader.uint32();
                    break;
                case 8:
                    message.qty = reader.uint32();
                    break;
                case 9:
                    message.tradeCounterparty = reader.string();
                    break;
                case 10:
                    message.isAggressive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tradeId"))
                throw $util.ProtocolError("missing required 'tradeId'", { instance: message });
            if (!message.hasOwnProperty("contractId"))
                throw $util.ProtocolError("missing required 'contractId'", { instance: message });
            if (!message.hasOwnProperty("statementDate"))
                throw $util.ProtocolError("missing required 'statementDate'", { instance: message });
            if (!message.hasOwnProperty("tradeUtcTime"))
                throw $util.ProtocolError("missing required 'tradeUtcTime'", { instance: message });
            if (!message.hasOwnProperty("tradeDate"))
                throw $util.ProtocolError("missing required 'tradeDate'", { instance: message });
            if (!message.hasOwnProperty("price"))
                throw $util.ProtocolError("missing required 'price'", { instance: message });
            if (!message.hasOwnProperty("side"))
                throw $util.ProtocolError("missing required 'side'", { instance: message });
            if (!message.hasOwnProperty("qty"))
                throw $util.ProtocolError("missing required 'qty'", { instance: message });
            return message;
        };

        Trade.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Trade.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.tradeId))
                return "tradeId: string expected";
            if (!$util.isInteger(message.contractId))
                return "contractId: integer expected";
            if (!$util.isInteger(message.statementDate) && !(message.statementDate && $util.isInteger(message.statementDate.low) && $util.isInteger(message.statementDate.high)))
                return "statementDate: integer|Long expected";
            if (!$util.isInteger(message.tradeUtcTime) && !(message.tradeUtcTime && $util.isInteger(message.tradeUtcTime.low) && $util.isInteger(message.tradeUtcTime.high)))
                return "tradeUtcTime: integer|Long expected";
            if (!$util.isInteger(message.tradeDate) && !(message.tradeDate && $util.isInteger(message.tradeDate.low) && $util.isInteger(message.tradeDate.high)))
                return "tradeDate: integer|Long expected";
            if (!$util.isInteger(message.price))
                return "price: integer expected";
            if (!$util.isInteger(message.side))
                return "side: integer expected";
            if (!$util.isInteger(message.qty))
                return "qty: integer expected";
            if (message.tradeCounterparty != null && message.hasOwnProperty("tradeCounterparty"))
                if (!$util.isString(message.tradeCounterparty))
                    return "tradeCounterparty: string expected";
            if (message.isAggressive != null && message.hasOwnProperty("isAggressive"))
                if (typeof message.isAggressive !== "boolean")
                    return "isAggressive: boolean expected";
            return null;
        };

        Trade.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.Trade)
                return object;
            let message = new $root.WebAPI.Trade();
            if (object.tradeId != null)
                message.tradeId = String(object.tradeId);
            if (object.contractId != null)
                message.contractId = object.contractId >>> 0;
            if (object.statementDate != null)
                if ($util.Long)
                    (message.statementDate = $util.Long.fromValue(object.statementDate)).unsigned = false;
                else if (typeof object.statementDate === "string")
                    message.statementDate = parseInt(object.statementDate, 10);
                else if (typeof object.statementDate === "number")
                    message.statementDate = object.statementDate;
                else if (typeof object.statementDate === "object")
                    message.statementDate = new $util.LongBits(object.statementDate.low >>> 0, object.statementDate.high >>> 0).toNumber();
            if (object.tradeUtcTime != null)
                if ($util.Long)
                    (message.tradeUtcTime = $util.Long.fromValue(object.tradeUtcTime)).unsigned = false;
                else if (typeof object.tradeUtcTime === "string")
                    message.tradeUtcTime = parseInt(object.tradeUtcTime, 10);
                else if (typeof object.tradeUtcTime === "number")
                    message.tradeUtcTime = object.tradeUtcTime;
                else if (typeof object.tradeUtcTime === "object")
                    message.tradeUtcTime = new $util.LongBits(object.tradeUtcTime.low >>> 0, object.tradeUtcTime.high >>> 0).toNumber();
            if (object.tradeDate != null)
                if ($util.Long)
                    (message.tradeDate = $util.Long.fromValue(object.tradeDate)).unsigned = false;
                else if (typeof object.tradeDate === "string")
                    message.tradeDate = parseInt(object.tradeDate, 10);
                else if (typeof object.tradeDate === "number")
                    message.tradeDate = object.tradeDate;
                else if (typeof object.tradeDate === "object")
                    message.tradeDate = new $util.LongBits(object.tradeDate.low >>> 0, object.tradeDate.high >>> 0).toNumber();
            if (object.price != null)
                message.price = object.price | 0;
            if (object.side != null)
                message.side = object.side >>> 0;
            if (object.qty != null)
                message.qty = object.qty >>> 0;
            if (object.tradeCounterparty != null)
                message.tradeCounterparty = String(object.tradeCounterparty);
            if (object.isAggressive != null)
                message.isAggressive = Boolean(object.isAggressive);
            return message;
        };

        Trade.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.tradeId = "";
                object.contractId = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.statementDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.statementDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.tradeUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tradeUtcTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.tradeDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tradeDate = options.longs === String ? "0" : 0;
                object.price = 0;
                object.side = 0;
                object.qty = 0;
                object.tradeCounterparty = "";
                object.isAggressive = false;
            }
            if (message.tradeId != null && message.hasOwnProperty("tradeId"))
                object.tradeId = message.tradeId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = message.contractId;
            if (message.statementDate != null && message.hasOwnProperty("statementDate"))
                if (typeof message.statementDate === "number")
                    object.statementDate = options.longs === String ? String(message.statementDate) : message.statementDate;
                else
                    object.statementDate = options.longs === String ? $util.Long.prototype.toString.call(message.statementDate) : options.longs === Number ? new $util.LongBits(message.statementDate.low >>> 0, message.statementDate.high >>> 0).toNumber() : message.statementDate;
            if (message.tradeUtcTime != null && message.hasOwnProperty("tradeUtcTime"))
                if (typeof message.tradeUtcTime === "number")
                    object.tradeUtcTime = options.longs === String ? String(message.tradeUtcTime) : message.tradeUtcTime;
                else
                    object.tradeUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.tradeUtcTime) : options.longs === Number ? new $util.LongBits(message.tradeUtcTime.low >>> 0, message.tradeUtcTime.high >>> 0).toNumber() : message.tradeUtcTime;
            if (message.tradeDate != null && message.hasOwnProperty("tradeDate"))
                if (typeof message.tradeDate === "number")
                    object.tradeDate = options.longs === String ? String(message.tradeDate) : message.tradeDate;
                else
                    object.tradeDate = options.longs === String ? $util.Long.prototype.toString.call(message.tradeDate) : options.longs === Number ? new $util.LongBits(message.tradeDate.low >>> 0, message.tradeDate.high >>> 0).toNumber() : message.tradeDate;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = message.price;
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = message.side;
            if (message.qty != null && message.hasOwnProperty("qty"))
                object.qty = message.qty;
            if (message.tradeCounterparty != null && message.hasOwnProperty("tradeCounterparty"))
                object.tradeCounterparty = message.tradeCounterparty;
            if (message.isAggressive != null && message.hasOwnProperty("isAggressive"))
                object.isAggressive = message.isAggressive;
            return object;
        };

        Trade.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Trade;
    })();

    WebAPI.CompoundOrderStructure = (function() {

        function CompoundOrderStructure(properties) {
            this.compoundOrderEntry = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CompoundOrderStructure.prototype.type = 0;
        CompoundOrderStructure.prototype.clCompoundId = "";
        CompoundOrderStructure.prototype.compoundOrderEntry = $util.emptyArray;

        CompoundOrderStructure.create = function create(properties) {
            return new CompoundOrderStructure(properties);
        };

        CompoundOrderStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.type);
            writer.uint32(18).string(message.clCompoundId);
            if (message.compoundOrderEntry != null && message.compoundOrderEntry.length)
                for (let i = 0; i < message.compoundOrderEntry.length; ++i)
                    $root.WebAPI.CompoundOrderStructureEntry.encode(message.compoundOrderEntry[i], writer.uint32(26).fork()).ldelim();
            return writer;
        };

        CompoundOrderStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CompoundOrderStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.CompoundOrderStructure();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.uint32();
                    break;
                case 2:
                    message.clCompoundId = reader.string();
                    break;
                case 3:
                    if (!(message.compoundOrderEntry && message.compoundOrderEntry.length))
                        message.compoundOrderEntry = [];
                    message.compoundOrderEntry.push($root.WebAPI.CompoundOrderStructureEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("clCompoundId"))
                throw $util.ProtocolError("missing required 'clCompoundId'", { instance: message });
            return message;
        };

        CompoundOrderStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CompoundOrderStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.clCompoundId))
                return "clCompoundId: string expected";
            if (message.compoundOrderEntry != null && message.hasOwnProperty("compoundOrderEntry")) {
                if (!Array.isArray(message.compoundOrderEntry))
                    return "compoundOrderEntry: array expected";
                for (let i = 0; i < message.compoundOrderEntry.length; ++i) {
                    let error = $root.WebAPI.CompoundOrderStructureEntry.verify(message.compoundOrderEntry[i]);
                    if (error)
                        return "compoundOrderEntry." + error;
                }
            }
            return null;
        };

        CompoundOrderStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.CompoundOrderStructure)
                return object;
            let message = new $root.WebAPI.CompoundOrderStructure();
            if (object.type != null)
                message.type = object.type >>> 0;
            if (object.clCompoundId != null)
                message.clCompoundId = String(object.clCompoundId);
            if (object.compoundOrderEntry) {
                if (!Array.isArray(object.compoundOrderEntry))
                    throw TypeError(".WebAPI.CompoundOrderStructure.compoundOrderEntry: array expected");
                message.compoundOrderEntry = [];
                for (let i = 0; i < object.compoundOrderEntry.length; ++i) {
                    if (typeof object.compoundOrderEntry[i] !== "object")
                        throw TypeError(".WebAPI.CompoundOrderStructure.compoundOrderEntry: object expected");
                    message.compoundOrderEntry[i] = $root.WebAPI.CompoundOrderStructureEntry.fromObject(object.compoundOrderEntry[i]);
                }
            }
            return message;
        };

        CompoundOrderStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.compoundOrderEntry = [];
            if (options.defaults) {
                object.type = 0;
                object.clCompoundId = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.clCompoundId != null && message.hasOwnProperty("clCompoundId"))
                object.clCompoundId = message.clCompoundId;
            if (message.compoundOrderEntry && message.compoundOrderEntry.length) {
                object.compoundOrderEntry = [];
                for (let j = 0; j < message.compoundOrderEntry.length; ++j)
                    object.compoundOrderEntry[j] = $root.WebAPI.CompoundOrderStructureEntry.toObject(message.compoundOrderEntry[j], options);
            }
            return object;
        };

        CompoundOrderStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CompoundOrderStructure;
    })();

    WebAPI.CompoundOrderStructureEntry = (function() {

        function CompoundOrderStructureEntry(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CompoundOrderStructureEntry.prototype.chainOrderId = "";
        CompoundOrderStructureEntry.prototype.compoundOrderStructure = null;

        CompoundOrderStructureEntry.create = function create(properties) {
            return new CompoundOrderStructureEntry(properties);
        };

        CompoundOrderStructureEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chainOrderId != null && message.hasOwnProperty("chainOrderId"))
                writer.uint32(10).string(message.chainOrderId);
            if (message.compoundOrderStructure != null && message.hasOwnProperty("compoundOrderStructure"))
                $root.WebAPI.CompoundOrderStructure.encode(message.compoundOrderStructure, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        CompoundOrderStructureEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CompoundOrderStructureEntry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.CompoundOrderStructureEntry();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chainOrderId = reader.string();
                    break;
                case 2:
                    message.compoundOrderStructure = $root.WebAPI.CompoundOrderStructure.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        CompoundOrderStructureEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CompoundOrderStructureEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chainOrderId != null && message.hasOwnProperty("chainOrderId"))
                if (!$util.isString(message.chainOrderId))
                    return "chainOrderId: string expected";
            if (message.compoundOrderStructure != null && message.hasOwnProperty("compoundOrderStructure")) {
                let error = $root.WebAPI.CompoundOrderStructure.verify(message.compoundOrderStructure);
                if (error)
                    return "compoundOrderStructure." + error;
            }
            return null;
        };

        CompoundOrderStructureEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.CompoundOrderStructureEntry)
                return object;
            let message = new $root.WebAPI.CompoundOrderStructureEntry();
            if (object.chainOrderId != null)
                message.chainOrderId = String(object.chainOrderId);
            if (object.compoundOrderStructure != null) {
                if (typeof object.compoundOrderStructure !== "object")
                    throw TypeError(".WebAPI.CompoundOrderStructureEntry.compoundOrderStructure: object expected");
                message.compoundOrderStructure = $root.WebAPI.CompoundOrderStructure.fromObject(object.compoundOrderStructure);
            }
            return message;
        };

        CompoundOrderStructureEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.chainOrderId = "";
                object.compoundOrderStructure = null;
            }
            if (message.chainOrderId != null && message.hasOwnProperty("chainOrderId"))
                object.chainOrderId = message.chainOrderId;
            if (message.compoundOrderStructure != null && message.hasOwnProperty("compoundOrderStructure"))
                object.compoundOrderStructure = $root.WebAPI.CompoundOrderStructure.toObject(message.compoundOrderStructure, options);
            return object;
        };

        CompoundOrderStructureEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CompoundOrderStructureEntry;
    })();

    WebAPI.PositionStatus = (function() {

        function PositionStatus(properties) {
            this.subscriptionId = [];
            this.openPosition = [];
            this.purchaseAndSalesGroup = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PositionStatus.prototype.subscriptionId = $util.emptyArray;
        PositionStatus.prototype.isSnapshot = false;
        PositionStatus.prototype.accountId = 0;
        PositionStatus.prototype.contractId = 0;
        PositionStatus.prototype.isShortOpenPosition = false;
        PositionStatus.prototype.openPosition = $util.emptyArray;
        PositionStatus.prototype.purchaseAndSalesGroup = $util.emptyArray;
        PositionStatus.prototype.contractMetadata = null;

        PositionStatus.create = function create(properties) {
            return new PositionStatus(properties);
        };

        PositionStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subscriptionId != null && message.subscriptionId.length)
                for (let i = 0; i < message.subscriptionId.length; ++i)
                    writer.uint32(8).uint32(message.subscriptionId[i]);
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                writer.uint32(16).bool(message.isSnapshot);
            writer.uint32(24).sint32(message.accountId);
            writer.uint32(32).uint32(message.contractId);
            writer.uint32(40).bool(message.isShortOpenPosition);
            if (message.openPosition != null && message.openPosition.length)
                for (let i = 0; i < message.openPosition.length; ++i)
                    $root.WebAPI.OpenPosition.encode(message.openPosition[i], writer.uint32(50).fork()).ldelim();
            if (message.purchaseAndSalesGroup != null && message.purchaseAndSalesGroup.length)
                for (let i = 0; i < message.purchaseAndSalesGroup.length; ++i)
                    $root.WebAPI.PurchaseAndSalesGroup.encode(message.purchaseAndSalesGroup[i], writer.uint32(58).fork()).ldelim();
            if (message.contractMetadata != null && message.hasOwnProperty("contractMetadata"))
                $root.WebAPI.ContractMetadata.encode(message.contractMetadata, writer.uint32(66).fork()).ldelim();
            return writer;
        };

        PositionStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PositionStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.PositionStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.subscriptionId && message.subscriptionId.length))
                        message.subscriptionId = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.subscriptionId.push(reader.uint32());
                    } else
                        message.subscriptionId.push(reader.uint32());
                    break;
                case 2:
                    message.isSnapshot = reader.bool();
                    break;
                case 3:
                    message.accountId = reader.sint32();
                    break;
                case 4:
                    message.contractId = reader.uint32();
                    break;
                case 5:
                    message.isShortOpenPosition = reader.bool();
                    break;
                case 6:
                    if (!(message.openPosition && message.openPosition.length))
                        message.openPosition = [];
                    message.openPosition.push($root.WebAPI.OpenPosition.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.purchaseAndSalesGroup && message.purchaseAndSalesGroup.length))
                        message.purchaseAndSalesGroup = [];
                    message.purchaseAndSalesGroup.push($root.WebAPI.PurchaseAndSalesGroup.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.contractMetadata = $root.WebAPI.ContractMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("accountId"))
                throw $util.ProtocolError("missing required 'accountId'", { instance: message });
            if (!message.hasOwnProperty("contractId"))
                throw $util.ProtocolError("missing required 'contractId'", { instance: message });
            if (!message.hasOwnProperty("isShortOpenPosition"))
                throw $util.ProtocolError("missing required 'isShortOpenPosition'", { instance: message });
            return message;
        };

        PositionStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PositionStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId")) {
                if (!Array.isArray(message.subscriptionId))
                    return "subscriptionId: array expected";
                for (let i = 0; i < message.subscriptionId.length; ++i)
                    if (!$util.isInteger(message.subscriptionId[i]))
                        return "subscriptionId: integer[] expected";
            }
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                if (typeof message.isSnapshot !== "boolean")
                    return "isSnapshot: boolean expected";
            if (!$util.isInteger(message.accountId))
                return "accountId: integer expected";
            if (!$util.isInteger(message.contractId))
                return "contractId: integer expected";
            if (typeof message.isShortOpenPosition !== "boolean")
                return "isShortOpenPosition: boolean expected";
            if (message.openPosition != null && message.hasOwnProperty("openPosition")) {
                if (!Array.isArray(message.openPosition))
                    return "openPosition: array expected";
                for (let i = 0; i < message.openPosition.length; ++i) {
                    let error = $root.WebAPI.OpenPosition.verify(message.openPosition[i]);
                    if (error)
                        return "openPosition." + error;
                }
            }
            if (message.purchaseAndSalesGroup != null && message.hasOwnProperty("purchaseAndSalesGroup")) {
                if (!Array.isArray(message.purchaseAndSalesGroup))
                    return "purchaseAndSalesGroup: array expected";
                for (let i = 0; i < message.purchaseAndSalesGroup.length; ++i) {
                    let error = $root.WebAPI.PurchaseAndSalesGroup.verify(message.purchaseAndSalesGroup[i]);
                    if (error)
                        return "purchaseAndSalesGroup." + error;
                }
            }
            if (message.contractMetadata != null && message.hasOwnProperty("contractMetadata")) {
                let error = $root.WebAPI.ContractMetadata.verify(message.contractMetadata);
                if (error)
                    return "contractMetadata." + error;
            }
            return null;
        };

        PositionStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.PositionStatus)
                return object;
            let message = new $root.WebAPI.PositionStatus();
            if (object.subscriptionId) {
                if (!Array.isArray(object.subscriptionId))
                    throw TypeError(".WebAPI.PositionStatus.subscriptionId: array expected");
                message.subscriptionId = [];
                for (let i = 0; i < object.subscriptionId.length; ++i)
                    message.subscriptionId[i] = object.subscriptionId[i] >>> 0;
            }
            if (object.isSnapshot != null)
                message.isSnapshot = Boolean(object.isSnapshot);
            if (object.accountId != null)
                message.accountId = object.accountId | 0;
            if (object.contractId != null)
                message.contractId = object.contractId >>> 0;
            if (object.isShortOpenPosition != null)
                message.isShortOpenPosition = Boolean(object.isShortOpenPosition);
            if (object.openPosition) {
                if (!Array.isArray(object.openPosition))
                    throw TypeError(".WebAPI.PositionStatus.openPosition: array expected");
                message.openPosition = [];
                for (let i = 0; i < object.openPosition.length; ++i) {
                    if (typeof object.openPosition[i] !== "object")
                        throw TypeError(".WebAPI.PositionStatus.openPosition: object expected");
                    message.openPosition[i] = $root.WebAPI.OpenPosition.fromObject(object.openPosition[i]);
                }
            }
            if (object.purchaseAndSalesGroup) {
                if (!Array.isArray(object.purchaseAndSalesGroup))
                    throw TypeError(".WebAPI.PositionStatus.purchaseAndSalesGroup: array expected");
                message.purchaseAndSalesGroup = [];
                for (let i = 0; i < object.purchaseAndSalesGroup.length; ++i) {
                    if (typeof object.purchaseAndSalesGroup[i] !== "object")
                        throw TypeError(".WebAPI.PositionStatus.purchaseAndSalesGroup: object expected");
                    message.purchaseAndSalesGroup[i] = $root.WebAPI.PurchaseAndSalesGroup.fromObject(object.purchaseAndSalesGroup[i]);
                }
            }
            if (object.contractMetadata != null) {
                if (typeof object.contractMetadata !== "object")
                    throw TypeError(".WebAPI.PositionStatus.contractMetadata: object expected");
                message.contractMetadata = $root.WebAPI.ContractMetadata.fromObject(object.contractMetadata);
            }
            return message;
        };

        PositionStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.subscriptionId = [];
                object.openPosition = [];
                object.purchaseAndSalesGroup = [];
            }
            if (options.defaults) {
                object.isSnapshot = false;
                object.accountId = 0;
                object.contractId = 0;
                object.isShortOpenPosition = false;
                object.contractMetadata = null;
            }
            if (message.subscriptionId && message.subscriptionId.length) {
                object.subscriptionId = [];
                for (let j = 0; j < message.subscriptionId.length; ++j)
                    object.subscriptionId[j] = message.subscriptionId[j];
            }
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                object.isSnapshot = message.isSnapshot;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = message.contractId;
            if (message.isShortOpenPosition != null && message.hasOwnProperty("isShortOpenPosition"))
                object.isShortOpenPosition = message.isShortOpenPosition;
            if (message.openPosition && message.openPosition.length) {
                object.openPosition = [];
                for (let j = 0; j < message.openPosition.length; ++j)
                    object.openPosition[j] = $root.WebAPI.OpenPosition.toObject(message.openPosition[j], options);
            }
            if (message.purchaseAndSalesGroup && message.purchaseAndSalesGroup.length) {
                object.purchaseAndSalesGroup = [];
                for (let j = 0; j < message.purchaseAndSalesGroup.length; ++j)
                    object.purchaseAndSalesGroup[j] = $root.WebAPI.PurchaseAndSalesGroup.toObject(message.purchaseAndSalesGroup[j], options);
            }
            if (message.contractMetadata != null && message.hasOwnProperty("contractMetadata"))
                object.contractMetadata = $root.WebAPI.ContractMetadata.toObject(message.contractMetadata, options);
            return object;
        };

        PositionStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PositionStatus;
    })();

    WebAPI.OpenPosition = (function() {

        function OpenPosition(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        OpenPosition.prototype.id = 0;
        OpenPosition.prototype.qty = 0;
        OpenPosition.prototype.price = 0;
        OpenPosition.prototype.tradeDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        OpenPosition.prototype.statementDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        OpenPosition.prototype.tradeUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        OpenPosition.create = function create(properties) {
            return new OpenPosition(properties);
        };

        OpenPosition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).sint32(message.id);
            writer.uint32(16).uint32(message.qty);
            writer.uint32(25).double(message.price);
            writer.uint32(32).sint64(message.tradeDate);
            writer.uint32(40).sint64(message.statementDate);
            if (message.tradeUtcTime != null && message.hasOwnProperty("tradeUtcTime"))
                writer.uint32(48).sint64(message.tradeUtcTime);
            return writer;
        };

        OpenPosition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        OpenPosition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.OpenPosition();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.sint32();
                    break;
                case 2:
                    message.qty = reader.uint32();
                    break;
                case 3:
                    message.price = reader.double();
                    break;
                case 4:
                    message.tradeDate = reader.sint64();
                    break;
                case 5:
                    message.statementDate = reader.sint64();
                    break;
                case 6:
                    message.tradeUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("qty"))
                throw $util.ProtocolError("missing required 'qty'", { instance: message });
            if (!message.hasOwnProperty("price"))
                throw $util.ProtocolError("missing required 'price'", { instance: message });
            if (!message.hasOwnProperty("tradeDate"))
                throw $util.ProtocolError("missing required 'tradeDate'", { instance: message });
            if (!message.hasOwnProperty("statementDate"))
                throw $util.ProtocolError("missing required 'statementDate'", { instance: message });
            return message;
        };

        OpenPosition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        OpenPosition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.qty))
                return "qty: integer expected";
            if (typeof message.price !== "number")
                return "price: number expected";
            if (!$util.isInteger(message.tradeDate) && !(message.tradeDate && $util.isInteger(message.tradeDate.low) && $util.isInteger(message.tradeDate.high)))
                return "tradeDate: integer|Long expected";
            if (!$util.isInteger(message.statementDate) && !(message.statementDate && $util.isInteger(message.statementDate.low) && $util.isInteger(message.statementDate.high)))
                return "statementDate: integer|Long expected";
            if (message.tradeUtcTime != null && message.hasOwnProperty("tradeUtcTime"))
                if (!$util.isInteger(message.tradeUtcTime) && !(message.tradeUtcTime && $util.isInteger(message.tradeUtcTime.low) && $util.isInteger(message.tradeUtcTime.high)))
                    return "tradeUtcTime: integer|Long expected";
            return null;
        };

        OpenPosition.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.OpenPosition)
                return object;
            let message = new $root.WebAPI.OpenPosition();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.qty != null)
                message.qty = object.qty >>> 0;
            if (object.price != null)
                message.price = Number(object.price);
            if (object.tradeDate != null)
                if ($util.Long)
                    (message.tradeDate = $util.Long.fromValue(object.tradeDate)).unsigned = false;
                else if (typeof object.tradeDate === "string")
                    message.tradeDate = parseInt(object.tradeDate, 10);
                else if (typeof object.tradeDate === "number")
                    message.tradeDate = object.tradeDate;
                else if (typeof object.tradeDate === "object")
                    message.tradeDate = new $util.LongBits(object.tradeDate.low >>> 0, object.tradeDate.high >>> 0).toNumber();
            if (object.statementDate != null)
                if ($util.Long)
                    (message.statementDate = $util.Long.fromValue(object.statementDate)).unsigned = false;
                else if (typeof object.statementDate === "string")
                    message.statementDate = parseInt(object.statementDate, 10);
                else if (typeof object.statementDate === "number")
                    message.statementDate = object.statementDate;
                else if (typeof object.statementDate === "object")
                    message.statementDate = new $util.LongBits(object.statementDate.low >>> 0, object.statementDate.high >>> 0).toNumber();
            if (object.tradeUtcTime != null)
                if ($util.Long)
                    (message.tradeUtcTime = $util.Long.fromValue(object.tradeUtcTime)).unsigned = false;
                else if (typeof object.tradeUtcTime === "string")
                    message.tradeUtcTime = parseInt(object.tradeUtcTime, 10);
                else if (typeof object.tradeUtcTime === "number")
                    message.tradeUtcTime = object.tradeUtcTime;
                else if (typeof object.tradeUtcTime === "object")
                    message.tradeUtcTime = new $util.LongBits(object.tradeUtcTime.low >>> 0, object.tradeUtcTime.high >>> 0).toNumber();
            return message;
        };

        OpenPosition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.qty = 0;
                object.price = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.tradeDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tradeDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.statementDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.statementDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.tradeUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tradeUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.qty != null && message.hasOwnProperty("qty"))
                object.qty = message.qty;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.tradeDate != null && message.hasOwnProperty("tradeDate"))
                if (typeof message.tradeDate === "number")
                    object.tradeDate = options.longs === String ? String(message.tradeDate) : message.tradeDate;
                else
                    object.tradeDate = options.longs === String ? $util.Long.prototype.toString.call(message.tradeDate) : options.longs === Number ? new $util.LongBits(message.tradeDate.low >>> 0, message.tradeDate.high >>> 0).toNumber() : message.tradeDate;
            if (message.statementDate != null && message.hasOwnProperty("statementDate"))
                if (typeof message.statementDate === "number")
                    object.statementDate = options.longs === String ? String(message.statementDate) : message.statementDate;
                else
                    object.statementDate = options.longs === String ? $util.Long.prototype.toString.call(message.statementDate) : options.longs === Number ? new $util.LongBits(message.statementDate.low >>> 0, message.statementDate.high >>> 0).toNumber() : message.statementDate;
            if (message.tradeUtcTime != null && message.hasOwnProperty("tradeUtcTime"))
                if (typeof message.tradeUtcTime === "number")
                    object.tradeUtcTime = options.longs === String ? String(message.tradeUtcTime) : message.tradeUtcTime;
                else
                    object.tradeUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.tradeUtcTime) : options.longs === Number ? new $util.LongBits(message.tradeUtcTime.low >>> 0, message.tradeUtcTime.high >>> 0).toNumber() : message.tradeUtcTime;
            return object;
        };

        OpenPosition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OpenPosition;
    })();

    WebAPI.PurchaseAndSalesGroup = (function() {

        function PurchaseAndSalesGroup(properties) {
            this.matchedTrade = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PurchaseAndSalesGroup.prototype.id = 0;
        PurchaseAndSalesGroup.prototype.realizedProfitLoss = 0;
        PurchaseAndSalesGroup.prototype.matchedTrade = $util.emptyArray;

        PurchaseAndSalesGroup.create = function create(properties) {
            return new PurchaseAndSalesGroup(properties);
        };

        PurchaseAndSalesGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).sint32(message.id);
            writer.uint32(17).double(message.realizedProfitLoss);
            if (message.matchedTrade != null && message.matchedTrade.length)
                for (let i = 0; i < message.matchedTrade.length; ++i)
                    $root.WebAPI.MatchedTrade.encode(message.matchedTrade[i], writer.uint32(26).fork()).ldelim();
            return writer;
        };

        PurchaseAndSalesGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PurchaseAndSalesGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.PurchaseAndSalesGroup();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.sint32();
                    break;
                case 2:
                    message.realizedProfitLoss = reader.double();
                    break;
                case 3:
                    if (!(message.matchedTrade && message.matchedTrade.length))
                        message.matchedTrade = [];
                    message.matchedTrade.push($root.WebAPI.MatchedTrade.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("realizedProfitLoss"))
                throw $util.ProtocolError("missing required 'realizedProfitLoss'", { instance: message });
            return message;
        };

        PurchaseAndSalesGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PurchaseAndSalesGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (typeof message.realizedProfitLoss !== "number")
                return "realizedProfitLoss: number expected";
            if (message.matchedTrade != null && message.hasOwnProperty("matchedTrade")) {
                if (!Array.isArray(message.matchedTrade))
                    return "matchedTrade: array expected";
                for (let i = 0; i < message.matchedTrade.length; ++i) {
                    let error = $root.WebAPI.MatchedTrade.verify(message.matchedTrade[i]);
                    if (error)
                        return "matchedTrade." + error;
                }
            }
            return null;
        };

        PurchaseAndSalesGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.PurchaseAndSalesGroup)
                return object;
            let message = new $root.WebAPI.PurchaseAndSalesGroup();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.realizedProfitLoss != null)
                message.realizedProfitLoss = Number(object.realizedProfitLoss);
            if (object.matchedTrade) {
                if (!Array.isArray(object.matchedTrade))
                    throw TypeError(".WebAPI.PurchaseAndSalesGroup.matchedTrade: array expected");
                message.matchedTrade = [];
                for (let i = 0; i < object.matchedTrade.length; ++i) {
                    if (typeof object.matchedTrade[i] !== "object")
                        throw TypeError(".WebAPI.PurchaseAndSalesGroup.matchedTrade: object expected");
                    message.matchedTrade[i] = $root.WebAPI.MatchedTrade.fromObject(object.matchedTrade[i]);
                }
            }
            return message;
        };

        PurchaseAndSalesGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.matchedTrade = [];
            if (options.defaults) {
                object.id = 0;
                object.realizedProfitLoss = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.realizedProfitLoss != null && message.hasOwnProperty("realizedProfitLoss"))
                object.realizedProfitLoss = options.json && !isFinite(message.realizedProfitLoss) ? String(message.realizedProfitLoss) : message.realizedProfitLoss;
            if (message.matchedTrade && message.matchedTrade.length) {
                object.matchedTrade = [];
                for (let j = 0; j < message.matchedTrade.length; ++j)
                    object.matchedTrade[j] = $root.WebAPI.MatchedTrade.toObject(message.matchedTrade[j], options);
            }
            return object;
        };

        PurchaseAndSalesGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PurchaseAndSalesGroup;
    })();

    WebAPI.MatchedTrade = (function() {

        function MatchedTrade(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        MatchedTrade.prototype.qty = 0;
        MatchedTrade.prototype.isShort = false;
        MatchedTrade.prototype.price = 0;
        MatchedTrade.prototype.tradeDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MatchedTrade.prototype.statementDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MatchedTrade.prototype.tradeUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        MatchedTrade.create = function create(properties) {
            return new MatchedTrade(properties);
        };

        MatchedTrade.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.qty);
            if (message.isShort != null && message.hasOwnProperty("isShort"))
                writer.uint32(16).bool(message.isShort);
            writer.uint32(25).double(message.price);
            writer.uint32(32).sint64(message.tradeDate);
            writer.uint32(40).sint64(message.statementDate);
            if (message.tradeUtcTime != null && message.hasOwnProperty("tradeUtcTime"))
                writer.uint32(48).sint64(message.tradeUtcTime);
            return writer;
        };

        MatchedTrade.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        MatchedTrade.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.MatchedTrade();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.qty = reader.uint32();
                    break;
                case 2:
                    message.isShort = reader.bool();
                    break;
                case 3:
                    message.price = reader.double();
                    break;
                case 4:
                    message.tradeDate = reader.sint64();
                    break;
                case 5:
                    message.statementDate = reader.sint64();
                    break;
                case 6:
                    message.tradeUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("qty"))
                throw $util.ProtocolError("missing required 'qty'", { instance: message });
            if (!message.hasOwnProperty("price"))
                throw $util.ProtocolError("missing required 'price'", { instance: message });
            if (!message.hasOwnProperty("tradeDate"))
                throw $util.ProtocolError("missing required 'tradeDate'", { instance: message });
            if (!message.hasOwnProperty("statementDate"))
                throw $util.ProtocolError("missing required 'statementDate'", { instance: message });
            return message;
        };

        MatchedTrade.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        MatchedTrade.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.qty))
                return "qty: integer expected";
            if (message.isShort != null && message.hasOwnProperty("isShort"))
                if (typeof message.isShort !== "boolean")
                    return "isShort: boolean expected";
            if (typeof message.price !== "number")
                return "price: number expected";
            if (!$util.isInteger(message.tradeDate) && !(message.tradeDate && $util.isInteger(message.tradeDate.low) && $util.isInteger(message.tradeDate.high)))
                return "tradeDate: integer|Long expected";
            if (!$util.isInteger(message.statementDate) && !(message.statementDate && $util.isInteger(message.statementDate.low) && $util.isInteger(message.statementDate.high)))
                return "statementDate: integer|Long expected";
            if (message.tradeUtcTime != null && message.hasOwnProperty("tradeUtcTime"))
                if (!$util.isInteger(message.tradeUtcTime) && !(message.tradeUtcTime && $util.isInteger(message.tradeUtcTime.low) && $util.isInteger(message.tradeUtcTime.high)))
                    return "tradeUtcTime: integer|Long expected";
            return null;
        };

        MatchedTrade.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.MatchedTrade)
                return object;
            let message = new $root.WebAPI.MatchedTrade();
            if (object.qty != null)
                message.qty = object.qty >>> 0;
            if (object.isShort != null)
                message.isShort = Boolean(object.isShort);
            if (object.price != null)
                message.price = Number(object.price);
            if (object.tradeDate != null)
                if ($util.Long)
                    (message.tradeDate = $util.Long.fromValue(object.tradeDate)).unsigned = false;
                else if (typeof object.tradeDate === "string")
                    message.tradeDate = parseInt(object.tradeDate, 10);
                else if (typeof object.tradeDate === "number")
                    message.tradeDate = object.tradeDate;
                else if (typeof object.tradeDate === "object")
                    message.tradeDate = new $util.LongBits(object.tradeDate.low >>> 0, object.tradeDate.high >>> 0).toNumber();
            if (object.statementDate != null)
                if ($util.Long)
                    (message.statementDate = $util.Long.fromValue(object.statementDate)).unsigned = false;
                else if (typeof object.statementDate === "string")
                    message.statementDate = parseInt(object.statementDate, 10);
                else if (typeof object.statementDate === "number")
                    message.statementDate = object.statementDate;
                else if (typeof object.statementDate === "object")
                    message.statementDate = new $util.LongBits(object.statementDate.low >>> 0, object.statementDate.high >>> 0).toNumber();
            if (object.tradeUtcTime != null)
                if ($util.Long)
                    (message.tradeUtcTime = $util.Long.fromValue(object.tradeUtcTime)).unsigned = false;
                else if (typeof object.tradeUtcTime === "string")
                    message.tradeUtcTime = parseInt(object.tradeUtcTime, 10);
                else if (typeof object.tradeUtcTime === "number")
                    message.tradeUtcTime = object.tradeUtcTime;
                else if (typeof object.tradeUtcTime === "object")
                    message.tradeUtcTime = new $util.LongBits(object.tradeUtcTime.low >>> 0, object.tradeUtcTime.high >>> 0).toNumber();
            return message;
        };

        MatchedTrade.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.qty = 0;
                object.isShort = false;
                object.price = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.tradeDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tradeDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.statementDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.statementDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.tradeUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tradeUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.qty != null && message.hasOwnProperty("qty"))
                object.qty = message.qty;
            if (message.isShort != null && message.hasOwnProperty("isShort"))
                object.isShort = message.isShort;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.tradeDate != null && message.hasOwnProperty("tradeDate"))
                if (typeof message.tradeDate === "number")
                    object.tradeDate = options.longs === String ? String(message.tradeDate) : message.tradeDate;
                else
                    object.tradeDate = options.longs === String ? $util.Long.prototype.toString.call(message.tradeDate) : options.longs === Number ? new $util.LongBits(message.tradeDate.low >>> 0, message.tradeDate.high >>> 0).toNumber() : message.tradeDate;
            if (message.statementDate != null && message.hasOwnProperty("statementDate"))
                if (typeof message.statementDate === "number")
                    object.statementDate = options.longs === String ? String(message.statementDate) : message.statementDate;
                else
                    object.statementDate = options.longs === String ? $util.Long.prototype.toString.call(message.statementDate) : options.longs === Number ? new $util.LongBits(message.statementDate.low >>> 0, message.statementDate.high >>> 0).toNumber() : message.statementDate;
            if (message.tradeUtcTime != null && message.hasOwnProperty("tradeUtcTime"))
                if (typeof message.tradeUtcTime === "number")
                    object.tradeUtcTime = options.longs === String ? String(message.tradeUtcTime) : message.tradeUtcTime;
                else
                    object.tradeUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.tradeUtcTime) : options.longs === Number ? new $util.LongBits(message.tradeUtcTime.low >>> 0, message.tradeUtcTime.high >>> 0).toNumber() : message.tradeUtcTime;
            return object;
        };

        MatchedTrade.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatchedTrade;
    })();

    WebAPI.CollateralStatus = (function() {

        function CollateralStatus(properties) {
            this.subscriptionId = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CollateralStatus.prototype.subscriptionId = $util.emptyArray;
        CollateralStatus.prototype.isSnapshot = false;
        CollateralStatus.prototype.accountId = 0;
        CollateralStatus.prototype.currency = "";
        CollateralStatus.prototype.totalMargin = 0;
        CollateralStatus.prototype.purchasingPower = 0;
        CollateralStatus.prototype.ote = 0;
        CollateralStatus.prototype.mvo = 0;

        CollateralStatus.create = function create(properties) {
            return new CollateralStatus(properties);
        };

        CollateralStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subscriptionId != null && message.subscriptionId.length)
                for (let i = 0; i < message.subscriptionId.length; ++i)
                    writer.uint32(8).uint32(message.subscriptionId[i]);
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                writer.uint32(16).bool(message.isSnapshot);
            writer.uint32(24).sint32(message.accountId);
            writer.uint32(34).string(message.currency);
            writer.uint32(41).double(message.totalMargin);
            writer.uint32(49).double(message.purchasingPower);
            if (message.ote != null && message.hasOwnProperty("ote"))
                writer.uint32(57).double(message.ote);
            if (message.mvo != null && message.hasOwnProperty("mvo"))
                writer.uint32(65).double(message.mvo);
            return writer;
        };

        CollateralStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CollateralStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.CollateralStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.subscriptionId && message.subscriptionId.length))
                        message.subscriptionId = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.subscriptionId.push(reader.uint32());
                    } else
                        message.subscriptionId.push(reader.uint32());
                    break;
                case 2:
                    message.isSnapshot = reader.bool();
                    break;
                case 3:
                    message.accountId = reader.sint32();
                    break;
                case 4:
                    message.currency = reader.string();
                    break;
                case 5:
                    message.totalMargin = reader.double();
                    break;
                case 6:
                    message.purchasingPower = reader.double();
                    break;
                case 7:
                    message.ote = reader.double();
                    break;
                case 8:
                    message.mvo = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("accountId"))
                throw $util.ProtocolError("missing required 'accountId'", { instance: message });
            if (!message.hasOwnProperty("currency"))
                throw $util.ProtocolError("missing required 'currency'", { instance: message });
            if (!message.hasOwnProperty("totalMargin"))
                throw $util.ProtocolError("missing required 'totalMargin'", { instance: message });
            if (!message.hasOwnProperty("purchasingPower"))
                throw $util.ProtocolError("missing required 'purchasingPower'", { instance: message });
            return message;
        };

        CollateralStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CollateralStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId")) {
                if (!Array.isArray(message.subscriptionId))
                    return "subscriptionId: array expected";
                for (let i = 0; i < message.subscriptionId.length; ++i)
                    if (!$util.isInteger(message.subscriptionId[i]))
                        return "subscriptionId: integer[] expected";
            }
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                if (typeof message.isSnapshot !== "boolean")
                    return "isSnapshot: boolean expected";
            if (!$util.isInteger(message.accountId))
                return "accountId: integer expected";
            if (!$util.isString(message.currency))
                return "currency: string expected";
            if (typeof message.totalMargin !== "number")
                return "totalMargin: number expected";
            if (typeof message.purchasingPower !== "number")
                return "purchasingPower: number expected";
            if (message.ote != null && message.hasOwnProperty("ote"))
                if (typeof message.ote !== "number")
                    return "ote: number expected";
            if (message.mvo != null && message.hasOwnProperty("mvo"))
                if (typeof message.mvo !== "number")
                    return "mvo: number expected";
            return null;
        };

        CollateralStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.CollateralStatus)
                return object;
            let message = new $root.WebAPI.CollateralStatus();
            if (object.subscriptionId) {
                if (!Array.isArray(object.subscriptionId))
                    throw TypeError(".WebAPI.CollateralStatus.subscriptionId: array expected");
                message.subscriptionId = [];
                for (let i = 0; i < object.subscriptionId.length; ++i)
                    message.subscriptionId[i] = object.subscriptionId[i] >>> 0;
            }
            if (object.isSnapshot != null)
                message.isSnapshot = Boolean(object.isSnapshot);
            if (object.accountId != null)
                message.accountId = object.accountId | 0;
            if (object.currency != null)
                message.currency = String(object.currency);
            if (object.totalMargin != null)
                message.totalMargin = Number(object.totalMargin);
            if (object.purchasingPower != null)
                message.purchasingPower = Number(object.purchasingPower);
            if (object.ote != null)
                message.ote = Number(object.ote);
            if (object.mvo != null)
                message.mvo = Number(object.mvo);
            return message;
        };

        CollateralStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.subscriptionId = [];
            if (options.defaults) {
                object.isSnapshot = false;
                object.accountId = 0;
                object.currency = "";
                object.totalMargin = 0;
                object.purchasingPower = 0;
                object.ote = 0;
                object.mvo = 0;
            }
            if (message.subscriptionId && message.subscriptionId.length) {
                object.subscriptionId = [];
                for (let j = 0; j < message.subscriptionId.length; ++j)
                    object.subscriptionId[j] = message.subscriptionId[j];
            }
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                object.isSnapshot = message.isSnapshot;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = message.accountId;
            if (message.currency != null && message.hasOwnProperty("currency"))
                object.currency = message.currency;
            if (message.totalMargin != null && message.hasOwnProperty("totalMargin"))
                object.totalMargin = options.json && !isFinite(message.totalMargin) ? String(message.totalMargin) : message.totalMargin;
            if (message.purchasingPower != null && message.hasOwnProperty("purchasingPower"))
                object.purchasingPower = options.json && !isFinite(message.purchasingPower) ? String(message.purchasingPower) : message.purchasingPower;
            if (message.ote != null && message.hasOwnProperty("ote"))
                object.ote = options.json && !isFinite(message.ote) ? String(message.ote) : message.ote;
            if (message.mvo != null && message.hasOwnProperty("mvo"))
                object.mvo = options.json && !isFinite(message.mvo) ? String(message.mvo) : message.mvo;
            return object;
        };

        CollateralStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CollateralStatus;
    })();

    WebAPI.MarketDataSubscription = (function() {

        function MarketDataSubscription(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        MarketDataSubscription.prototype.contractId = 0;
        MarketDataSubscription.prototype.level = 0;

        MarketDataSubscription.create = function create(properties) {
            return new MarketDataSubscription(properties);
        };

        MarketDataSubscription.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.contractId);
            writer.uint32(16).uint32(message.level);
            return writer;
        };

        MarketDataSubscription.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        MarketDataSubscription.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.MarketDataSubscription();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contractId = reader.uint32();
                    break;
                case 2:
                    message.level = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("contractId"))
                throw $util.ProtocolError("missing required 'contractId'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            return message;
        };

        MarketDataSubscription.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        MarketDataSubscription.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.contractId))
                return "contractId: integer expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            return null;
        };

        MarketDataSubscription.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.MarketDataSubscription)
                return object;
            let message = new $root.WebAPI.MarketDataSubscription();
            if (object.contractId != null)
                message.contractId = object.contractId >>> 0;
            if (object.level != null)
                message.level = object.level >>> 0;
            return message;
        };

        MarketDataSubscription.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.contractId = 0;
                object.level = 0;
            }
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = message.contractId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            return object;
        };

        MarketDataSubscription.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MarketDataSubscription.Level = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "TRADES"] = 1;
            values[valuesById[2] = "TRADES_BBA"] = 2;
            values[valuesById[3] = "TRADES_BBA_VOLUMES"] = 3;
            values[valuesById[4] = "TRADES_BBA_DOM"] = 4;
            return values;
        })();

        return MarketDataSubscription;
    })();

    WebAPI.MarketDataSubscriptionStatus = (function() {

        function MarketDataSubscriptionStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        MarketDataSubscriptionStatus.prototype.contractId = 0;
        MarketDataSubscriptionStatus.prototype.statusCode = 0;
        MarketDataSubscriptionStatus.prototype.level = 0;
        MarketDataSubscriptionStatus.prototype.textMessage = "";

        MarketDataSubscriptionStatus.create = function create(properties) {
            return new MarketDataSubscriptionStatus(properties);
        };

        MarketDataSubscriptionStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.contractId);
            writer.uint32(16).uint32(message.statusCode);
            writer.uint32(24).uint32(message.level);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(34).string(message.textMessage);
            return writer;
        };

        MarketDataSubscriptionStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        MarketDataSubscriptionStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.MarketDataSubscriptionStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contractId = reader.uint32();
                    break;
                case 2:
                    message.statusCode = reader.uint32();
                    break;
                case 3:
                    message.level = reader.uint32();
                    break;
                case 4:
                    message.textMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("contractId"))
                throw $util.ProtocolError("missing required 'contractId'", { instance: message });
            if (!message.hasOwnProperty("statusCode"))
                throw $util.ProtocolError("missing required 'statusCode'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            return message;
        };

        MarketDataSubscriptionStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        MarketDataSubscriptionStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.contractId))
                return "contractId: integer expected";
            if (!$util.isInteger(message.statusCode))
                return "statusCode: integer expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            return null;
        };

        MarketDataSubscriptionStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.MarketDataSubscriptionStatus)
                return object;
            let message = new $root.WebAPI.MarketDataSubscriptionStatus();
            if (object.contractId != null)
                message.contractId = object.contractId >>> 0;
            if (object.statusCode != null)
                message.statusCode = object.statusCode >>> 0;
            if (object.level != null)
                message.level = object.level >>> 0;
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            return message;
        };

        MarketDataSubscriptionStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.contractId = 0;
                object.statusCode = 0;
                object.level = 0;
                object.textMessage = "";
            }
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = message.contractId;
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            return object;
        };

        MarketDataSubscriptionStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MarketDataSubscriptionStatus.StatusCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[1] = "DISCONNECTED"] = 1;
            values[valuesById[101] = "FAILURE"] = 101;
            values[valuesById[102] = "INVALID_PARAMS"] = 102;
            values[valuesById[103] = "ACCESS_DENIED"] = 103;
            values[valuesById[104] = "DELETED"] = 104;
            return values;
        })();

        return MarketDataSubscriptionStatus;
    })();

    WebAPI.RealTimeMarketData = (function() {

        function RealTimeMarketData(properties) {
            this.quote = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RealTimeMarketData.prototype.contractId = 0;
        RealTimeMarketData.prototype.quote = $util.emptyArray;
        RealTimeMarketData.prototype.isSnapshot = false;
        RealTimeMarketData.prototype.collapsingLevel = 0;
        RealTimeMarketData.prototype.marketValues = null;

        RealTimeMarketData.create = function create(properties) {
            return new RealTimeMarketData(properties);
        };

        RealTimeMarketData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.contractId);
            if (message.quote != null && message.quote.length)
                for (let i = 0; i < message.quote.length; ++i)
                    $root.WebAPI.Quote.encode(message.quote[i], writer.uint32(18).fork()).ldelim();
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                writer.uint32(24).bool(message.isSnapshot);
            if (message.collapsingLevel != null && message.hasOwnProperty("collapsingLevel"))
                writer.uint32(32).uint32(message.collapsingLevel);
            if (message.marketValues != null && message.hasOwnProperty("marketValues"))
                $root.WebAPI.MarketValues.encode(message.marketValues, writer.uint32(42).fork()).ldelim();
            return writer;
        };

        RealTimeMarketData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RealTimeMarketData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.RealTimeMarketData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contractId = reader.uint32();
                    break;
                case 2:
                    if (!(message.quote && message.quote.length))
                        message.quote = [];
                    message.quote.push($root.WebAPI.Quote.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.isSnapshot = reader.bool();
                    break;
                case 4:
                    message.collapsingLevel = reader.uint32();
                    break;
                case 5:
                    message.marketValues = $root.WebAPI.MarketValues.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("contractId"))
                throw $util.ProtocolError("missing required 'contractId'", { instance: message });
            return message;
        };

        RealTimeMarketData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RealTimeMarketData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.contractId))
                return "contractId: integer expected";
            if (message.quote != null && message.hasOwnProperty("quote")) {
                if (!Array.isArray(message.quote))
                    return "quote: array expected";
                for (let i = 0; i < message.quote.length; ++i) {
                    let error = $root.WebAPI.Quote.verify(message.quote[i]);
                    if (error)
                        return "quote." + error;
                }
            }
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                if (typeof message.isSnapshot !== "boolean")
                    return "isSnapshot: boolean expected";
            if (message.collapsingLevel != null && message.hasOwnProperty("collapsingLevel"))
                if (!$util.isInteger(message.collapsingLevel))
                    return "collapsingLevel: integer expected";
            if (message.marketValues != null && message.hasOwnProperty("marketValues")) {
                let error = $root.WebAPI.MarketValues.verify(message.marketValues);
                if (error)
                    return "marketValues." + error;
            }
            return null;
        };

        RealTimeMarketData.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.RealTimeMarketData)
                return object;
            let message = new $root.WebAPI.RealTimeMarketData();
            if (object.contractId != null)
                message.contractId = object.contractId >>> 0;
            if (object.quote) {
                if (!Array.isArray(object.quote))
                    throw TypeError(".WebAPI.RealTimeMarketData.quote: array expected");
                message.quote = [];
                for (let i = 0; i < object.quote.length; ++i) {
                    if (typeof object.quote[i] !== "object")
                        throw TypeError(".WebAPI.RealTimeMarketData.quote: object expected");
                    message.quote[i] = $root.WebAPI.Quote.fromObject(object.quote[i]);
                }
            }
            if (object.isSnapshot != null)
                message.isSnapshot = Boolean(object.isSnapshot);
            if (object.collapsingLevel != null)
                message.collapsingLevel = object.collapsingLevel >>> 0;
            if (object.marketValues != null) {
                if (typeof object.marketValues !== "object")
                    throw TypeError(".WebAPI.RealTimeMarketData.marketValues: object expected");
                message.marketValues = $root.WebAPI.MarketValues.fromObject(object.marketValues);
            }
            return message;
        };

        RealTimeMarketData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.quote = [];
            if (options.defaults) {
                object.contractId = 0;
                object.isSnapshot = false;
                object.collapsingLevel = 0;
                object.marketValues = null;
            }
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = message.contractId;
            if (message.quote && message.quote.length) {
                object.quote = [];
                for (let j = 0; j < message.quote.length; ++j)
                    object.quote[j] = $root.WebAPI.Quote.toObject(message.quote[j], options);
            }
            if (message.isSnapshot != null && message.hasOwnProperty("isSnapshot"))
                object.isSnapshot = message.isSnapshot;
            if (message.collapsingLevel != null && message.hasOwnProperty("collapsingLevel"))
                object.collapsingLevel = message.collapsingLevel;
            if (message.marketValues != null && message.hasOwnProperty("marketValues"))
                object.marketValues = $root.WebAPI.MarketValues.toObject(message.marketValues, options);
            return object;
        };

        RealTimeMarketData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RealTimeMarketData;
    })();

    WebAPI.Quote = (function() {

        function Quote(properties) {
            this.sessionOhlcIndicator = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Quote.prototype.type = 0;
        Quote.prototype.quoteUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Quote.prototype.price = 0;
        Quote.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        Quote.prototype.sessionOhlcIndicator = $util.emptyArray;
        Quote.prototype.accruedint = 0;

        Quote.create = function create(properties) {
            return new Quote(properties);
        };

        Quote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.type);
            if (message.quoteUtcTime != null && message.hasOwnProperty("quoteUtcTime"))
                writer.uint32(16).sint64(message.quoteUtcTime);
            writer.uint32(24).sint32(message.price);
            if (message.volume != null && message.hasOwnProperty("volume"))
                writer.uint32(32).uint64(message.volume);
            if (message.sessionOhlcIndicator != null && message.sessionOhlcIndicator.length)
                for (let i = 0; i < message.sessionOhlcIndicator.length; ++i)
                    writer.uint32(40).uint32(message.sessionOhlcIndicator[i]);
            if (message.accruedint != null && message.hasOwnProperty("accruedint"))
                writer.uint32(49).double(message.accruedint);
            return writer;
        };

        Quote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Quote.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.Quote();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.uint32();
                    break;
                case 2:
                    message.quoteUtcTime = reader.sint64();
                    break;
                case 3:
                    message.price = reader.sint32();
                    break;
                case 4:
                    message.volume = reader.uint64();
                    break;
                case 5:
                    if (!(message.sessionOhlcIndicator && message.sessionOhlcIndicator.length))
                        message.sessionOhlcIndicator = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.sessionOhlcIndicator.push(reader.uint32());
                    } else
                        message.sessionOhlcIndicator.push(reader.uint32());
                    break;
                case 6:
                    message.accruedint = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("price"))
                throw $util.ProtocolError("missing required 'price'", { instance: message });
            return message;
        };

        Quote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Quote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (message.quoteUtcTime != null && message.hasOwnProperty("quoteUtcTime"))
                if (!$util.isInteger(message.quoteUtcTime) && !(message.quoteUtcTime && $util.isInteger(message.quoteUtcTime.low) && $util.isInteger(message.quoteUtcTime.high)))
                    return "quoteUtcTime: integer|Long expected";
            if (!$util.isInteger(message.price))
                return "price: integer expected";
            if (message.volume != null && message.hasOwnProperty("volume"))
                if (!$util.isInteger(message.volume) && !(message.volume && $util.isInteger(message.volume.low) && $util.isInteger(message.volume.high)))
                    return "volume: integer|Long expected";
            if (message.sessionOhlcIndicator != null && message.hasOwnProperty("sessionOhlcIndicator")) {
                if (!Array.isArray(message.sessionOhlcIndicator))
                    return "sessionOhlcIndicator: array expected";
                for (let i = 0; i < message.sessionOhlcIndicator.length; ++i)
                    if (!$util.isInteger(message.sessionOhlcIndicator[i]))
                        return "sessionOhlcIndicator: integer[] expected";
            }
            if (message.accruedint != null && message.hasOwnProperty("accruedint"))
                if (typeof message.accruedint !== "number")
                    return "accruedint: number expected";
            return null;
        };

        Quote.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.Quote)
                return object;
            let message = new $root.WebAPI.Quote();
            if (object.type != null)
                message.type = object.type >>> 0;
            if (object.quoteUtcTime != null)
                if ($util.Long)
                    (message.quoteUtcTime = $util.Long.fromValue(object.quoteUtcTime)).unsigned = false;
                else if (typeof object.quoteUtcTime === "string")
                    message.quoteUtcTime = parseInt(object.quoteUtcTime, 10);
                else if (typeof object.quoteUtcTime === "number")
                    message.quoteUtcTime = object.quoteUtcTime;
                else if (typeof object.quoteUtcTime === "object")
                    message.quoteUtcTime = new $util.LongBits(object.quoteUtcTime.low >>> 0, object.quoteUtcTime.high >>> 0).toNumber();
            if (object.price != null)
                message.price = object.price | 0;
            if (object.volume != null)
                if ($util.Long)
                    (message.volume = $util.Long.fromValue(object.volume)).unsigned = true;
                else if (typeof object.volume === "string")
                    message.volume = parseInt(object.volume, 10);
                else if (typeof object.volume === "number")
                    message.volume = object.volume;
                else if (typeof object.volume === "object")
                    message.volume = new $util.LongBits(object.volume.low >>> 0, object.volume.high >>> 0).toNumber(true);
            if (object.sessionOhlcIndicator) {
                if (!Array.isArray(object.sessionOhlcIndicator))
                    throw TypeError(".WebAPI.Quote.sessionOhlcIndicator: array expected");
                message.sessionOhlcIndicator = [];
                for (let i = 0; i < object.sessionOhlcIndicator.length; ++i)
                    message.sessionOhlcIndicator[i] = object.sessionOhlcIndicator[i] >>> 0;
            }
            if (object.accruedint != null)
                message.accruedint = Number(object.accruedint);
            return message;
        };

        Quote.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.sessionOhlcIndicator = [];
            if (options.defaults) {
                object.type = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.quoteUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.quoteUtcTime = options.longs === String ? "0" : 0;
                object.price = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.volume = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.volume = options.longs === String ? "0" : 0;
                object.accruedint = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.quoteUtcTime != null && message.hasOwnProperty("quoteUtcTime"))
                if (typeof message.quoteUtcTime === "number")
                    object.quoteUtcTime = options.longs === String ? String(message.quoteUtcTime) : message.quoteUtcTime;
                else
                    object.quoteUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.quoteUtcTime) : options.longs === Number ? new $util.LongBits(message.quoteUtcTime.low >>> 0, message.quoteUtcTime.high >>> 0).toNumber() : message.quoteUtcTime;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = message.price;
            if (message.volume != null && message.hasOwnProperty("volume"))
                if (typeof message.volume === "number")
                    object.volume = options.longs === String ? String(message.volume) : message.volume;
                else
                    object.volume = options.longs === String ? $util.Long.prototype.toString.call(message.volume) : options.longs === Number ? new $util.LongBits(message.volume.low >>> 0, message.volume.high >>> 0).toNumber(true) : message.volume;
            if (message.sessionOhlcIndicator && message.sessionOhlcIndicator.length) {
                object.sessionOhlcIndicator = [];
                for (let j = 0; j < message.sessionOhlcIndicator.length; ++j)
                    object.sessionOhlcIndicator[j] = message.sessionOhlcIndicator[j];
            }
            if (message.accruedint != null && message.hasOwnProperty("accruedint"))
                object.accruedint = options.json && !isFinite(message.accruedint) ? String(message.accruedint) : message.accruedint;
            return object;
        };

        Quote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Quote.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TRADE"] = 0;
            values[valuesById[1] = "BESTBID"] = 1;
            values[valuesById[2] = "BESTASK"] = 2;
            values[valuesById[3] = "BID"] = 3;
            values[valuesById[4] = "ASK"] = 4;
            values[valuesById[5] = "SETTLEMENT"] = 5;
            return values;
        })();

        Quote.SessionOhlcIndicator = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "OPEN"] = 1;
            values[valuesById[2] = "HIGH"] = 2;
            values[valuesById[3] = "LOW"] = 3;
            values[valuesById[4] = "CLOSE"] = 4;
            return values;
        })();

        return Quote;
    })();

    WebAPI.MarketValues = (function() {

        function MarketValues(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        MarketValues.prototype.openPrice = 0;
        MarketValues.prototype.highPrice = 0;
        MarketValues.prototype.lowPrice = 0;
        MarketValues.prototype.closePrice = 0;
        MarketValues.prototype.yesterdaySettlement = 0;
        MarketValues.prototype.totalVolume = 0;
        MarketValues.prototype.yesterdayClose = 0;
        MarketValues.prototype.indicativeOpen = 0;
        MarketValues.prototype.marginBuy = 0;
        MarketValues.prototype.marginSell = 0;

        MarketValues.create = function create(properties) {
            return new MarketValues(properties);
        };

        MarketValues.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openPrice != null && message.hasOwnProperty("openPrice"))
                writer.uint32(8).sint32(message.openPrice);
            if (message.highPrice != null && message.hasOwnProperty("highPrice"))
                writer.uint32(16).sint32(message.highPrice);
            if (message.lowPrice != null && message.hasOwnProperty("lowPrice"))
                writer.uint32(24).sint32(message.lowPrice);
            if (message.closePrice != null && message.hasOwnProperty("closePrice"))
                writer.uint32(32).sint32(message.closePrice);
            if (message.yesterdaySettlement != null && message.hasOwnProperty("yesterdaySettlement"))
                writer.uint32(40).sint32(message.yesterdaySettlement);
            if (message.totalVolume != null && message.hasOwnProperty("totalVolume"))
                writer.uint32(48).uint32(message.totalVolume);
            if (message.yesterdayClose != null && message.hasOwnProperty("yesterdayClose"))
                writer.uint32(56).sint32(message.yesterdayClose);
            if (message.indicativeOpen != null && message.hasOwnProperty("indicativeOpen"))
                writer.uint32(64).sint32(message.indicativeOpen);
            if (message.marginBuy != null && message.hasOwnProperty("marginBuy"))
                writer.uint32(73).double(message.marginBuy);
            if (message.marginSell != null && message.hasOwnProperty("marginSell"))
                writer.uint32(81).double(message.marginSell);
            return writer;
        };

        MarketValues.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        MarketValues.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.MarketValues();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.openPrice = reader.sint32();
                    break;
                case 2:
                    message.highPrice = reader.sint32();
                    break;
                case 3:
                    message.lowPrice = reader.sint32();
                    break;
                case 4:
                    message.closePrice = reader.sint32();
                    break;
                case 5:
                    message.yesterdaySettlement = reader.sint32();
                    break;
                case 6:
                    message.totalVolume = reader.uint32();
                    break;
                case 7:
                    message.yesterdayClose = reader.sint32();
                    break;
                case 8:
                    message.indicativeOpen = reader.sint32();
                    break;
                case 9:
                    message.marginBuy = reader.double();
                    break;
                case 10:
                    message.marginSell = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        MarketValues.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        MarketValues.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openPrice != null && message.hasOwnProperty("openPrice"))
                if (!$util.isInteger(message.openPrice))
                    return "openPrice: integer expected";
            if (message.highPrice != null && message.hasOwnProperty("highPrice"))
                if (!$util.isInteger(message.highPrice))
                    return "highPrice: integer expected";
            if (message.lowPrice != null && message.hasOwnProperty("lowPrice"))
                if (!$util.isInteger(message.lowPrice))
                    return "lowPrice: integer expected";
            if (message.closePrice != null && message.hasOwnProperty("closePrice"))
                if (!$util.isInteger(message.closePrice))
                    return "closePrice: integer expected";
            if (message.yesterdaySettlement != null && message.hasOwnProperty("yesterdaySettlement"))
                if (!$util.isInteger(message.yesterdaySettlement))
                    return "yesterdaySettlement: integer expected";
            if (message.totalVolume != null && message.hasOwnProperty("totalVolume"))
                if (!$util.isInteger(message.totalVolume))
                    return "totalVolume: integer expected";
            if (message.yesterdayClose != null && message.hasOwnProperty("yesterdayClose"))
                if (!$util.isInteger(message.yesterdayClose))
                    return "yesterdayClose: integer expected";
            if (message.indicativeOpen != null && message.hasOwnProperty("indicativeOpen"))
                if (!$util.isInteger(message.indicativeOpen))
                    return "indicativeOpen: integer expected";
            if (message.marginBuy != null && message.hasOwnProperty("marginBuy"))
                if (typeof message.marginBuy !== "number")
                    return "marginBuy: number expected";
            if (message.marginSell != null && message.hasOwnProperty("marginSell"))
                if (typeof message.marginSell !== "number")
                    return "marginSell: number expected";
            return null;
        };

        MarketValues.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.MarketValues)
                return object;
            let message = new $root.WebAPI.MarketValues();
            if (object.openPrice != null)
                message.openPrice = object.openPrice | 0;
            if (object.highPrice != null)
                message.highPrice = object.highPrice | 0;
            if (object.lowPrice != null)
                message.lowPrice = object.lowPrice | 0;
            if (object.closePrice != null)
                message.closePrice = object.closePrice | 0;
            if (object.yesterdaySettlement != null)
                message.yesterdaySettlement = object.yesterdaySettlement | 0;
            if (object.totalVolume != null)
                message.totalVolume = object.totalVolume >>> 0;
            if (object.yesterdayClose != null)
                message.yesterdayClose = object.yesterdayClose | 0;
            if (object.indicativeOpen != null)
                message.indicativeOpen = object.indicativeOpen | 0;
            if (object.marginBuy != null)
                message.marginBuy = Number(object.marginBuy);
            if (object.marginSell != null)
                message.marginSell = Number(object.marginSell);
            return message;
        };

        MarketValues.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.openPrice = 0;
                object.highPrice = 0;
                object.lowPrice = 0;
                object.closePrice = 0;
                object.yesterdaySettlement = 0;
                object.totalVolume = 0;
                object.yesterdayClose = 0;
                object.indicativeOpen = 0;
                object.marginBuy = 0;
                object.marginSell = 0;
            }
            if (message.openPrice != null && message.hasOwnProperty("openPrice"))
                object.openPrice = message.openPrice;
            if (message.highPrice != null && message.hasOwnProperty("highPrice"))
                object.highPrice = message.highPrice;
            if (message.lowPrice != null && message.hasOwnProperty("lowPrice"))
                object.lowPrice = message.lowPrice;
            if (message.closePrice != null && message.hasOwnProperty("closePrice"))
                object.closePrice = message.closePrice;
            if (message.yesterdaySettlement != null && message.hasOwnProperty("yesterdaySettlement"))
                object.yesterdaySettlement = message.yesterdaySettlement;
            if (message.totalVolume != null && message.hasOwnProperty("totalVolume"))
                object.totalVolume = message.totalVolume;
            if (message.yesterdayClose != null && message.hasOwnProperty("yesterdayClose"))
                object.yesterdayClose = message.yesterdayClose;
            if (message.indicativeOpen != null && message.hasOwnProperty("indicativeOpen"))
                object.indicativeOpen = message.indicativeOpen;
            if (message.marginBuy != null && message.hasOwnProperty("marginBuy"))
                object.marginBuy = options.json && !isFinite(message.marginBuy) ? String(message.marginBuy) : message.marginBuy;
            if (message.marginSell != null && message.hasOwnProperty("marginSell"))
                object.marginSell = options.json && !isFinite(message.marginSell) ? String(message.marginSell) : message.marginSell;
            return object;
        };

        MarketValues.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MarketValues;
    })();

    WebAPI.ReadUserAttributeRequest = (function() {

        function ReadUserAttributeRequest(properties) {
            this.attributeName = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReadUserAttributeRequest.prototype.requestId = 0;
        ReadUserAttributeRequest.prototype.attributeName = $util.emptyArray;

        ReadUserAttributeRequest.create = function create(properties) {
            return new ReadUserAttributeRequest(properties);
        };

        ReadUserAttributeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            if (message.attributeName != null && message.attributeName.length)
                for (let i = 0; i < message.attributeName.length; ++i)
                    writer.uint32(18).string(message.attributeName[i]);
            return writer;
        };

        ReadUserAttributeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReadUserAttributeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ReadUserAttributeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    if (!(message.attributeName && message.attributeName.length))
                        message.attributeName = [];
                    message.attributeName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            return message;
        };

        ReadUserAttributeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReadUserAttributeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (message.attributeName != null && message.hasOwnProperty("attributeName")) {
                if (!Array.isArray(message.attributeName))
                    return "attributeName: array expected";
                for (let i = 0; i < message.attributeName.length; ++i)
                    if (!$util.isString(message.attributeName[i]))
                        return "attributeName: string[] expected";
            }
            return null;
        };

        ReadUserAttributeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ReadUserAttributeRequest)
                return object;
            let message = new $root.WebAPI.ReadUserAttributeRequest();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.attributeName) {
                if (!Array.isArray(object.attributeName))
                    throw TypeError(".WebAPI.ReadUserAttributeRequest.attributeName: array expected");
                message.attributeName = [];
                for (let i = 0; i < object.attributeName.length; ++i)
                    message.attributeName[i] = String(object.attributeName[i]);
            }
            return message;
        };

        ReadUserAttributeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.attributeName = [];
            if (options.defaults)
                object.requestId = 0;
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.attributeName && message.attributeName.length) {
                object.attributeName = [];
                for (let j = 0; j < message.attributeName.length; ++j)
                    object.attributeName[j] = message.attributeName[j];
            }
            return object;
        };

        ReadUserAttributeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadUserAttributeRequest;
    })();

    WebAPI.ReadUserAttributeResult = (function() {

        function ReadUserAttributeResult(properties) {
            this.userAttribute = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReadUserAttributeResult.prototype.requestId = 0;
        ReadUserAttributeResult.prototype.resultCode = 0;
        ReadUserAttributeResult.prototype.userAttribute = $util.emptyArray;
        ReadUserAttributeResult.prototype.textMessage = "";

        ReadUserAttributeResult.create = function create(properties) {
            return new ReadUserAttributeResult(properties);
        };

        ReadUserAttributeResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            writer.uint32(16).uint32(message.resultCode);
            if (message.userAttribute != null && message.userAttribute.length)
                for (let i = 0; i < message.userAttribute.length; ++i)
                    $root.WebAPI.UserAttribute.encode(message.userAttribute[i], writer.uint32(26).fork()).ldelim();
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(34).string(message.textMessage);
            return writer;
        };

        ReadUserAttributeResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReadUserAttributeResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ReadUserAttributeResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.resultCode = reader.uint32();
                    break;
                case 3:
                    if (!(message.userAttribute && message.userAttribute.length))
                        message.userAttribute = [];
                    message.userAttribute.push($root.WebAPI.UserAttribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.textMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            if (!message.hasOwnProperty("resultCode"))
                throw $util.ProtocolError("missing required 'resultCode'", { instance: message });
            return message;
        };

        ReadUserAttributeResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReadUserAttributeResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (!$util.isInteger(message.resultCode))
                return "resultCode: integer expected";
            if (message.userAttribute != null && message.hasOwnProperty("userAttribute")) {
                if (!Array.isArray(message.userAttribute))
                    return "userAttribute: array expected";
                for (let i = 0; i < message.userAttribute.length; ++i) {
                    let error = $root.WebAPI.UserAttribute.verify(message.userAttribute[i]);
                    if (error)
                        return "userAttribute." + error;
                }
            }
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            return null;
        };

        ReadUserAttributeResult.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ReadUserAttributeResult)
                return object;
            let message = new $root.WebAPI.ReadUserAttributeResult();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.resultCode != null)
                message.resultCode = object.resultCode >>> 0;
            if (object.userAttribute) {
                if (!Array.isArray(object.userAttribute))
                    throw TypeError(".WebAPI.ReadUserAttributeResult.userAttribute: array expected");
                message.userAttribute = [];
                for (let i = 0; i < object.userAttribute.length; ++i) {
                    if (typeof object.userAttribute[i] !== "object")
                        throw TypeError(".WebAPI.ReadUserAttributeResult.userAttribute: object expected");
                    message.userAttribute[i] = $root.WebAPI.UserAttribute.fromObject(object.userAttribute[i]);
                }
            }
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            return message;
        };

        ReadUserAttributeResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.userAttribute = [];
            if (options.defaults) {
                object.requestId = 0;
                object.resultCode = 0;
                object.textMessage = "";
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                object.resultCode = message.resultCode;
            if (message.userAttribute && message.userAttribute.length) {
                object.userAttribute = [];
                for (let j = 0; j < message.userAttribute.length; ++j)
                    object.userAttribute[j] = $root.WebAPI.UserAttribute.toObject(message.userAttribute[j], options);
            }
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            return object;
        };

        ReadUserAttributeResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ReadUserAttributeResult.ResultCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[101] = "FAILURE"] = 101;
            return values;
        })();

        return ReadUserAttributeResult;
    })();

    WebAPI.ModifyUserAttributeRequest = (function() {

        function ModifyUserAttributeRequest(properties) {
            this.userAttribute = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ModifyUserAttributeRequest.prototype.requestId = 0;
        ModifyUserAttributeRequest.prototype.userAttribute = $util.emptyArray;

        ModifyUserAttributeRequest.create = function create(properties) {
            return new ModifyUserAttributeRequest(properties);
        };

        ModifyUserAttributeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            if (message.userAttribute != null && message.userAttribute.length)
                for (let i = 0; i < message.userAttribute.length; ++i)
                    $root.WebAPI.UserAttribute.encode(message.userAttribute[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };

        ModifyUserAttributeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ModifyUserAttributeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ModifyUserAttributeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    if (!(message.userAttribute && message.userAttribute.length))
                        message.userAttribute = [];
                    message.userAttribute.push($root.WebAPI.UserAttribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            return message;
        };

        ModifyUserAttributeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ModifyUserAttributeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (message.userAttribute != null && message.hasOwnProperty("userAttribute")) {
                if (!Array.isArray(message.userAttribute))
                    return "userAttribute: array expected";
                for (let i = 0; i < message.userAttribute.length; ++i) {
                    let error = $root.WebAPI.UserAttribute.verify(message.userAttribute[i]);
                    if (error)
                        return "userAttribute." + error;
                }
            }
            return null;
        };

        ModifyUserAttributeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ModifyUserAttributeRequest)
                return object;
            let message = new $root.WebAPI.ModifyUserAttributeRequest();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.userAttribute) {
                if (!Array.isArray(object.userAttribute))
                    throw TypeError(".WebAPI.ModifyUserAttributeRequest.userAttribute: array expected");
                message.userAttribute = [];
                for (let i = 0; i < object.userAttribute.length; ++i) {
                    if (typeof object.userAttribute[i] !== "object")
                        throw TypeError(".WebAPI.ModifyUserAttributeRequest.userAttribute: object expected");
                    message.userAttribute[i] = $root.WebAPI.UserAttribute.fromObject(object.userAttribute[i]);
                }
            }
            return message;
        };

        ModifyUserAttributeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.userAttribute = [];
            if (options.defaults)
                object.requestId = 0;
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.userAttribute && message.userAttribute.length) {
                object.userAttribute = [];
                for (let j = 0; j < message.userAttribute.length; ++j)
                    object.userAttribute[j] = $root.WebAPI.UserAttribute.toObject(message.userAttribute[j], options);
            }
            return object;
        };

        ModifyUserAttributeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModifyUserAttributeRequest;
    })();

    WebAPI.ModifyUserAttributeResult = (function() {

        function ModifyUserAttributeResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ModifyUserAttributeResult.prototype.requestId = 0;
        ModifyUserAttributeResult.prototype.resultCode = 0;
        ModifyUserAttributeResult.prototype.textMessage = "";

        ModifyUserAttributeResult.create = function create(properties) {
            return new ModifyUserAttributeResult(properties);
        };

        ModifyUserAttributeResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            writer.uint32(16).uint32(message.resultCode);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(26).string(message.textMessage);
            return writer;
        };

        ModifyUserAttributeResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ModifyUserAttributeResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.ModifyUserAttributeResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.resultCode = reader.uint32();
                    break;
                case 3:
                    message.textMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            if (!message.hasOwnProperty("resultCode"))
                throw $util.ProtocolError("missing required 'resultCode'", { instance: message });
            return message;
        };

        ModifyUserAttributeResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ModifyUserAttributeResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (!$util.isInteger(message.resultCode))
                return "resultCode: integer expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            return null;
        };

        ModifyUserAttributeResult.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.ModifyUserAttributeResult)
                return object;
            let message = new $root.WebAPI.ModifyUserAttributeResult();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.resultCode != null)
                message.resultCode = object.resultCode >>> 0;
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            return message;
        };

        ModifyUserAttributeResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.requestId = 0;
                object.resultCode = 0;
                object.textMessage = "";
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                object.resultCode = message.resultCode;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            return object;
        };

        ModifyUserAttributeResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ModifyUserAttributeResult.ResultCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[101] = "FAILURE"] = 101;
            return values;
        })();

        return ModifyUserAttributeResult;
    })();

    WebAPI.TimeAndSalesParameters = (function() {

        function TimeAndSalesParameters(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TimeAndSalesParameters.prototype.contractId = 0;
        TimeAndSalesParameters.prototype.level = 0;
        TimeAndSalesParameters.prototype.fromUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TimeAndSalesParameters.prototype.toUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        TimeAndSalesParameters.create = function create(properties) {
            return new TimeAndSalesParameters(properties);
        };

        TimeAndSalesParameters.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.contractId);
            writer.uint32(16).uint32(message.level);
            writer.uint32(24).sint64(message.fromUtcTime);
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                writer.uint32(32).sint64(message.toUtcTime);
            return writer;
        };

        TimeAndSalesParameters.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TimeAndSalesParameters.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TimeAndSalesParameters();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contractId = reader.uint32();
                    break;
                case 2:
                    message.level = reader.uint32();
                    break;
                case 3:
                    message.fromUtcTime = reader.sint64();
                    break;
                case 4:
                    message.toUtcTime = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("contractId"))
                throw $util.ProtocolError("missing required 'contractId'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            if (!message.hasOwnProperty("fromUtcTime"))
                throw $util.ProtocolError("missing required 'fromUtcTime'", { instance: message });
            return message;
        };

        TimeAndSalesParameters.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TimeAndSalesParameters.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.contractId))
                return "contractId: integer expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (!$util.isInteger(message.fromUtcTime) && !(message.fromUtcTime && $util.isInteger(message.fromUtcTime.low) && $util.isInteger(message.fromUtcTime.high)))
                return "fromUtcTime: integer|Long expected";
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                if (!$util.isInteger(message.toUtcTime) && !(message.toUtcTime && $util.isInteger(message.toUtcTime.low) && $util.isInteger(message.toUtcTime.high)))
                    return "toUtcTime: integer|Long expected";
            return null;
        };

        TimeAndSalesParameters.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TimeAndSalesParameters)
                return object;
            let message = new $root.WebAPI.TimeAndSalesParameters();
            if (object.contractId != null)
                message.contractId = object.contractId >>> 0;
            if (object.level != null)
                message.level = object.level >>> 0;
            if (object.fromUtcTime != null)
                if ($util.Long)
                    (message.fromUtcTime = $util.Long.fromValue(object.fromUtcTime)).unsigned = false;
                else if (typeof object.fromUtcTime === "string")
                    message.fromUtcTime = parseInt(object.fromUtcTime, 10);
                else if (typeof object.fromUtcTime === "number")
                    message.fromUtcTime = object.fromUtcTime;
                else if (typeof object.fromUtcTime === "object")
                    message.fromUtcTime = new $util.LongBits(object.fromUtcTime.low >>> 0, object.fromUtcTime.high >>> 0).toNumber();
            if (object.toUtcTime != null)
                if ($util.Long)
                    (message.toUtcTime = $util.Long.fromValue(object.toUtcTime)).unsigned = false;
                else if (typeof object.toUtcTime === "string")
                    message.toUtcTime = parseInt(object.toUtcTime, 10);
                else if (typeof object.toUtcTime === "number")
                    message.toUtcTime = object.toUtcTime;
                else if (typeof object.toUtcTime === "object")
                    message.toUtcTime = new $util.LongBits(object.toUtcTime.low >>> 0, object.toUtcTime.high >>> 0).toNumber();
            return message;
        };

        TimeAndSalesParameters.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.contractId = 0;
                object.level = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.fromUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fromUtcTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.toUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.toUtcTime = options.longs === String ? "0" : 0;
            }
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = message.contractId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.fromUtcTime != null && message.hasOwnProperty("fromUtcTime"))
                if (typeof message.fromUtcTime === "number")
                    object.fromUtcTime = options.longs === String ? String(message.fromUtcTime) : message.fromUtcTime;
                else
                    object.fromUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.fromUtcTime) : options.longs === Number ? new $util.LongBits(message.fromUtcTime.low >>> 0, message.fromUtcTime.high >>> 0).toNumber() : message.fromUtcTime;
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                if (typeof message.toUtcTime === "number")
                    object.toUtcTime = options.longs === String ? String(message.toUtcTime) : message.toUtcTime;
                else
                    object.toUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.toUtcTime) : options.longs === Number ? new $util.LongBits(message.toUtcTime.low >>> 0, message.toUtcTime.high >>> 0).toNumber() : message.toUtcTime;
            return object;
        };

        TimeAndSalesParameters.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TimeAndSalesParameters.Level = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "TRADES"] = 1;
            values[valuesById[3] = "TRADES_BBA_VOLUMES"] = 3;
            return values;
        })();

        return TimeAndSalesParameters;
    })();

    WebAPI.TimeAndSalesRequest = (function() {

        function TimeAndSalesRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TimeAndSalesRequest.prototype.requestId = 0;
        TimeAndSalesRequest.prototype.timeAndSalesParameters = null;
        TimeAndSalesRequest.prototype.requestType = 0;

        TimeAndSalesRequest.create = function create(properties) {
            return new TimeAndSalesRequest(properties);
        };

        TimeAndSalesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            if (message.timeAndSalesParameters != null && message.hasOwnProperty("timeAndSalesParameters"))
                $root.WebAPI.TimeAndSalesParameters.encode(message.timeAndSalesParameters, writer.uint32(18).fork()).ldelim();
            if (message.requestType != null && message.hasOwnProperty("requestType"))
                writer.uint32(24).uint32(message.requestType);
            return writer;
        };

        TimeAndSalesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TimeAndSalesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TimeAndSalesRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.timeAndSalesParameters = $root.WebAPI.TimeAndSalesParameters.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.requestType = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            return message;
        };

        TimeAndSalesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TimeAndSalesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (message.timeAndSalesParameters != null && message.hasOwnProperty("timeAndSalesParameters")) {
                let error = $root.WebAPI.TimeAndSalesParameters.verify(message.timeAndSalesParameters);
                if (error)
                    return "timeAndSalesParameters." + error;
            }
            if (message.requestType != null && message.hasOwnProperty("requestType"))
                if (!$util.isInteger(message.requestType))
                    return "requestType: integer expected";
            return null;
        };

        TimeAndSalesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TimeAndSalesRequest)
                return object;
            let message = new $root.WebAPI.TimeAndSalesRequest();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.timeAndSalesParameters != null) {
                if (typeof object.timeAndSalesParameters !== "object")
                    throw TypeError(".WebAPI.TimeAndSalesRequest.timeAndSalesParameters: object expected");
                message.timeAndSalesParameters = $root.WebAPI.TimeAndSalesParameters.fromObject(object.timeAndSalesParameters);
            }
            if (object.requestType != null)
                message.requestType = object.requestType >>> 0;
            return message;
        };

        TimeAndSalesRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.requestId = 0;
                object.timeAndSalesParameters = null;
                object.requestType = 0;
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.timeAndSalesParameters != null && message.hasOwnProperty("timeAndSalesParameters"))
                object.timeAndSalesParameters = $root.WebAPI.TimeAndSalesParameters.toObject(message.timeAndSalesParameters, options);
            if (message.requestType != null && message.hasOwnProperty("requestType"))
                object.requestType = message.requestType;
            return object;
        };

        TimeAndSalesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TimeAndSalesRequest.RequestType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "GET"] = 1;
            values[valuesById[3] = "DROP"] = 3;
            return values;
        })();

        return TimeAndSalesRequest;
    })();

    WebAPI.TimeAndSalesReport = (function() {

        function TimeAndSalesReport(properties) {
            this.quote = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TimeAndSalesReport.prototype.requestId = 0;
        TimeAndSalesReport.prototype.resultCode = 0;
        TimeAndSalesReport.prototype.quote = $util.emptyArray;
        TimeAndSalesReport.prototype.upToUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TimeAndSalesReport.prototype.isReportComplete = true;
        TimeAndSalesReport.prototype.textMessage = "";
        TimeAndSalesReport.prototype.truncated = false;

        TimeAndSalesReport.create = function create(properties) {
            return new TimeAndSalesReport(properties);
        };

        TimeAndSalesReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            writer.uint32(16).uint32(message.resultCode);
            if (message.quote != null && message.quote.length)
                for (let i = 0; i < message.quote.length; ++i)
                    $root.WebAPI.Quote.encode(message.quote[i], writer.uint32(26).fork()).ldelim();
            if (message.upToUtcTime != null && message.hasOwnProperty("upToUtcTime"))
                writer.uint32(32).int64(message.upToUtcTime);
            if (message.isReportComplete != null && message.hasOwnProperty("isReportComplete"))
                writer.uint32(40).bool(message.isReportComplete);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(50).string(message.textMessage);
            if (message.truncated != null && message.hasOwnProperty("truncated"))
                writer.uint32(56).bool(message.truncated);
            return writer;
        };

        TimeAndSalesReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TimeAndSalesReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TimeAndSalesReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.resultCode = reader.uint32();
                    break;
                case 3:
                    if (!(message.quote && message.quote.length))
                        message.quote = [];
                    message.quote.push($root.WebAPI.Quote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.upToUtcTime = reader.int64();
                    break;
                case 5:
                    message.isReportComplete = reader.bool();
                    break;
                case 6:
                    message.textMessage = reader.string();
                    break;
                case 7:
                    message.truncated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            if (!message.hasOwnProperty("resultCode"))
                throw $util.ProtocolError("missing required 'resultCode'", { instance: message });
            return message;
        };

        TimeAndSalesReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TimeAndSalesReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (!$util.isInteger(message.resultCode))
                return "resultCode: integer expected";
            if (message.quote != null && message.hasOwnProperty("quote")) {
                if (!Array.isArray(message.quote))
                    return "quote: array expected";
                for (let i = 0; i < message.quote.length; ++i) {
                    let error = $root.WebAPI.Quote.verify(message.quote[i]);
                    if (error)
                        return "quote." + error;
                }
            }
            if (message.upToUtcTime != null && message.hasOwnProperty("upToUtcTime"))
                if (!$util.isInteger(message.upToUtcTime) && !(message.upToUtcTime && $util.isInteger(message.upToUtcTime.low) && $util.isInteger(message.upToUtcTime.high)))
                    return "upToUtcTime: integer|Long expected";
            if (message.isReportComplete != null && message.hasOwnProperty("isReportComplete"))
                if (typeof message.isReportComplete !== "boolean")
                    return "isReportComplete: boolean expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            if (message.truncated != null && message.hasOwnProperty("truncated"))
                if (typeof message.truncated !== "boolean")
                    return "truncated: boolean expected";
            return null;
        };

        TimeAndSalesReport.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TimeAndSalesReport)
                return object;
            let message = new $root.WebAPI.TimeAndSalesReport();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.resultCode != null)
                message.resultCode = object.resultCode >>> 0;
            if (object.quote) {
                if (!Array.isArray(object.quote))
                    throw TypeError(".WebAPI.TimeAndSalesReport.quote: array expected");
                message.quote = [];
                for (let i = 0; i < object.quote.length; ++i) {
                    if (typeof object.quote[i] !== "object")
                        throw TypeError(".WebAPI.TimeAndSalesReport.quote: object expected");
                    message.quote[i] = $root.WebAPI.Quote.fromObject(object.quote[i]);
                }
            }
            if (object.upToUtcTime != null)
                if ($util.Long)
                    (message.upToUtcTime = $util.Long.fromValue(object.upToUtcTime)).unsigned = false;
                else if (typeof object.upToUtcTime === "string")
                    message.upToUtcTime = parseInt(object.upToUtcTime, 10);
                else if (typeof object.upToUtcTime === "number")
                    message.upToUtcTime = object.upToUtcTime;
                else if (typeof object.upToUtcTime === "object")
                    message.upToUtcTime = new $util.LongBits(object.upToUtcTime.low >>> 0, object.upToUtcTime.high >>> 0).toNumber();
            if (object.isReportComplete != null)
                message.isReportComplete = Boolean(object.isReportComplete);
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            if (object.truncated != null)
                message.truncated = Boolean(object.truncated);
            return message;
        };

        TimeAndSalesReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.quote = [];
            if (options.defaults) {
                object.requestId = 0;
                object.resultCode = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.upToUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.upToUtcTime = options.longs === String ? "0" : 0;
                object.isReportComplete = true;
                object.textMessage = "";
                object.truncated = false;
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                object.resultCode = message.resultCode;
            if (message.quote && message.quote.length) {
                object.quote = [];
                for (let j = 0; j < message.quote.length; ++j)
                    object.quote[j] = $root.WebAPI.Quote.toObject(message.quote[j], options);
            }
            if (message.upToUtcTime != null && message.hasOwnProperty("upToUtcTime"))
                if (typeof message.upToUtcTime === "number")
                    object.upToUtcTime = options.longs === String ? String(message.upToUtcTime) : message.upToUtcTime;
                else
                    object.upToUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.upToUtcTime) : options.longs === Number ? new $util.LongBits(message.upToUtcTime.low >>> 0, message.upToUtcTime.high >>> 0).toNumber() : message.upToUtcTime;
            if (message.isReportComplete != null && message.hasOwnProperty("isReportComplete"))
                object.isReportComplete = message.isReportComplete;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            if (message.truncated != null && message.hasOwnProperty("truncated"))
                object.truncated = message.truncated;
            return object;
        };

        TimeAndSalesReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TimeAndSalesReport.ResultCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[2] = "DROPPED"] = 2;
            values[valuesById[4] = "DISCONNECTED"] = 4;
            values[valuesById[101] = "FAILURE"] = 101;
            values[valuesById[103] = "ACCESS_DENIED"] = 103;
            values[valuesById[104] = "NOT_FOUND"] = 104;
            values[valuesById[105] = "OUTSIDE_ALLOWED_RANGE"] = 105;
            return values;
        })();

        return TimeAndSalesReport;
    })();

    WebAPI.TimeBarParameters = (function() {

        function TimeBarParameters(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TimeBarParameters.prototype.contractId = 0;
        TimeBarParameters.prototype.barUnit = 0;
        TimeBarParameters.prototype.unitsNumber = 0;
        TimeBarParameters.prototype.fromUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TimeBarParameters.prototype.toUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TimeBarParameters.prototype.useSettlements = false;

        TimeBarParameters.create = function create(properties) {
            return new TimeBarParameters(properties);
        };

        TimeBarParameters.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.contractId);
            writer.uint32(16).uint32(message.barUnit);
            if (message.unitsNumber != null && message.hasOwnProperty("unitsNumber"))
                writer.uint32(24).uint32(message.unitsNumber);
            writer.uint32(32).sint64(message.fromUtcTime);
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                writer.uint32(40).sint64(message.toUtcTime);
            if (message.useSettlements != null && message.hasOwnProperty("useSettlements"))
                writer.uint32(48).bool(message.useSettlements);
            return writer;
        };

        TimeBarParameters.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TimeBarParameters.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TimeBarParameters();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contractId = reader.uint32();
                    break;
                case 2:
                    message.barUnit = reader.uint32();
                    break;
                case 3:
                    message.unitsNumber = reader.uint32();
                    break;
                case 4:
                    message.fromUtcTime = reader.sint64();
                    break;
                case 5:
                    message.toUtcTime = reader.sint64();
                    break;
                case 6:
                    message.useSettlements = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("contractId"))
                throw $util.ProtocolError("missing required 'contractId'", { instance: message });
            if (!message.hasOwnProperty("barUnit"))
                throw $util.ProtocolError("missing required 'barUnit'", { instance: message });
            if (!message.hasOwnProperty("fromUtcTime"))
                throw $util.ProtocolError("missing required 'fromUtcTime'", { instance: message });
            return message;
        };

        TimeBarParameters.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TimeBarParameters.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.contractId))
                return "contractId: integer expected";
            if (!$util.isInteger(message.barUnit))
                return "barUnit: integer expected";
            if (message.unitsNumber != null && message.hasOwnProperty("unitsNumber"))
                if (!$util.isInteger(message.unitsNumber))
                    return "unitsNumber: integer expected";
            if (!$util.isInteger(message.fromUtcTime) && !(message.fromUtcTime && $util.isInteger(message.fromUtcTime.low) && $util.isInteger(message.fromUtcTime.high)))
                return "fromUtcTime: integer|Long expected";
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                if (!$util.isInteger(message.toUtcTime) && !(message.toUtcTime && $util.isInteger(message.toUtcTime.low) && $util.isInteger(message.toUtcTime.high)))
                    return "toUtcTime: integer|Long expected";
            if (message.useSettlements != null && message.hasOwnProperty("useSettlements"))
                if (typeof message.useSettlements !== "boolean")
                    return "useSettlements: boolean expected";
            return null;
        };

        TimeBarParameters.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TimeBarParameters)
                return object;
            let message = new $root.WebAPI.TimeBarParameters();
            if (object.contractId != null)
                message.contractId = object.contractId >>> 0;
            if (object.barUnit != null)
                message.barUnit = object.barUnit >>> 0;
            if (object.unitsNumber != null)
                message.unitsNumber = object.unitsNumber >>> 0;
            if (object.fromUtcTime != null)
                if ($util.Long)
                    (message.fromUtcTime = $util.Long.fromValue(object.fromUtcTime)).unsigned = false;
                else if (typeof object.fromUtcTime === "string")
                    message.fromUtcTime = parseInt(object.fromUtcTime, 10);
                else if (typeof object.fromUtcTime === "number")
                    message.fromUtcTime = object.fromUtcTime;
                else if (typeof object.fromUtcTime === "object")
                    message.fromUtcTime = new $util.LongBits(object.fromUtcTime.low >>> 0, object.fromUtcTime.high >>> 0).toNumber();
            if (object.toUtcTime != null)
                if ($util.Long)
                    (message.toUtcTime = $util.Long.fromValue(object.toUtcTime)).unsigned = false;
                else if (typeof object.toUtcTime === "string")
                    message.toUtcTime = parseInt(object.toUtcTime, 10);
                else if (typeof object.toUtcTime === "number")
                    message.toUtcTime = object.toUtcTime;
                else if (typeof object.toUtcTime === "object")
                    message.toUtcTime = new $util.LongBits(object.toUtcTime.low >>> 0, object.toUtcTime.high >>> 0).toNumber();
            if (object.useSettlements != null)
                message.useSettlements = Boolean(object.useSettlements);
            return message;
        };

        TimeBarParameters.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.contractId = 0;
                object.barUnit = 0;
                object.unitsNumber = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.fromUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fromUtcTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.toUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.toUtcTime = options.longs === String ? "0" : 0;
                object.useSettlements = false;
            }
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = message.contractId;
            if (message.barUnit != null && message.hasOwnProperty("barUnit"))
                object.barUnit = message.barUnit;
            if (message.unitsNumber != null && message.hasOwnProperty("unitsNumber"))
                object.unitsNumber = message.unitsNumber;
            if (message.fromUtcTime != null && message.hasOwnProperty("fromUtcTime"))
                if (typeof message.fromUtcTime === "number")
                    object.fromUtcTime = options.longs === String ? String(message.fromUtcTime) : message.fromUtcTime;
                else
                    object.fromUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.fromUtcTime) : options.longs === Number ? new $util.LongBits(message.fromUtcTime.low >>> 0, message.fromUtcTime.high >>> 0).toNumber() : message.fromUtcTime;
            if (message.toUtcTime != null && message.hasOwnProperty("toUtcTime"))
                if (typeof message.toUtcTime === "number")
                    object.toUtcTime = options.longs === String ? String(message.toUtcTime) : message.toUtcTime;
                else
                    object.toUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.toUtcTime) : options.longs === Number ? new $util.LongBits(message.toUtcTime.low >>> 0, message.toUtcTime.high >>> 0).toNumber() : message.toUtcTime;
            if (message.useSettlements != null && message.hasOwnProperty("useSettlements"))
                object.useSettlements = message.useSettlements;
            return object;
        };

        TimeBarParameters.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TimeBarParameters.BarUnit = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "YEAR"] = 1;
            values[valuesById[2] = "SEMI_ANNUAL"] = 2;
            values[valuesById[3] = "QUARTER"] = 3;
            values[valuesById[4] = "MONTH"] = 4;
            values[valuesById[5] = "WEEK"] = 5;
            values[valuesById[6] = "DAY"] = 6;
            values[valuesById[7] = "HOUR"] = 7;
            values[valuesById[8] = "MIN"] = 8;
            return values;
        })();

        return TimeBarParameters;
    })();

    WebAPI.TimeBarRequest = (function() {

        function TimeBarRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TimeBarRequest.prototype.requestId = 0;
        TimeBarRequest.prototype.timeBarParameters = null;
        TimeBarRequest.prototype.requestType = 0;

        TimeBarRequest.create = function create(properties) {
            return new TimeBarRequest(properties);
        };

        TimeBarRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            if (message.timeBarParameters != null && message.hasOwnProperty("timeBarParameters"))
                $root.WebAPI.TimeBarParameters.encode(message.timeBarParameters, writer.uint32(18).fork()).ldelim();
            if (message.requestType != null && message.hasOwnProperty("requestType"))
                writer.uint32(24).uint32(message.requestType);
            return writer;
        };

        TimeBarRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TimeBarRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TimeBarRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.timeBarParameters = $root.WebAPI.TimeBarParameters.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.requestType = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            return message;
        };

        TimeBarRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TimeBarRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (message.timeBarParameters != null && message.hasOwnProperty("timeBarParameters")) {
                let error = $root.WebAPI.TimeBarParameters.verify(message.timeBarParameters);
                if (error)
                    return "timeBarParameters." + error;
            }
            if (message.requestType != null && message.hasOwnProperty("requestType"))
                if (!$util.isInteger(message.requestType))
                    return "requestType: integer expected";
            return null;
        };

        TimeBarRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TimeBarRequest)
                return object;
            let message = new $root.WebAPI.TimeBarRequest();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.timeBarParameters != null) {
                if (typeof object.timeBarParameters !== "object")
                    throw TypeError(".WebAPI.TimeBarRequest.timeBarParameters: object expected");
                message.timeBarParameters = $root.WebAPI.TimeBarParameters.fromObject(object.timeBarParameters);
            }
            if (object.requestType != null)
                message.requestType = object.requestType >>> 0;
            return message;
        };

        TimeBarRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.requestId = 0;
                object.timeBarParameters = null;
                object.requestType = 0;
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.timeBarParameters != null && message.hasOwnProperty("timeBarParameters"))
                object.timeBarParameters = $root.WebAPI.TimeBarParameters.toObject(message.timeBarParameters, options);
            if (message.requestType != null && message.hasOwnProperty("requestType"))
                object.requestType = message.requestType;
            return object;
        };

        TimeBarRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TimeBarRequest.RequestType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "GET"] = 1;
            values[valuesById[2] = "SUBSCRIBE"] = 2;
            values[valuesById[3] = "DROP"] = 3;
            return values;
        })();

        return TimeBarRequest;
    })();

    WebAPI.TimeBar = (function() {

        function TimeBar(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TimeBar.prototype.barUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TimeBar.prototype.openPrice = 0;
        TimeBar.prototype.highPrice = 0;
        TimeBar.prototype.lowPrice = 0;
        TimeBar.prototype.closePrice = 0;
        TimeBar.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        TimeBar.prototype.tradeDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TimeBar.prototype.commodityVolume = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        TimeBar.prototype.openInterest = 0;
        TimeBar.prototype.commodityOpenInterest = 0;
        TimeBar.prototype.settlementPrice = 0;

        TimeBar.create = function create(properties) {
            return new TimeBar(properties);
        };

        TimeBar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).sint64(message.barUtcTime);
            if (message.openPrice != null && message.hasOwnProperty("openPrice"))
                writer.uint32(16).sint32(message.openPrice);
            if (message.highPrice != null && message.hasOwnProperty("highPrice"))
                writer.uint32(24).sint32(message.highPrice);
            if (message.lowPrice != null && message.hasOwnProperty("lowPrice"))
                writer.uint32(32).sint32(message.lowPrice);
            if (message.closePrice != null && message.hasOwnProperty("closePrice"))
                writer.uint32(40).sint32(message.closePrice);
            if (message.volume != null && message.hasOwnProperty("volume"))
                writer.uint32(48).uint64(message.volume);
            if (message.tradeDate != null && message.hasOwnProperty("tradeDate"))
                writer.uint32(56).sint64(message.tradeDate);
            if (message.commodityVolume != null && message.hasOwnProperty("commodityVolume"))
                writer.uint32(64).uint64(message.commodityVolume);
            if (message.openInterest != null && message.hasOwnProperty("openInterest"))
                writer.uint32(72).uint32(message.openInterest);
            if (message.commodityOpenInterest != null && message.hasOwnProperty("commodityOpenInterest"))
                writer.uint32(80).uint32(message.commodityOpenInterest);
            if (message.settlementPrice != null && message.hasOwnProperty("settlementPrice"))
                writer.uint32(88).sint32(message.settlementPrice);
            return writer;
        };

        TimeBar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TimeBar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TimeBar();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.barUtcTime = reader.sint64();
                    break;
                case 2:
                    message.openPrice = reader.sint32();
                    break;
                case 3:
                    message.highPrice = reader.sint32();
                    break;
                case 4:
                    message.lowPrice = reader.sint32();
                    break;
                case 5:
                    message.closePrice = reader.sint32();
                    break;
                case 6:
                    message.volume = reader.uint64();
                    break;
                case 7:
                    message.tradeDate = reader.sint64();
                    break;
                case 8:
                    message.commodityVolume = reader.uint64();
                    break;
                case 9:
                    message.openInterest = reader.uint32();
                    break;
                case 10:
                    message.commodityOpenInterest = reader.uint32();
                    break;
                case 11:
                    message.settlementPrice = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("barUtcTime"))
                throw $util.ProtocolError("missing required 'barUtcTime'", { instance: message });
            return message;
        };

        TimeBar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TimeBar.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.barUtcTime) && !(message.barUtcTime && $util.isInteger(message.barUtcTime.low) && $util.isInteger(message.barUtcTime.high)))
                return "barUtcTime: integer|Long expected";
            if (message.openPrice != null && message.hasOwnProperty("openPrice"))
                if (!$util.isInteger(message.openPrice))
                    return "openPrice: integer expected";
            if (message.highPrice != null && message.hasOwnProperty("highPrice"))
                if (!$util.isInteger(message.highPrice))
                    return "highPrice: integer expected";
            if (message.lowPrice != null && message.hasOwnProperty("lowPrice"))
                if (!$util.isInteger(message.lowPrice))
                    return "lowPrice: integer expected";
            if (message.closePrice != null && message.hasOwnProperty("closePrice"))
                if (!$util.isInteger(message.closePrice))
                    return "closePrice: integer expected";
            if (message.volume != null && message.hasOwnProperty("volume"))
                if (!$util.isInteger(message.volume) && !(message.volume && $util.isInteger(message.volume.low) && $util.isInteger(message.volume.high)))
                    return "volume: integer|Long expected";
            if (message.tradeDate != null && message.hasOwnProperty("tradeDate"))
                if (!$util.isInteger(message.tradeDate) && !(message.tradeDate && $util.isInteger(message.tradeDate.low) && $util.isInteger(message.tradeDate.high)))
                    return "tradeDate: integer|Long expected";
            if (message.commodityVolume != null && message.hasOwnProperty("commodityVolume"))
                if (!$util.isInteger(message.commodityVolume) && !(message.commodityVolume && $util.isInteger(message.commodityVolume.low) && $util.isInteger(message.commodityVolume.high)))
                    return "commodityVolume: integer|Long expected";
            if (message.openInterest != null && message.hasOwnProperty("openInterest"))
                if (!$util.isInteger(message.openInterest))
                    return "openInterest: integer expected";
            if (message.commodityOpenInterest != null && message.hasOwnProperty("commodityOpenInterest"))
                if (!$util.isInteger(message.commodityOpenInterest))
                    return "commodityOpenInterest: integer expected";
            if (message.settlementPrice != null && message.hasOwnProperty("settlementPrice"))
                if (!$util.isInteger(message.settlementPrice))
                    return "settlementPrice: integer expected";
            return null;
        };

        TimeBar.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TimeBar)
                return object;
            let message = new $root.WebAPI.TimeBar();
            if (object.barUtcTime != null)
                if ($util.Long)
                    (message.barUtcTime = $util.Long.fromValue(object.barUtcTime)).unsigned = false;
                else if (typeof object.barUtcTime === "string")
                    message.barUtcTime = parseInt(object.barUtcTime, 10);
                else if (typeof object.barUtcTime === "number")
                    message.barUtcTime = object.barUtcTime;
                else if (typeof object.barUtcTime === "object")
                    message.barUtcTime = new $util.LongBits(object.barUtcTime.low >>> 0, object.barUtcTime.high >>> 0).toNumber();
            if (object.openPrice != null)
                message.openPrice = object.openPrice | 0;
            if (object.highPrice != null)
                message.highPrice = object.highPrice | 0;
            if (object.lowPrice != null)
                message.lowPrice = object.lowPrice | 0;
            if (object.closePrice != null)
                message.closePrice = object.closePrice | 0;
            if (object.volume != null)
                if ($util.Long)
                    (message.volume = $util.Long.fromValue(object.volume)).unsigned = true;
                else if (typeof object.volume === "string")
                    message.volume = parseInt(object.volume, 10);
                else if (typeof object.volume === "number")
                    message.volume = object.volume;
                else if (typeof object.volume === "object")
                    message.volume = new $util.LongBits(object.volume.low >>> 0, object.volume.high >>> 0).toNumber(true);
            if (object.tradeDate != null)
                if ($util.Long)
                    (message.tradeDate = $util.Long.fromValue(object.tradeDate)).unsigned = false;
                else if (typeof object.tradeDate === "string")
                    message.tradeDate = parseInt(object.tradeDate, 10);
                else if (typeof object.tradeDate === "number")
                    message.tradeDate = object.tradeDate;
                else if (typeof object.tradeDate === "object")
                    message.tradeDate = new $util.LongBits(object.tradeDate.low >>> 0, object.tradeDate.high >>> 0).toNumber();
            if (object.commodityVolume != null)
                if ($util.Long)
                    (message.commodityVolume = $util.Long.fromValue(object.commodityVolume)).unsigned = true;
                else if (typeof object.commodityVolume === "string")
                    message.commodityVolume = parseInt(object.commodityVolume, 10);
                else if (typeof object.commodityVolume === "number")
                    message.commodityVolume = object.commodityVolume;
                else if (typeof object.commodityVolume === "object")
                    message.commodityVolume = new $util.LongBits(object.commodityVolume.low >>> 0, object.commodityVolume.high >>> 0).toNumber(true);
            if (object.openInterest != null)
                message.openInterest = object.openInterest >>> 0;
            if (object.commodityOpenInterest != null)
                message.commodityOpenInterest = object.commodityOpenInterest >>> 0;
            if (object.settlementPrice != null)
                message.settlementPrice = object.settlementPrice | 0;
            return message;
        };

        TimeBar.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.barUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.barUtcTime = options.longs === String ? "0" : 0;
                object.openPrice = 0;
                object.highPrice = 0;
                object.lowPrice = 0;
                object.closePrice = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.volume = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.volume = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.tradeDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tradeDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.commodityVolume = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.commodityVolume = options.longs === String ? "0" : 0;
                object.openInterest = 0;
                object.commodityOpenInterest = 0;
                object.settlementPrice = 0;
            }
            if (message.barUtcTime != null && message.hasOwnProperty("barUtcTime"))
                if (typeof message.barUtcTime === "number")
                    object.barUtcTime = options.longs === String ? String(message.barUtcTime) : message.barUtcTime;
                else
                    object.barUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.barUtcTime) : options.longs === Number ? new $util.LongBits(message.barUtcTime.low >>> 0, message.barUtcTime.high >>> 0).toNumber() : message.barUtcTime;
            if (message.openPrice != null && message.hasOwnProperty("openPrice"))
                object.openPrice = message.openPrice;
            if (message.highPrice != null && message.hasOwnProperty("highPrice"))
                object.highPrice = message.highPrice;
            if (message.lowPrice != null && message.hasOwnProperty("lowPrice"))
                object.lowPrice = message.lowPrice;
            if (message.closePrice != null && message.hasOwnProperty("closePrice"))
                object.closePrice = message.closePrice;
            if (message.volume != null && message.hasOwnProperty("volume"))
                if (typeof message.volume === "number")
                    object.volume = options.longs === String ? String(message.volume) : message.volume;
                else
                    object.volume = options.longs === String ? $util.Long.prototype.toString.call(message.volume) : options.longs === Number ? new $util.LongBits(message.volume.low >>> 0, message.volume.high >>> 0).toNumber(true) : message.volume;
            if (message.tradeDate != null && message.hasOwnProperty("tradeDate"))
                if (typeof message.tradeDate === "number")
                    object.tradeDate = options.longs === String ? String(message.tradeDate) : message.tradeDate;
                else
                    object.tradeDate = options.longs === String ? $util.Long.prototype.toString.call(message.tradeDate) : options.longs === Number ? new $util.LongBits(message.tradeDate.low >>> 0, message.tradeDate.high >>> 0).toNumber() : message.tradeDate;
            if (message.commodityVolume != null && message.hasOwnProperty("commodityVolume"))
                if (typeof message.commodityVolume === "number")
                    object.commodityVolume = options.longs === String ? String(message.commodityVolume) : message.commodityVolume;
                else
                    object.commodityVolume = options.longs === String ? $util.Long.prototype.toString.call(message.commodityVolume) : options.longs === Number ? new $util.LongBits(message.commodityVolume.low >>> 0, message.commodityVolume.high >>> 0).toNumber(true) : message.commodityVolume;
            if (message.openInterest != null && message.hasOwnProperty("openInterest"))
                object.openInterest = message.openInterest;
            if (message.commodityOpenInterest != null && message.hasOwnProperty("commodityOpenInterest"))
                object.commodityOpenInterest = message.commodityOpenInterest;
            if (message.settlementPrice != null && message.hasOwnProperty("settlementPrice"))
                object.settlementPrice = message.settlementPrice;
            return object;
        };

        TimeBar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimeBar;
    })();

    WebAPI.TimeBarReport = (function() {

        function TimeBarReport(properties) {
            this.timeBar = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TimeBarReport.prototype.requestId = 0;
        TimeBarReport.prototype.statusCode = 0;
        TimeBarReport.prototype.timeBar = $util.emptyArray;
        TimeBarReport.prototype.upToUtcTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TimeBarReport.prototype.isReportComplete = true;
        TimeBarReport.prototype.textMessage = "";
        TimeBarReport.prototype.truncated = false;

        TimeBarReport.create = function create(properties) {
            return new TimeBarReport(properties);
        };

        TimeBarReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).uint32(message.requestId);
            writer.uint32(16).uint32(message.statusCode);
            if (message.timeBar != null && message.timeBar.length)
                for (let i = 0; i < message.timeBar.length; ++i)
                    $root.WebAPI.TimeBar.encode(message.timeBar[i], writer.uint32(26).fork()).ldelim();
            if (message.upToUtcTime != null && message.hasOwnProperty("upToUtcTime"))
                writer.uint32(32).int64(message.upToUtcTime);
            if (message.isReportComplete != null && message.hasOwnProperty("isReportComplete"))
                writer.uint32(40).bool(message.isReportComplete);
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                writer.uint32(50).string(message.textMessage);
            if (message.truncated != null && message.hasOwnProperty("truncated"))
                writer.uint32(56).bool(message.truncated);
            return writer;
        };

        TimeBarReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TimeBarReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.TimeBarReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.statusCode = reader.uint32();
                    break;
                case 3:
                    if (!(message.timeBar && message.timeBar.length))
                        message.timeBar = [];
                    message.timeBar.push($root.WebAPI.TimeBar.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.upToUtcTime = reader.int64();
                    break;
                case 5:
                    message.isReportComplete = reader.bool();
                    break;
                case 6:
                    message.textMessage = reader.string();
                    break;
                case 7:
                    message.truncated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("requestId"))
                throw $util.ProtocolError("missing required 'requestId'", { instance: message });
            if (!message.hasOwnProperty("statusCode"))
                throw $util.ProtocolError("missing required 'statusCode'", { instance: message });
            return message;
        };

        TimeBarReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TimeBarReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
            if (!$util.isInteger(message.statusCode))
                return "statusCode: integer expected";
            if (message.timeBar != null && message.hasOwnProperty("timeBar")) {
                if (!Array.isArray(message.timeBar))
                    return "timeBar: array expected";
                for (let i = 0; i < message.timeBar.length; ++i) {
                    let error = $root.WebAPI.TimeBar.verify(message.timeBar[i]);
                    if (error)
                        return "timeBar." + error;
                }
            }
            if (message.upToUtcTime != null && message.hasOwnProperty("upToUtcTime"))
                if (!$util.isInteger(message.upToUtcTime) && !(message.upToUtcTime && $util.isInteger(message.upToUtcTime.low) && $util.isInteger(message.upToUtcTime.high)))
                    return "upToUtcTime: integer|Long expected";
            if (message.isReportComplete != null && message.hasOwnProperty("isReportComplete"))
                if (typeof message.isReportComplete !== "boolean")
                    return "isReportComplete: boolean expected";
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                if (!$util.isString(message.textMessage))
                    return "textMessage: string expected";
            if (message.truncated != null && message.hasOwnProperty("truncated"))
                if (typeof message.truncated !== "boolean")
                    return "truncated: boolean expected";
            return null;
        };

        TimeBarReport.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.TimeBarReport)
                return object;
            let message = new $root.WebAPI.TimeBarReport();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.statusCode != null)
                message.statusCode = object.statusCode >>> 0;
            if (object.timeBar) {
                if (!Array.isArray(object.timeBar))
                    throw TypeError(".WebAPI.TimeBarReport.timeBar: array expected");
                message.timeBar = [];
                for (let i = 0; i < object.timeBar.length; ++i) {
                    if (typeof object.timeBar[i] !== "object")
                        throw TypeError(".WebAPI.TimeBarReport.timeBar: object expected");
                    message.timeBar[i] = $root.WebAPI.TimeBar.fromObject(object.timeBar[i]);
                }
            }
            if (object.upToUtcTime != null)
                if ($util.Long)
                    (message.upToUtcTime = $util.Long.fromValue(object.upToUtcTime)).unsigned = false;
                else if (typeof object.upToUtcTime === "string")
                    message.upToUtcTime = parseInt(object.upToUtcTime, 10);
                else if (typeof object.upToUtcTime === "number")
                    message.upToUtcTime = object.upToUtcTime;
                else if (typeof object.upToUtcTime === "object")
                    message.upToUtcTime = new $util.LongBits(object.upToUtcTime.low >>> 0, object.upToUtcTime.high >>> 0).toNumber();
            if (object.isReportComplete != null)
                message.isReportComplete = Boolean(object.isReportComplete);
            if (object.textMessage != null)
                message.textMessage = String(object.textMessage);
            if (object.truncated != null)
                message.truncated = Boolean(object.truncated);
            return message;
        };

        TimeBarReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.timeBar = [];
            if (options.defaults) {
                object.requestId = 0;
                object.statusCode = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.upToUtcTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.upToUtcTime = options.longs === String ? "0" : 0;
                object.isReportComplete = true;
                object.textMessage = "";
                object.truncated = false;
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.timeBar && message.timeBar.length) {
                object.timeBar = [];
                for (let j = 0; j < message.timeBar.length; ++j)
                    object.timeBar[j] = $root.WebAPI.TimeBar.toObject(message.timeBar[j], options);
            }
            if (message.upToUtcTime != null && message.hasOwnProperty("upToUtcTime"))
                if (typeof message.upToUtcTime === "number")
                    object.upToUtcTime = options.longs === String ? String(message.upToUtcTime) : message.upToUtcTime;
                else
                    object.upToUtcTime = options.longs === String ? $util.Long.prototype.toString.call(message.upToUtcTime) : options.longs === Number ? new $util.LongBits(message.upToUtcTime.low >>> 0, message.upToUtcTime.high >>> 0).toNumber() : message.upToUtcTime;
            if (message.isReportComplete != null && message.hasOwnProperty("isReportComplete"))
                object.isReportComplete = message.isReportComplete;
            if (message.textMessage != null && message.hasOwnProperty("textMessage"))
                object.textMessage = message.textMessage;
            if (message.truncated != null && message.hasOwnProperty("truncated"))
                object.truncated = message.truncated;
            return object;
        };

        TimeBarReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TimeBarReport.StatusCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[1] = "SUBSCRIBED"] = 1;
            values[valuesById[2] = "DROPPED"] = 2;
            values[valuesById[3] = "UPDATE"] = 3;
            values[valuesById[4] = "DISCONNECTED"] = 4;
            values[valuesById[101] = "FAILURE"] = 101;
            values[valuesById[103] = "ACCESS_DENIED"] = 103;
            values[valuesById[104] = "NOT_FOUND"] = 104;
            values[valuesById[105] = "OUTSIDE_ALLOWED_RANGE"] = 105;
            values[valuesById[106] = "INVALID_PARAMS"] = 106;
            return values;
        })();

        return TimeBarReport;
    })();

    WebAPI.HistoricalOrdersRequest = (function() {

        function HistoricalOrdersRequest(properties) {
            this.accountId = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        HistoricalOrdersRequest.prototype.fromDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        HistoricalOrdersRequest.prototype.toDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        HistoricalOrdersRequest.prototype.accountId = $util.emptyArray;

        HistoricalOrdersRequest.create = function create(properties) {
            return new HistoricalOrdersRequest(properties);
        };

        HistoricalOrdersRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(8).sint64(message.fromDate);
            if (message.toDate != null && message.hasOwnProperty("toDate"))
                writer.uint32(16).sint64(message.toDate);
            if (message.accountId != null && message.accountId.length)
                for (let i = 0; i < message.accountId.length; ++i)
                    writer.uint32(24).sint32(message.accountId[i]);
            return writer;
        };

        HistoricalOrdersRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        HistoricalOrdersRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.HistoricalOrdersRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fromDate = reader.sint64();
                    break;
                case 2:
                    message.toDate = reader.sint64();
                    break;
                case 3:
                    if (!(message.accountId && message.accountId.length))
                        message.accountId = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.accountId.push(reader.sint32());
                    } else
                        message.accountId.push(reader.sint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("fromDate"))
                throw $util.ProtocolError("missing required 'fromDate'", { instance: message });
            return message;
        };

        HistoricalOrdersRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        HistoricalOrdersRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.fromDate) && !(message.fromDate && $util.isInteger(message.fromDate.low) && $util.isInteger(message.fromDate.high)))
                return "fromDate: integer|Long expected";
            if (message.toDate != null && message.hasOwnProperty("toDate"))
                if (!$util.isInteger(message.toDate) && !(message.toDate && $util.isInteger(message.toDate.low) && $util.isInteger(message.toDate.high)))
                    return "toDate: integer|Long expected";
            if (message.accountId != null && message.hasOwnProperty("accountId")) {
                if (!Array.isArray(message.accountId))
                    return "accountId: array expected";
                for (let i = 0; i < message.accountId.length; ++i)
                    if (!$util.isInteger(message.accountId[i]))
                        return "accountId: integer[] expected";
            }
            return null;
        };

        HistoricalOrdersRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.HistoricalOrdersRequest)
                return object;
            let message = new $root.WebAPI.HistoricalOrdersRequest();
            if (object.fromDate != null)
                if ($util.Long)
                    (message.fromDate = $util.Long.fromValue(object.fromDate)).unsigned = false;
                else if (typeof object.fromDate === "string")
                    message.fromDate = parseInt(object.fromDate, 10);
                else if (typeof object.fromDate === "number")
                    message.fromDate = object.fromDate;
                else if (typeof object.fromDate === "object")
                    message.fromDate = new $util.LongBits(object.fromDate.low >>> 0, object.fromDate.high >>> 0).toNumber();
            if (object.toDate != null)
                if ($util.Long)
                    (message.toDate = $util.Long.fromValue(object.toDate)).unsigned = false;
                else if (typeof object.toDate === "string")
                    message.toDate = parseInt(object.toDate, 10);
                else if (typeof object.toDate === "number")
                    message.toDate = object.toDate;
                else if (typeof object.toDate === "object")
                    message.toDate = new $util.LongBits(object.toDate.low >>> 0, object.toDate.high >>> 0).toNumber();
            if (object.accountId) {
                if (!Array.isArray(object.accountId))
                    throw TypeError(".WebAPI.HistoricalOrdersRequest.accountId: array expected");
                message.accountId = [];
                for (let i = 0; i < object.accountId.length; ++i)
                    message.accountId[i] = object.accountId[i] | 0;
            }
            return message;
        };

        HistoricalOrdersRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accountId = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.fromDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fromDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.toDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.toDate = options.longs === String ? "0" : 0;
            }
            if (message.fromDate != null && message.hasOwnProperty("fromDate"))
                if (typeof message.fromDate === "number")
                    object.fromDate = options.longs === String ? String(message.fromDate) : message.fromDate;
                else
                    object.fromDate = options.longs === String ? $util.Long.prototype.toString.call(message.fromDate) : options.longs === Number ? new $util.LongBits(message.fromDate.low >>> 0, message.fromDate.high >>> 0).toNumber() : message.fromDate;
            if (message.toDate != null && message.hasOwnProperty("toDate"))
                if (typeof message.toDate === "number")
                    object.toDate = options.longs === String ? String(message.toDate) : message.toDate;
                else
                    object.toDate = options.longs === String ? $util.Long.prototype.toString.call(message.toDate) : options.longs === Number ? new $util.LongBits(message.toDate.low >>> 0, message.toDate.high >>> 0).toNumber() : message.toDate;
            if (message.accountId && message.accountId.length) {
                object.accountId = [];
                for (let j = 0; j < message.accountId.length; ++j)
                    object.accountId[j] = message.accountId[j];
            }
            return object;
        };

        HistoricalOrdersRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HistoricalOrdersRequest;
    })();

    WebAPI.HistoricalOrdersReport = (function() {

        function HistoricalOrdersReport(properties) {
            this.orderStatus = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        HistoricalOrdersReport.prototype.orderStatus = $util.emptyArray;

        HistoricalOrdersReport.create = function create(properties) {
            return new HistoricalOrdersReport(properties);
        };

        HistoricalOrdersReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orderStatus != null && message.orderStatus.length)
                for (let i = 0; i < message.orderStatus.length; ++i)
                    $root.WebAPI.OrderStatus.encode(message.orderStatus[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        HistoricalOrdersReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        HistoricalOrdersReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebAPI.HistoricalOrdersReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.orderStatus && message.orderStatus.length))
                        message.orderStatus = [];
                    message.orderStatus.push($root.WebAPI.OrderStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        HistoricalOrdersReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        HistoricalOrdersReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orderStatus != null && message.hasOwnProperty("orderStatus")) {
                if (!Array.isArray(message.orderStatus))
                    return "orderStatus: array expected";
                for (let i = 0; i < message.orderStatus.length; ++i) {
                    let error = $root.WebAPI.OrderStatus.verify(message.orderStatus[i]);
                    if (error)
                        return "orderStatus." + error;
                }
            }
            return null;
        };

        HistoricalOrdersReport.fromObject = function fromObject(object) {
            if (object instanceof $root.WebAPI.HistoricalOrdersReport)
                return object;
            let message = new $root.WebAPI.HistoricalOrdersReport();
            if (object.orderStatus) {
                if (!Array.isArray(object.orderStatus))
                    throw TypeError(".WebAPI.HistoricalOrdersReport.orderStatus: array expected");
                message.orderStatus = [];
                for (let i = 0; i < object.orderStatus.length; ++i) {
                    if (typeof object.orderStatus[i] !== "object")
                        throw TypeError(".WebAPI.HistoricalOrdersReport.orderStatus: object expected");
                    message.orderStatus[i] = $root.WebAPI.OrderStatus.fromObject(object.orderStatus[i]);
                }
            }
            return message;
        };

        HistoricalOrdersReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.orderStatus = [];
            if (message.orderStatus && message.orderStatus.length) {
                object.orderStatus = [];
                for (let j = 0; j < message.orderStatus.length; ++j)
                    object.orderStatus[j] = $root.WebAPI.OrderStatus.toObject(message.orderStatus[j], options);
            }
            return object;
        };

        HistoricalOrdersReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HistoricalOrdersReport;
    })();

    return WebAPI;
})();

export { $root as default };
