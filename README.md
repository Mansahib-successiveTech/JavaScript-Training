----------------------12 factor app------------------------------
Twelve-Factor App is a set of 12 principles, or best practices, for building web applications, which are now commonly known as SaaS (Software as a Service). These principles help create applications that reduce development time and cost, especially when new people join the team. It is highly portable and suitable for development on various cloud platforms, allowing continuous development and scaling.

1.codebase
Use and maintain a single codebase tracked using version control systems like Git. There should not be multiple codebases for the same app.
multiple version of a app can exist for like testing ,etc

2.Dependencies
Explicitly declare dependencies. We must list dependencies in a file that includes their names and versions. This increases speed and efficiency because developers no longer need to manually manage or download specific dependency versions.Devlepors do not need to manage version of dependies and other specific dependencies no need to explicitly download dependencies

3.Config
The source code will have configuration files containing things like database credentials, API keys, URIs, and environment variables. These should be separated from the code, and no config should be stored in Git as plain text. This way, you open your source code without compromising your credentials.

4.Backing Services
A backing service is anything your app connects to over the internet or network to help it run, like databases, email services, or caching systems. These services are not part of your app’s code but are essential for its work. These services can be easily swapped out if needed, without changing the app’s code, such as changing credentials or service URLs.

5.Build, Release, Run
Deployment should be divided into three separate stages: build, release, and run.
The build phase compiles the code.The release phase takes the build artifact and adds configuration for a specific environment.The run phase starts the app instance.

6.Processes
The app should run as one or more independent, stateless processes. For example, one process might handle video, another might handle background tasks. The app should be stateless, meaning it does not remember anything like sessions; it should not store user sessions, files, or important data in memory or on disk. If the app depends on local memory or files, it could break. Instead, store data in external services like AWS databases. Temporary storage can be used for very short tasks, but sessions should be avoided. This way, the app can crash or restart without losing important data.

7.Port Binding
The app should open and listen on a specific port by itself, instead of relying on external servers like Apache or Nginx. If your app binds to a port and offers a service (like an API), other apps can call it—making your app a backing service.

8.Concurrency
The app should handle many tasks at the same time, running side by side. For example, if there are n users, the app should handle n tasks concurrently and be able to scale as users increase. However, the app should not be overcomplicated by having too many background tasks.

9.Disposability
Processes should start and stop quickly, usually within seconds. This makes it easy to handle new requests and scale by creating more processes as needed. When stopping or terminating, a process should either stop immediately or complete its current task cleanly, shutting down gracefully even in case of crashes. This makes the app flexible, scalable, and reliable.

10.Dev/Prod Parity
keep development and production environments as similar as possible.
Time gap: Code may take a long time to go live.
People gap: Different teams write and deploy the code.
Tools gap: Developers use different tools than production.
These differences can cause bugs and delays.

11.Logs—Treat as Event Streams
Don’t write logs to files or manage log storage inside the app. Instead, each process should write logs as a continuous stream directly. During development, you can watch this live in your terminal. In production, external tools can collect and analyze these logs.

12.Admin Processes
These are special tasks run occasionally, not part of the normal app operation. Examples include running one-time scripts to fix data or perform maintenance. Admin tasks should run the same way as your app’s regular processes, using the same code, configuration, and environment. This ensures consistency, avoids syncing problems, and makes debugging easier.

--------------------atomic design-------------------

Atomic Design

Atomic Design is a way to build web apps or websites by breaking the design into small, reusable parts called atoms. Instead of designing the whole app at once, we start with small pieces and combine them step-by-step to create the full app. This helps keep the design consistent and easier to manage.

The word atomic comes from atoms, which are the smallest building blocks in chemistry. In design, atoms are the smallest components, like buttons or input fields, that can’t be broken down further.

Here’s how Atomic Design works:

Atoms
These are the smallest parts of your design, like buttons, labels, or icons. They are simple and reusable everywhere in your app.

Molecules
Molecules are groups of atoms put together to make a slightly more complex component. For example, a search form made of a text input (atom) and a button (atom).

Organisms
Organisms are bigger groups made from molecules and atoms. For example, a header with a logo, navigation menu, and search form.

Templates
Templates give a basic layout or skeleton for a page. They arrange organisms and molecules in a structure but don’t have final content yet.

Pages
Pages are the final, complete designs. They fill the templates with real content and show how the finished app or website looks.

Benefits of Atomic Design:

Builds from small to big: Start with simple parts and combine them step-by-step to build the full design.

Reusable components: Atoms and molecules can be reused in many places, saving time and effort.

Consistent design: Since the same components are used throughout, the app looks and feels consistent.

Easy to scale: Adding new features or pages is easier because you can reuse existing components.

Atomic Design makes creating and maintaining web apps easier, faster, and more organized.

