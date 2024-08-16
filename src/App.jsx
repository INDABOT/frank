/* eslint-disable react/no-unescaped-entities */
import "./App.css";

function Header() {
  return (
    <header
      className="header"
      style={{
        backgroundColor: "white",
        padding: "10px 20px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h1>HNG Boilerplate</h1>
      <nav>
        <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <a href="#best-practices" className="active">
            Best Practices
          </a>
        </li>
        <li>
          <a href="#logging">Logging</a>
        </li>
        <li>
          <a href="#validation">Validation</a>
        </li>
        <li>
          <a href="#exception">Exception Handling</a>
        </li>
        <li>
          <a href="#modules">Modules</a>
        </li>
        <li>
          <a href="#dto">DTO</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#config">Configuration</a>
        </li>
        <li>
          <a href="#security">Security</a>
        </li>
      </ul>
    </aside>
  );
}

function Content() {
  return (
    <section className="content">
      <h1 className="title">
        Best Practices for Building Scalable and Efficient NestJS Applications
      </h1>
      <p className="section-paragraph">
        NestJS has rapidly gained popularity as a robust framework for building
        scalable and maintainable Node.js applications. An increasing number of
        backed developers now use NestJs to create Roboust backend projects. As
        with all aspects of programming, there are best practices for building
        NestJS projects.
        <br />
        <br />
        This article explains some of NestJS best practices that are used to
        build scalable, highly efficient, and maintainable NestJS backend
        applications.
      </p>
      <h2>Build Scalable Backend Projects with these Practices</h2>

      {/* First Section */}
      <h3 className="section-title" id="best-practices">
        1. Using Modular Architecture: Break Down your Application into Smaller
        Modules
      </h3>
      <span>Modular Architecture</span>

      <p className="section-paragraph">
        One of the core principles of NestJS is its modular architecture, which
        encourages breaking down your application into smaller, self-contained
        modules. Each module encapsulates a specific domain of your application,
        such as user management, product management, or order processing. This
        approach not only keeps your codebase organized but also enhances
        maintainability and scalability by allowing you to manage and develop
        different parts of your application independently.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`// users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
@Module({
controllers: [UsersController], // Defines the controllers that belong to this module
providers: [UsersService], // Registers the service providers for dependency injection
})
export class UsersModule {} // Exports the UsersModule to be used in other parts of the application`}
          </code>
        </pre>
      </div>
      <span>Code Explanation</span>
      <p className="code_explain">
        The @Module decorator defines a module in NestJS. By grouping related
        components (such as controllers and services) within a module, you
        create a clear separation of concerns, making your code easier to
        navigate and understand. This modular structure also allows for better
        team collaboration, as different teams can work on different modules
        simultaneously without causing conflicts.
      </p>

      {/* Second Section */}
      <h3 className="section-title" id="logging">
        2. Centralize Business Logic in Services
      </h3>
      <p className="section-paragraph">
        Services in NestJS are classes that encapsulate your application's
        business logic. By centralizing the business logic in services, you
        promote code reuse and separation of concerns, which are critical for
        building maintainable applications. Services are reusable across
        different parts of your application, and they can be injected into
        controllers or other services, making your code more modular and
        testable.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`// users.service.ts
            import { Injectable } from '@nestjs/common';
@Injectable()
export class UsersService {
private users = []; // Initializes an empty array to store user data
create(user) {
this.users.push(user); // Adds a new user to the array
}
findAll() {
return this.users; // Returns all users in the array
}}`}
          </code>
        </pre>
      </div>
      <span>Code Explanation</span>
      <p className="code_explain">
        The @Injectable decorator marks the class as a provider that can be
        injected into other components. In this example, the UsersService
        handles the core business logic related to user management, such as
        creating new users and retrieving a list of all users. By encapsulating
        this logic within a service, you ensure that your controllers remain
        focused on handling HTTP requests, while the actual processing logic is
        delegated to the service layer. This separation makes your application
        easier to maintain and extend, as changes to the business logic only
        need to be made in one place.
      </p>

      {/* Third Section */}
      <h3 className="section-title" id="validation">
        3. Dependency Injection: Separate Services(Standalone Classes) from
        Clients
      </h3>
      <p className="section-paragraph">
        Dependency injection (DI) is a fundamental concept in NestJS, allowing
        you to inject dependencies into your classes instead of hard-coding
        them. This promotes loose coupling and makes your code more modular and
        easier to test. By leveraging DI, you can inject services, repositories,
        or other dependencies into your controllers, services, or other
        components, ensuring that each component only relies on the interfaces
        it needs to function.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`// users.controller.ts;
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users') // Defines the route prefix for this controller
export class UsersController {
constructor(private readonly usersService: UsersService) {} // Injects UsersService into the controller
@Post()
create(@Body() user) {
this.usersService.create(user); // Calls the service's create method to add a new user
}
}`}
          </code>
        </pre>
      </div>
      <span>Code Explanation</span>
      <p className="code_explain">
        In this example, the UsersService is injected into the UsersController
        through the constructor. This is a prime example of dependency injection
        in action. Instead of the controller instantiating the service directly,
        NestJS handles the creation and injection of the service instance. This
        approach allows for better testing, as you can easily mock or replace
        dependencies in your tests without modifying the actual implementation.
        Additionally, DI encourages following the SOLID principles, particularly
        the Dependency Inversion Principle, which states that high-level modules
        should not depend on low-level modules but on abstractions.
      </p>

      {/* Fourth Section */}
      <h3 className="section-title" id="exception">
        4. Use Middleware for Request Handling
      </h3>
      <p className="section-paragraph">
        Middleware functions in NestJS are used to process requests before they
        reach your route handlers. Middleware is useful for tasks such as
        logging, authentication checks, or transforming request data. By using
        middleware, you can apply common logic across multiple routes without
        duplicating code, which leads to cleaner and more maintainable
        applications.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log(\`Request...\`);
    next();
  }
}`}
          </code>
        </pre>
      </div>
      <span>Code Explanation</span>
      <p className="code_explain">
        The LoggerMiddleware in this example logs each incoming request's method
        and path. Middleware like this is particularly useful for monitoring and
        debugging your application. By logging every request, you can gain
        valuable insights into how your application is being used, identify
        performance bottlenecks, and detect unusual patterns that may indicate
        security issues. Additionally, middleware can be used to enforce
        authentication or to parse and validate request data before it reaches
        your controllers, ensuring that your application behaves predictably and
        securely.
      </p>

      {/* Fifth Section */}
      <h3 className="section-title" id="modules">
        5. Routing should be handled by Controllers{" "}
      </h3>
      <p className="section-paragraph">
        Controllers in NestJS are responsible for handling incoming HTTP
        requests and returning responses to the client. They define the routes
        of your application and delegate the actual processing of requests to
        services or other components. By keeping your controllers focused on
        routing and request handling, you ensure that your application's
        business logic is properly separated from its presentation layer.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`// users.controller.ts
            import { Controller, Get } from '@nestjs/common';
            import { UsersService } from './users.service';
            @Controller('users') // Defines the route prefix for this controller
            export class UsersController {
            constructor(private readonly usersService: UsersService) {} // Injects UsersService into the controller 
            @Get()
            findAll() {
            return this.usersService.findAll(); // Calls the service's findAll method to return all users
            }
            }`}
          </code>
        </pre>
      </div>
      <span>Code Explanation</span>
      <p className="code_explain">
        The @Controller decorator defines a controller in NestJS, with the route
        prefix specified as 'users'. The @Get decorator maps HTTP GET requests
        to the findAll method, which retrieves all users from the service. By
        adhering to this pattern, you maintain a clear separation of concerns,
        with the controller focused solely on handling HTTP requests and
        responses, while the service layer manages the underlying business
        logic. This structure not only makes your code more maintainable but
        also facilitates testing, as each component can be tested in isolation.
      </p>

      {/* Sixth Section */}
      <h3 className="section-title" id="dto">
        6. Make Cleaner Codes with Custom Decorators{" "}
      </h3>
      <p className="section-paragraph">
        Custom decorators in NestJS allow you to encapsulate common logic that
        is used across multiple endpoints, improving code readability and
        reducing redundancy. By creating custom decorators, you can simplify
        your controller methods and make your code more expressive and easier to
        understand.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`import { createParamDecorator, ExecutionContext } from '@nestjs/common';
            export const User = createParamDecorator(
             (data: unknown, ctx: ExecutionContext) => {
             const request = ctx.switchToHttp().getRequest(); // Switches the context to HTTP and gets the request object
              return request.user; // Returns the user object from the request
               },
               );`}
          </code>
        </pre>
      </div>
      <span>Code Explanation</span>
      <p className="code_explain">
        The User decorator extracts the user object from the request, allowing
        you to access the authenticated user's data directly in your controller
        methods without having to manually retrieve it from the request object.
        This not only makes your code more concise but also reduces the risk of
        errors and improves maintainability. Custom decorators like this one are
        particularly useful when you need to apply the same logic across
        multiple controllers or routes, as they allow you to encapsulate and
        reuse the logic cleanly and consistently.
      </p>

      {/* Seventh Section */}
      <h3 className="section-title" id="services">
        7. Ensure Data Validation with Data Transfer Objects{" "}
      </h3>
      <p className="section-paragraph">
        Data Transfer Objects (DTOs) are used in NestJS to define the shape and
        structure of the data being transferred between different parts of your
        application. DTOs ensure type safety and provide a central place for
        validating incoming data, which is crucial for maintaining data
        integrity and preventing security vulnerabilities.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`// create-user.dto.ts
export class CreateUserDto {
readonly name: string; // The name property, which must be a string
readonly age: number;
// The age property, which must be a number
readonly email: string; // The email property, which must be a string
}
// users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
 @Controller('users') // Defines the route prefix for this controller
 export class UsersController {
 constructor(private readonly usersService: UsersService) {} // Injects UsersService into the controller
@Post()
create(@Body() createUserDto: CreateUserDto) {
this.usersService.create(createUserDto); // Calls the service's create method with the validated DTO
}
}`}
          </code>
        </pre>
      </div>

      {/* Eighth Section */}
      <h3 className="section-title" id="config">
        8. Manage Configuration Properly
      </h3>
      <p className="section-paragraph">
        Properly managing your application’s configuration is crucial for
        maintaining different environments and keeping sensitive data secure.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}`}
          </code>
        </pre>
      </div>

      {/* Ninth Section */}
      <h3 className="section-title" id="security">
        9. Secure Your Application
      </h3>
      <p className="section-paragraph">
        Security should be a top priority. Utilize best practices to secure your
        NestJS application from potential threats.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();`}
          </code>
        </pre>
      </div>

      <p className="section-paragraph">
        Following these practices will help you build a robust and scalable
        NestJS application that can handle real-world challenges.
      </p>
    </section>
  );
}

import Footer from "./Layouts/Footer";
function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content" style={{ display: "flex" }}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
