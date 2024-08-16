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
      <h2 className="title">
        Best Practices for Building Scalable and Efficient NestJS Applications
      </h2>
      <p className="section-paragraph">
        Building scalable applications with NestJS involves following certain
        best practices and principles to ensure that your application is
        maintainable, efficient, and ready to handle growth. Here are some key
        points to keep in mind.
      </p>

      {/* First Section */}
      <h3 className="section-title" id="best-practices">
        1. Use a Modular Structure
      </h3>
      <p className="section-paragraph">
        Using a modular structure allows for better separation of concerns and
        easier management of code. Each module should encapsulate related
        components, services, and controllers.
      </p>
      <div className="code-block">
        <pre>
          <code>
            {`import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}`}
          </code>
        </pre>
      </div>

      {/* Second Section */}
      <h3 className="section-title" id="logging">
        2. Centralized Logging
      </h3>
      <p className="section-paragraph">
        Centralized logging ensures that all logs are collected in one place,
        making it easier to monitor and troubleshoot the application.
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
