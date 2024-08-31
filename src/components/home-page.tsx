'use client'

import { useState } from 'react'
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { ChevronRight, Code, Laptop, Zap, Mail } from "lucide-react"
import styles from "@/src/styles/Home.module.css"

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario enviado', { name, email, message })
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          background-color: black;
          color: white;
        }
      `}</style>

      <header className="border-b border-gray-800">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-bold">QuickIT</a>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#clients" className="text-sm text-gray-400 hover:text-white transition-colors">Clients</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
              Get started
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 p-4">
            <a href="#about" className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#clients" className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">Clients</a>
            <a href="#contact" className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
            <Button className="mt-4 w-full bg-white text-black hover:bg-gray-200 transition-colors">
              Get started
            </Button>
          </div>
        )}
      </header>

      <main>
        <section id="presentation" className={`${styles.box_container_body}`}>
          <div className={`${styles.box_container}`}>
            <div className={`${styles.text_label}`}>
              <h1 className={`${styles.text_label_title}`}>
                Soluciones digitales.<br />resultados reales
              </h1>
              <p className={`${styles.text_label_desc}`}>
                QuickIT Con un enfoque centrado en la innovación, la calidad y la adaptabilidad, creamos productos tecnológicos que no solo resuelven problemas actuales.
              </p>
              <div className={`${styles.text_label_buttons}`}>
                <Button className="bg-white text-black hover:bg-gray-200 transition-colors px-8 py-3 text-lg">
                  Get started
                </Button>
              </div>
          </div>
          </div>
        </section>
        <section id="presentation" className={`${styles.container}`}>
          <div className={`${styles.box_container}`}>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">About QuickIT</h2>
            <p className="text-gray-400 text-lg mb-6">
            QuickIT es una empresa de desarrollo de software de vanguardia dedicada a crear soluciones innovadoras para empresas de todos los tamaños. Nuestro equipo de desarrolladores y diseñadores expertos trabaja incansablemente para ofrecer software escalable y de alta calidad que satisfaga las necesidades únicas de cada cliente.
            </p>
            <p className="text-gray-400 text-lg">
            Con un enfoque en metodologías ágiles y las últimas tecnologías, nos aseguramos de que nuestros proyectos se entreguen a tiempo y superen las expectativas. En QuickIT, creemos en construir asociaciones duraderas con nuestros clientes, ayudándolos a navegar por el panorama de la tecnología en constante cambio.
            </p>
          </div>
        </section>

        <section id="skills" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Code className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-400 text-center">React, Vue, Angular</p>
              </div>
              <div className="flex flex-col items-center">
                <Laptop className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
                <p className="text-gray-400 text-center">React Native, Flutter</p>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-gray-400 text-center">Node.js, Python, Java</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Projects</h2>
            <div className="grid gap-8">
              <div className="bg-black p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">In Progress</span>
                  <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">ENG</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400"><strong>Docs & links:</strong> Exploration, User interviews</p>
                  <p className="text-gray-400"><strong>Milestones:</strong></p>
                  <ul className="list-disc list-inside text-gray-400 ml-4">
                    <li>Design Review 100%</li>
                    <li>Internal Alpha 100% of 10</li>
                    <li>GA 25% of 53</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center h-20 bg-gray-800 rounded-lg">Client 1</div>
              <div className="flex items-center justify-center h-20 bg-gray-800 rounded-lg">Client 2</div>
              <div className="flex items-center justify-center h-20 bg-gray-800 rounded-lg">Client 3</div>
              <div className="flex items-center justify-center h-20 bg-gray-800 rounded-lg">Client 4</div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-black border-gray-700 text-white placeholder-gray-500"
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black border-gray-700 text-white placeholder-gray-500"
                  required
                />
              </div>
              <div className="mb-4">
                <Textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-black border-gray-700 text-white placeholder-gray-500"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 transition-colors">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-black py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">DPA</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Developers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">info@quickit.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2023 QuickIT. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}