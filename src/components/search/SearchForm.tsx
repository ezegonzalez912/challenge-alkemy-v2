import { Formik, Form, Field, ErrorMessage, FormikValues, FormikErrors } from 'formik';

interface Props {
    handleSubmit: (values: FormikValues, {setSubmitting}:any) => void;
}

export const SearchForm: React.FC<Props> = ({handleSubmit}) => {

    const valiidatesField = (values:FormikValues) => {
        const errors:FormikErrors<FormikValues> = {}
        if(!values.search){
            errors.search = "The field cannot be empty"
        }
        return errors
    }

    return (
        <div className="search-title-form">
            <h1>Search <span className="fw-400">Hero</span></h1>
            <Formik initialValues={{search: ''}} onSubmit={handleSubmit} validate={valiidatesField}>
                {({isSubmitting}) => (
                <Form>
                    <div className="search-form">
                        <Field className="form-control" placeholder="Batman" name="search" autoComplete="off"/>
                        <button className="btn-primary" type="submit" disabled={isSubmitting}>Search</button>
                    </div>
                    <ErrorMessage name="search" className="form-error-message" component="p"/>
                </Form>
                )}
            </Formik>
        </div>
    )
}
