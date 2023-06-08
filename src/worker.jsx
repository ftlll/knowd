// import { pipeline } from '@xenova/transformers';

// class MySBERTPipeline {
//   static task = 'feature-extraction';
//   static model = 'Xenova/all-MiniLM-L6-v2';
//   static instance = null;

//   static async getInstance(progress_callback = null) {
//     if (this.instance === null) {
//       this.instance = pipeline(this.task, this.model, { progress_callback });
//     }

//     return this.instance;
//   }
// }

import { pipeline } from '@xenova/transformers';

/**
 * This class uses the Singleton pattern to ensure that only one instance of the
 * pipeline is loaded. This is because loading the pipeline is an expensive
 * operation and we don't want to do it every time we want to translate a sentence.
 */
export class MyTranslationPipeline {
    static task = 'translation';
    static model = 'Xenova/nllb-200-distilled-600M';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.instance = pipeline(this.task, this.model, { progress_callback });
        }

        return this.instance;
    }
}
