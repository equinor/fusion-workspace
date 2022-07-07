Workspace controller

The workspace controller is a common hub for all controllers.
Every controller registered on the workspace controller is supposed to be 100% decoupled from eachother and only bind through binder functions.

Controllers:
Controllers are the acuators of the workspace, nothing happens without a controller. The goal is to create many small and specific controllers that does one thing well.
The middleware will bind them all together, and unlock endless possibilities.

Middleware/Binders:
Controllers are supposed to be 100% decoupled from each other. Binders/middleware is the translator that connects one or multiple controllers.
This ensures that all controlles can be used standalone, and ensures high flexibility with low complexity.

Context:
Reserved slot for the configurer(you) to define and utilize. Most common use for it is to share data from one controller to another. Through context and middleware/binders.

Events:
The workspace controller consists of the most "Core" events that most controllers will depend on in some form.
Controllers and middleware usually binds through workspace controller events. Alternatively you can extend the workspace controller with common data fields through the controller`s context property
