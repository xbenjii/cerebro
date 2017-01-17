import iconExtractor from 'icon-extractor';

export default (path) => (
  new Promise(resolve => {
    iconExtractor.emitter.on('icon', function(data){
      resolve(data.Base64ImageData);
    });

    iconExtractor.getIcon(path, path);
  })
)
