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
        Modules{" "}
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
        2. Centralize Business Logic in Services{" "}
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
            {`import { Logger } from '@nestjs/common';

const logger = new Logger('MyApp');
logger.log('Application has started');`}
          </code>
        </pre>
      </div>

      {/* Third Section */}
      <h3 className="section-title" id="validation">
        3. Use Validation Pipes
      </h3>
      <p className="section-paragraph">
        Validation pipes help in ensuring that incoming data is validated and
        sanitized before it reaches the controller logic.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;
}`}
          </code>
        </pre>
      </div>

      {/* Fourth Section */}
      <h3 className="section-title" id="exception">
        4. Use Middleware for Request Handling
      </h3>
      <p className="section-paragraph">
        Middleware can help in handling requests and performing specific actions
        before the request reaches the controller.
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

      {/* Fifth Section */}
      <h3 className="section-title" id="modules">
        5. Managing Dependencies in Modules
      </h3>
      <p className="section-paragraph">
        Properly managing dependencies within modules ensures that your
        application remains scalable and maintainable.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}`}
          </code>
        </pre>
      </div>

      {/* Sixth Section */}
      <h3 className="section-title" id="dto">
        6. Using Data Transfer Objects (DTO)
      </h3>
      <p className="section-paragraph">
        DTOs are used to define the shape of data sent and received by your
        application. They help ensure that your application receives the
        expected data format.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`export class CreateUserDto {
  @IsString()
  readonly name: string;
}`}
          </code>
        </pre>
      </div>

      {/* Seventh Section */}
      <h3 className="section-title" id="services">
        7. Keep Services Focused
      </h3>
      <p className="section-paragraph">
        Services should be focused on a specific task or set of related tasks.
        This ensures that your services remain easy to maintain and test.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  findAll(): User[] {
    return this.users;
  }

  create(user: User) {
    this.users.push(user);
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

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#f8f8f8",
        padding: "20px",
        borderTop: "1px solid #ccc",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img src="logo.png" alt="HNG Boilerplate" />
        </div>
        <div>
          <p>&copy; 2024 HNG Boilerplate</p>
        </div>
        <div>
          <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
            <li>
              <a href="#github">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

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
