class LibraryController {
  constructor(LibraryService) {
    this.libraryService = LibraryService;
  }

  getAllLibraries(req, res) {
    this.libraryService.getAllLibraries().subscribe({
      next: (data) => res.status(200).json({ status: 200, data }),
      error: (error) => res.status(400).json({ status: 400, data: {}, error }),
    });
  }

  createLibrary(req, res) {
    this.libraryService.createLibrary(req.body).subscribe({
      next: (data) => res.status(201).json({ status: 201, data }),
      error: (error) => res.status(400).json({ status: 400, data: {}, error }),
    });
  }

  getById(req, res) {
    this.libraryService.getById(req.params.library_id).subscribe({
      next: (data) => res.status(200).json({ status: 200, libraries: data }),
      error: () => res.status(404).json({ status: 404, data: {} }),
    });
  }
}
module.exports = LibraryController;
