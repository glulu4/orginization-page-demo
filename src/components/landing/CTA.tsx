import DonateButton from "../DonateButton";
import FormButton from "../FormButton";

export default function CTA() {
    return (
        <div className="bg-white">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className=" font-semibold leading-none text-5xl text-center font-serif text-blue-950 sm:text-7xl">
                        How You Can Help
                    </p>
                    <p className="mt-8 text-xl font-medium text-pretty text-gray-600 sm:text-3xl/8 text-center">
                        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                        commodo do ea.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-5 items-center justify-center gap-x-6">
        <DonateButton/>
                    <FormButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}
