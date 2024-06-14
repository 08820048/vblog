import{_ as n,c as s,o as a,a as e}from"./app-j_UEFRBt.js";const l={},p=e(`<h1 id="rust基础学习-modules-package" tabindex="-1"><a class="header-anchor" href="#rust基础学习-modules-package"><span>Rust基础学习-Modules&amp;Package</span></a></h1><p>在Rust中，模块有助于将程序分割成逻辑单元，以提高可读性和组织性。一旦程序变得更大，将其拆分为多个文件或命名空间非常重要。</p><p>模块有助于构建我们的程序。模块是项目的集合：包括函数、结构体甚至其他模块。</p><p><img src="https://images.waer.ltd/notes/cargo.jpg" alt="cargo"></p><hr><h2 id="module" tabindex="-1"><a class="header-anchor" href="#module"><span>Module</span></a></h2><h3 id="定义模块" tabindex="-1"><a class="header-anchor" href="#定义模块"><span>定义模块</span></a></h3><p>在<code>Rust</code>中，可以使用<code>mod</code>关键字来定义一个模块，语法如下：</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line"><span class="token keyword">mod</span> <span class="token module-declaration namespace">module_name</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// code</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，<code>module_name </code>是模块的名称。看下面的例子；</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line"><span class="token keyword">mod</span> <span class="token module-declaration namespace">config</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">fn</span> <span class="token function-definition function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;config!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的示例中，我们使用<code>mod</code>定义了以<code>config</code>为名称的一个模块。在模块内部，我们定义 了一个简单的函数<code>print</code>;</p><hr><h3 id="rust-模块内项目的可见性" tabindex="-1"><a class="header-anchor" href="#rust-模块内项目的可见性"><span>Rust 模块内项目的可见性</span></a></h3><p>模块中的项目可以是私有的或公共的。默认情况下，模块是私有的。</p><p>这意味着模块内部的项目无法在模块外部访问。<code>pub </code>关键字可用于使项目具有公共可见性。让我们看一个示例。</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line"><span class="token keyword">mod</span> <span class="token module-declaration namespace">config</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// items in modules by default have private visibility</span></span>
<span class="line">    <span class="token keyword">fn</span> <span class="token function-definition function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;called config::select&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// use the \`pub\` keyword to override private visibility</span></span>
<span class="line">    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;called config::print&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，我们定义一个名为<code>config</code>的模块，其中包含两个函数<code>select()</code>和<code>print()</code>。</p><p><code>print(</code>)函数以<code>pub</code>关键字开头，这意味着它具有公共可见性。但<code>select()</code>函数则没有。</p><p>如果你此时运行程序会发现有一些警告，这是因为我们并没有调用这些函数，现在，我们尝试调用一下；</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line"><span class="token keyword">mod</span> <span class="token module-declaration namespace">config</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// items in modules by default have private visibility</span></span>
<span class="line">    <span class="token keyword">fn</span> <span class="token function-definition function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;called config::select&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// use the \`pub\` keyword to override private visibility</span></span>
<span class="line">    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;called config::print&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// public items inside module can be accessed outside the parent module</span></span>
<span class="line">    <span class="token comment">// call public print function from display module</span></span>
<span class="line">    <span class="token namespace">config<span class="token punctuation">::</span></span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，我们使用<code>config::print()</code>语法来调用 <code>config </code>模块内的公共函数 <code>print()</code>。<code>:: </code>运算符用于分隔模块名称和要在模块内调用的项目。</p><p>但是，模块内部的私有项目不可在模块外部访问。如果我们尝试在 <code>config </code>模块内调用私有函数 <code>select()</code>，将会收到编译错误。</p><hr><blockquote><p>注意：当在模块内部某个用<code>pub</code>修饰的方法调用模块内部非<code>pub</code>方法时，我们在调用该<code>pub</code>方法时，其涉及到的非<code>pub</code>方法也将具有<code>pub</code>性质；</p></blockquote><p>我们看个例子：</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line"><span class="token keyword">mod</span> <span class="token module-declaration namespace">player</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// private function</span></span>
<span class="line">    <span class="token keyword">fn</span> <span class="token function-definition function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;called player::focus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// public function</span></span>
<span class="line">    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;called player::shift&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// public function</span></span>
<span class="line">    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// call private function focus and shift inside the module</span></span>
<span class="line">        <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;called player::jump&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// call public function jump from player module</span></span>
<span class="line">    <span class="token namespace">player<span class="token punctuation">::</span></span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>called player::focus called player::shift called player::jump</p></blockquote><p>在这里，我们在<code>player</code>模块内定义了多个函数。请注意，我们能够在同一模块内的另一个函数<code>jump()</code>中调用私有函数<code>focus()</code>。</p><hr><h3 id="模块嵌套" tabindex="-1"><a class="header-anchor" href="#模块嵌套"><span>模块嵌套</span></a></h3><p>一个模块中还可以在定义其他模块，这就是模块的嵌套；看例子：</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line"><span class="token comment">// nested module</span></span>
<span class="line"><span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">player</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">sprite</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;called player::sprite::create&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// call public function create from sprite module which is inside player module </span></span>
<span class="line">    <span class="token namespace">player<span class="token punctuation">::</span>sprite<span class="token punctuation">::</span></span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><blockquote><p>called player::sprite::create</p></blockquote><p>在这里，我们将一个 <code>sprite </code>模块嵌套在 <code>player </code>模块内部。我们在 <code>sprite </code>模块内定义了一个名为 <code>create()</code> 的公共函数，在<code> main()</code> 函数中通过 <code>player::sprite::create() </code>调用。</p><hr><h3 id="use关键字" tabindex="-1"><a class="header-anchor" href="#use关键字"><span>use关键字</span></a></h3><p>我们可以使用<code>use</code>关键字将模块内的项目引入当前作用域。<code>use</code>关键字帮助我们消除调用函数时写出完整模块路径的需要。让我们通过使用<code>use</code>关键字来重新编写我们的嵌套模块示例。</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line"><span class="token comment">// nested module</span></span>
<span class="line"><span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">player</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">pub</span> <span class="token keyword">mod</span> <span class="token module-declaration namespace">sprite</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;called player::sprite::create&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// bring the create function into scope</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token namespace">player<span class="token punctuation">::</span>sprite<span class="token punctuation">::</span></span>create<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// call public function directly</span></span>
<span class="line">    <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这里，我们使用 <code>use </code>关键字从 <code>player </code>模块内部的 <code>sprite </code>模块中将 <code>create() </code>函数引入当前作用域。</p><p>这样我们可以直接调用 <code>create() </code>函数，而不需要完全限定名称为 <code>player::sprite::create()。</code></p></blockquote><hr><h2 id="crate和package" tabindex="-1"><a class="header-anchor" href="#crate和package"><span>Crate和Package</span></a></h2><p>一个 <code>crate </code>可以包含一个或多个 <code>Rust </code>模块，这些模块可以包含诸如函数、类型和常量之类的代码。</p><p>一个 <code>crate </code>有两种类型：二进制 <code>crate </code>和库 <code>crate</code>。二进制 <code>crate </code>是一个 <code>Rust</code> 程序，编译成一个可执行文件或多个可执行文件，并且每个可执行文件都有一个 <code>main()</code> 函数。</p><p>库 <code>crate </code>不会编译成可执行文件，也没有 <code>main()</code> 函数。库 <code>crate </code>通常定义了可以在多个项目中使用的共享功能。<code>Crates </code>可以捆绑在一起形成一个 <code>package</code>。</p><hr><p>可以使用内置在Rust中的Cargo软件包管理器来创建软件包。 Cargo与Rust一起预安装。我们可以使用 cargo 来创建一个软件包。一个软件包包含一个或多个提供一组功能的crate。</p><blockquote><p>一个包中可以包含许多二进制 crate，但最多只能包含一个库 crate。</p></blockquote><hr><h3 id="创建二进制包" tabindex="-1"><a class="header-anchor" href="#创建二进制包"><span>创建二进制包</span></a></h3><p>要创建一个二进制包，我们可以在终端中使用 <code>cargo </code>命令。</p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="line">$ cargo new hello_world <span class="token operator">--</span>bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们使用 <code>cargo </code>和<code>--bin</code>选项创建一个二进制包 <code>hello_world</code>。 这是 <code>cargo </code>的默认行为。 让我们来看看 <code>hello_world </code>包的内容。</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line">hello_world</span>
<span class="line">├── <span class="token class-name">Cargo</span><span class="token punctuation">.</span>toml</span>
<span class="line">└── src</span>
<span class="line">    └── main<span class="token punctuation">.</span>rs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>hello_world</code> 是包目录</li><li><code>Cargo.toml </code>是一个包含有关 <code>crate </code>的元数据的文件，如其名称、版本和依赖项</li><li><code>src/main.rs </code>是 <code>crate </code>根目录，包含二进制包的源代码</li></ul><hr><h3 id="创建库包" tabindex="-1"><a class="header-anchor" href="#创建库包"><span>创建库包</span></a></h3><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="line">$ cargo new hello_world_lib <span class="token operator">--</span>lib</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>包结构如下：</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line">hello_world_lib</span>
<span class="line">├── <span class="token class-name">Cargo</span><span class="token punctuation">.</span>toml</span>
<span class="line">└── src</span>
<span class="line">    └── lib<span class="token punctuation">.</span>rs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>hello_world_lib </code>是包目录</li><li><code>Cargo.toml </code>是一个包含有关包的元数据的文件，例如其名称、版本和依赖关系</li><li><code>src/lib.rs </code>是 crate 根目录，包含库包的源代码</li></ul><p>一个包可以包含<code>src/main.rs</code>和<code>src/lib.rs</code>。在这种情况下，它有两个 crate：一个二进制 crate 和一个库 crate，两者都与包的名称相同。例如，</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line">hello_world</span>
<span class="line">├── <span class="token class-name">Cargo</span><span class="token punctuation">.</span>toml</span>
<span class="line">└── src</span>
<span class="line">    └── lib<span class="token punctuation">.</span>rs</span>
<span class="line">    └── main<span class="token punctuation">.</span>rs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="cargo包管理器" tabindex="-1"><a class="header-anchor" href="#cargo包管理器"><span>Cargo包管理器</span></a></h2><h3 id="cargo" tabindex="-1"><a class="header-anchor" href="#cargo"><span>Cargo</span></a></h3><p><code>Cargo</code>是<code>Rust</code>的包管理器。它与<code>Rust</code>一起预装，并可用于打包依赖项，管理它们以及构建和分发我们自己的包/库。</p><p><strong>cargo的特点：</strong></p><ul><li>依赖管理</li></ul><blockquote><p>Cargo 可轻松管理我们项目的依赖项，包括添加、更新和删除依赖项。 构建和打包</p></blockquote><blockquote><p>Cargo 可自动构建和打包我们的 Rust 项目，创建可与他人共享的二进制或库代码。</p></blockquote><ul><li>文档生成</li></ul><blockquote><p>Cargo 可自动为我们的代码生成文档，使其他开发人员更容易理解和使用我们的库。</p></blockquote><ul><li>下载 crate</li></ul><blockquote><p>Cargo 可从 crates.io 下载并安装库，这是 Rust crate 的中央存储库。</p></blockquote><ul><li>运行二进制或测试</li></ul><blockquote><p>Cargo 可构建我们的源代码，运行可执行二进制文件，并运行我们的测试。</p></blockquote><hr><h3 id="依赖管理" tabindex="-1"><a class="header-anchor" href="#依赖管理"><span>依赖管理</span></a></h3><p><code>Cargo </code>的主要功能之一是可以下载、管理外部库。让我们看看如何从<code> crates.io</code> 使用外部 crate 的示例。crates.io 是一个中央仓库，我们可以从中获取和发布用于 Rust 的共享库。</p><ul><li>创建一个项目</li></ul><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line">$ cargo new hello_world</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>添加一个生成随机数的依赖<code>rand</code>,我们可以在<code>cargo.toml</code>中的<code>[dependencies]</code>部分进行添加</li></ul><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line">name <span class="token operator">=</span> <span class="token string">&quot;hello_world&quot;</span></span>
<span class="line">version <span class="token operator">=</span> <span class="token string">&quot;0.1.0&quot;</span></span>
<span class="line">edition <span class="token operator">=</span> <span class="token string">&quot;2021&quot;</span></span>
<span class="line"></span>
<span class="line"># <span class="token class-name">See</span> more keys and their definitions at https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>doc<span class="token punctuation">.</span>rust<span class="token operator">-</span>lang<span class="token punctuation">.</span>org<span class="token operator">/</span>cargo<span class="token operator">/</span>reference<span class="token operator">/</span>manifest<span class="token punctuation">.</span>html</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>dependencies<span class="token punctuation">]</span></span>
<span class="line">rand <span class="token operator">=</span> <span class="token string">&quot;0.8.5&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以使用命令<code> cargo add rand</code> 来为我们的项目添加依赖。</p><blockquote><p>注意，如果通过命令的方式添加依赖，在添加时<code>Rust</code>就会加载编译该依赖，而通过<code>cargo.toml</code>手动添加时，程序会在你首次运行程序时进行加载编译的操作。</p></blockquote><ul><li>使用依赖</li></ul><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line"><span class="token keyword">use</span> <span class="token namespace">rand<span class="token punctuation">::</span></span><span class="token class-name">Rng</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token keyword">mut</span> rng <span class="token operator">=</span> <span class="token namespace">rand<span class="token punctuation">::</span></span><span class="token function">thread_rng</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// simulate rolling a die</span></span>
<span class="line">    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;roll = {}&quot;</span><span class="token punctuation">,</span> rng<span class="token punctuation">.</span><span class="token function">gen_range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">..=</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"># <span class="token class-name">Output</span><span class="token punctuation">:</span> roll <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="构建和执行" tabindex="-1"><a class="header-anchor" href="#构建和执行"><span>构建和执行</span></a></h3><p><code>Rust</code>支持使用<code>cargo</code>命令对程序进行<code>build</code>和<code>run</code>.命令分别是</p><ul><li>cargo build</li><li>cargo run</li></ul><blockquote><p>一般情况下，执行<code>cargo run</code>时，默认会自动执行<code>cargo build</code>,所以一般我们需要运行程序时不需要先执行<code>build</code>，再执行<code>run</code>,而是直接执行<code>cargo run</code>即可。</p></blockquote><p>常用命令一览表：</p><table><thead><tr><th style="text-align:left;">Command</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cargo new</code></td><td style="text-align:left;">Create a new Rust project with basic directory structure</td></tr><tr><td style="text-align:left;"><code>cargo build</code></td><td style="text-align:left;">Build (compile) the current project and generate a binary executable</td></tr><tr><td style="text-align:left;"><code>cargo run</code></td><td style="text-align:left;">Build and run your current project (cargo build + run)</td></tr><tr><td style="text-align:left;"><code>cargo check</code></td><td style="text-align:left;">Build the current project without generating a binary executable</td></tr><tr><td style="text-align:left;"><code>cargo add</code></td><td style="text-align:left;">Add a new dependency and include it in <code>Cargo.toml</code> file</td></tr><tr><td style="text-align:left;"><code>cargo update</code></td><td style="text-align:left;">Update all dependencies of current project to latest version</td></tr></tbody></table>`,96),t=[p];function c(i,o){return a(),s("div",null,t)}const u=n(l,[["render",c],["__file","Rust.html.vue"]]),r=JSON.parse('{"path":"/posts/Rust.html","title":"Rust基础学习-Modules&Package","lang":"en-US","frontmatter":{"date":"2024-06-13T00:00:00.000Z","category":["Rust基础"],"tag":["Rust","Cargo"],"excerpt":"<p style=\\"color:gray;\\">在Rust中，模块有助于将程序分割成逻辑单元，以提高可读性和组织性。一旦程序变得更大，将其拆分为多个文件或命名空间非常重要。模块有助于构建我们的程序。模块是项目的集合：包括函数、结构体甚至其他模块</p>"},"headers":[{"level":2,"title":"Module","slug":"module","link":"#module","children":[{"level":3,"title":"定义模块","slug":"定义模块","link":"#定义模块","children":[]},{"level":3,"title":"Rust 模块内项目的可见性","slug":"rust-模块内项目的可见性","link":"#rust-模块内项目的可见性","children":[]},{"level":3,"title":"模块嵌套","slug":"模块嵌套","link":"#模块嵌套","children":[]},{"level":3,"title":"use关键字","slug":"use关键字","link":"#use关键字","children":[]}]},{"level":2,"title":"Crate和Package","slug":"crate和package","link":"#crate和package","children":[{"level":3,"title":"创建二进制包","slug":"创建二进制包","link":"#创建二进制包","children":[]},{"level":3,"title":"创建库包","slug":"创建库包","link":"#创建库包","children":[]}]},{"level":2,"title":"Cargo包管理器","slug":"cargo包管理器","link":"#cargo包管理器","children":[{"level":3,"title":"Cargo","slug":"cargo","link":"#cargo","children":[]},{"level":3,"title":"依赖管理","slug":"依赖管理","link":"#依赖管理","children":[]},{"level":3,"title":"构建和执行","slug":"构建和执行","link":"#构建和执行","children":[]}]}],"git":{"updatedTime":1718331727000,"contributors":[{"name":"八尺","email":"ilikexff@gmail.com","commits":1}]},"filePathRelative":"posts/Rust.md"}');export{u as comp,r as data};
