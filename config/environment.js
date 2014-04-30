// Put general configuration here. This file is included
// in both production and development BEFORE Ember is
// loaded.
//
// For example to enable a feature on a canary build you
// might do:
//
// window.ENV = {FEATURES: {'with-controller': true}};

window.ENV = window.ENV || {};

// JOSH: Fixtures only work when this is set to false
// watch out for this to break as ember and ember app kit evolve
window.ENV.MODEL_FACTORY_INJECTIONS = false;