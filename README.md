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
* **entity/*.js** - All of the entities defined in the schema have corresponding prototype objects in the domain/entity folder.
* **domain.js** - Allows the entities to be grouped as a library and used in both Node and the browser.
* **package.json** - Describes the module for Node.
* **index.html** - Has a simple test that proves a compound object can be instantiated as expected in the browser. 

### spec/
* **support/** - Contains Jasmine's configuration file
* ***-spec.js** - The Jasmine tests for the entities

## TODO
### Namespacing
* Currently, the entities are defined either in Node's **global** or the browser's **window** object. 
* The entities themselves must refer to the namespace when constructing new instances of themselves or of child entities, which is why (for the moment) they simply have no namespace.
* We could hardcode the namespace, such that if our namespace is 'ns', the ns.User constructor calls ns.UserToken's constructor when making an instance.
* Or, we could parameterize it, such that domain.js could have a namespace for the objects to be placed into and the namespace is passed into each of the entities, and they in turn use the reference to the namespace to reach entity constructors.
