# js-entity-modeling
Framework-agnostic, self-validating Javascript Domain Entities

# What's this?
### The entities that make up an application's domain model may be used by multiple projects, encompassing both client and server code.
* The entities should be plain JavaScript and not tied to a particular framework.
* This allows Node-based to work with the same entity code that Angular client uses.
* It is important to make sure that code in the various projects is kept in sync with the main schema. 
* If a new field is added to an entity, the change should only happen in one place, and the entire codebase should be able to to work with it.
* The prototypes have methods for construction, validation, marshalling to and from raw objects, getting token representations of larger objects, etc.

# Files
## domain/
* **entity/** All of the entities defined in the schema have corresponding prototype objects in the domain/entity folder.
* **domain.js** allows the entities to be grouped as a library and used in both Node and the browser.
* **package.json** describes the module for Node.
* **index.html** has a simple test that proves a compound object can be instantiated as expected in the browser. 

## spec/
* **support/** contains Jasmine's configuration file
* ***-spec.js** the Jasmine tests for the entities



