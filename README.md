# js-entity-modeling
Framework-agnostic, self-validating Javascript domain entities

## What's this?
### The entities that make up an application's domain model may be used by multiple projects, encompassing both client and server code.
* The entities should be plain JavaScript and not tied to a particular framework.
* This allows, for instance, Node-based server code to work with the same entities that an Angular client uses, and apply the same validation logic without duplication.
* It is important to make sure that code in the various projects is kept in sync with the main schema. 
* If a new field is added to an entity, the change should only happen in one place, and the entire codebase should be able to to work with it.
* The prototypes have methods for construction, validation, marshalling to and from raw objects, getting token representations of larger objects, etc.
* Compound entities should always validate their children by using the child's isValid() method, rather than by checking child properties directly.
* The entities should be defined in a separate project like this, for import into other projects, for instance, via git submodules.

## Files
### domain/
* **entity/** All of the entities defined in the schema have corresponding prototype objects in the domain/entity folder.
* **domain.js** allows the entities to be grouped as a library and used in both Node and the browser.
* **package.json** describes the module for Node.
* **index.html** has a simple test that proves a compound object can be instantiated as expected in the browser. 

### spec/
* **support/** contains Jasmine's configuration file
* ***-spec.js** the Jasmine tests for the entities
