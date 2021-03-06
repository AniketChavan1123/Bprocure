const routes = require('next-routes')();         // it returns a function-------for custom token

routes.add('/RContract/:address','/RContract/Registration')
.add('/PNContract/:address','/PNContract/PurchaseNegotiation')
.add('/PNContract/LoadContract/:address','/PNContract/LoadContract')
.add('/POContract/:address/:contract','/POContract/PurchaseOrder')
.add('/POContract/:address','/POContract/PurchaseOrder')
.add('/RebateContract/:address','/RebateContract/RebateSettlement')
.add('/LoyaltyContract/:address','/LoyaltyContract/LoyaltyRebate')
.add('/initiate/:address','/initiate');


module.exports = routes;
