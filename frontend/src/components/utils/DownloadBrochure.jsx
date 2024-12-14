function DownloadBrochure() {
    const link = document.createElement('a')
    link.href = "/technosummit'24.pdf"
    link.download = 'TechnoSummit24.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

export default DownloadBrochure