export default function Footer(){
  return (
    <footer className="py-8 border-t border-black/5 dark:border-white/10">
      <div className="container-slim text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>&copy; <span id="y">{new Date().getFullYear()}</span> Sagar Tadiyal. All rights reserved.</p>
        <a href="#home" className="hover:text-primary-600">Back to top ↑</a>
      </div>
    </footer>
  )
}
