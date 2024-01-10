export default function usePresentation() {
  function handleDownloadCV() {
    const link = document.createElement('a')
    link.download = 'Héctor Gómez CV'
    link.href = '/cvs/ES.pdf'

    link.click()
  }

  return { handleDownloadCV }
}
